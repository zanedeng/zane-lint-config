import { execSync } from 'node:child_process';
import { getPackagesSync } from '../utils';
import type { UserConfig } from 'cz-git';

const { packages } = getPackagesSync();

const allowedScopes = [
  ...packages.map((pkg: { packageJson: { name: string } }) => pkg.packageJson.name),
  'project',
  'style',
  'lint',
  'ci',
  'dev',
  'deploy',
  'other',
];

// precomputed scope
const scopeComplete = execSync('git status --porcelain || true')
  .toString()
  .trim()
  .split('\n')
  .find((r: string) => r.includes('M  src'))
  ?.replace(/(\/)/g, '%%')
  ?.match(/src%%((\w|-)*)/)?.[1]
  ?.replace(/s$/, '');

export const commitlintConfig: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  prompt: {
    /** @use `pnpm commit :f` */
    alias: {
      b: 'build: bump dependencies',
      c: 'chore: update config',
      f: 'docs: fix typos',
      r: 'docs: update README',
      s: 'style: update code format',
    },
    allowCustomIssuePrefixs: false,
    allowEmptyIssuePrefixs: false,
    customScopesAlign: scopeComplete ? 'bottom' : 'top',
    defaultScope: scopeComplete,
    // English
    typesAppend: [
      { name: 'workflow: workflow improvements', value: 'workflow' },
      { name: 'types:    type definition file changes', value: 'types' },
    ],
  },
  rules: {
    /**
     * type[scope]: [function] description
     *
     * ^^^^^^^^^^^^^^ empty line.
     * - Something here
     */
    'body-leading-blank': [2, 'always'],
    /**
     * type[scope]: [function] description
     *
     * - something here
     *
     * ^^^^^^^^^^^^^^
     */
    'footer-leading-blank': [1, 'always'],
    /**
     * type[scope]: [function] description
     *      ^^^^^
     */
    'function-rules/scope-enum': [
      2, // level: error
      'always',
      (parsed: { scope?: string }) => {
        if (!parsed.scope || allowedScopes.includes(parsed.scope)) {
          return [true] as const;
        }

        return [false, `scope must be one of ${allowedScopes.join(', ')}`] as const;
      },
    ],
    /**
     * type[scope]: [function] description [No more than 108 characters]
     *      ^^^^^
     */
    'header-max-length': [2, 'always', 108],

    'scope-enum': [0] as const,
    'subject-case': [0] as const,
    'subject-empty': [2, 'never'] as const,
    'type-empty': [2, 'never'] as const,
    /**
     * type[scope]: [function] description
     * ^^^^
     */
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'style',
        'docs',
        'test',
        'refactor',
        'build',
        'ci',
        'chore',
        'revert',
        'types',
        'release',
      ],
    ] as const,
  },
};
