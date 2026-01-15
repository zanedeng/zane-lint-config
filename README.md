# @zanejs/lint-config

<div align="center">
  <a href="https://zanejs.com"><img alt="zanejs logo" width="215" src="https://unpkg.com/@zanejs/icons@1.0.1/dist/logo.svg"></a>

  [![NPM version](https://img.shields.io/npm/v/@zanejs/vite-config)](https://npmjs.com/package/@zanejs/vite-config)


  **English** | [中文](./README.zh-CN.md)
</div>

# Introduction

A powerful lint configuration collection that provides out-of-the-box code quality solutions for modern frontend projects.

## Features

- **ESLint Configuration**: Complete JavaScript/TypeScript/Vue code quality rules
- **Prettier Configuration**: Unified code formatting style
- **Stylelint Configuration**: CSS/SCSS code quality rules
- **Commitlint Configuration**: Standardized Git commit messages
- **Vue Support**: Native support for Vue 2 and Vue 3
- **TypeScript Support**: Complete type safety checks
- **Monorepo Support**: Automatic monorepo structure detection
- **Smart Sorting**: Automatic sorting of imports and exports

## Installation

```bash
npm install @zanejs/lint-config -D
```

## ESLint Configuration

### Basic Usage

```js
// eslint.config.js
import { eslintConfig } from '@zanejs/lint-config';

export default eslintConfig([]);
```

### Vue Projects

```js
// eslint.config.js
import { eslintConfig } from '@zanejs/lint-config';

export default eslintConfig([]);
```

### TypeScript Projects

```js
// eslint.config.js
import { eslintConfig } from '@zanejs/lint-config';

export default eslintConfig([]);
```

## Prettier Configuration

### Usage

```js
// prettier.config.js
import { prettierConfig } from '@zanejs/lint-config';

export default prettierConfig;
```

### Options

```js
{
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  proseWrap: 'never',
  endOfLine: 'auto',
}
```

## Stylelint Configuration

### Usage

```js
// stylelint.config.js
import { stylelintConfig } from '@zanejs/lint-config';

export default stylelintConfig;
```

### Support

- Standard CSS
- SCSS
- Vue Single File Components
- CSS property ordering

## Commitlint Configuration

### Usage

```js
// commitlint.config.js
import { commitlintConfig } from '@zanejs/lint-config';

export default commitlintConfig;
```

### Commit Format

```
type[scope]: description
```

### Supported Types

- feat: New features
- fix: Bug fixes
- perf: Performance improvements
- style: Code formatting
- docs: Documentation updates
- test: Test related
- refactor: Refactoring
- build: Build related
- ci: CI configuration
- chore: Other updates
- revert: Reverts
- types: Type definitions
- release: Releases

### Shortcut Commands

- `pnpm commit :b` - build: bump dependencies
- `pnpm commit :c` - chore: update config
- `pnpm commit :f` - docs: fix typos
- `pnpm commit :r` - docs: update README
- `pnpm commit :s` - style: update code format

## Built-in Rules

### ESLint Rules

- Code style conventions
- Best practices
- Potential problem detection
- TypeScript type checking
- Vue component conventions
- Import/Export sorting
- Unused code detection
- Test file conventions

### Prettier Rules

- Code formatting
- Quote style
- Semicolon handling
- Trailing commas
- Line width

### Stylelint Rules

- CSS writing conventions
- Selector naming
- Property ordering
- SCSS specific rules

## CI/CD Integration

### GitHub Actions

```yaml
- name: Lint Code
  run: |
    pnpm lint
```

### Husky

```bash
npx husky add .husky/pre-commit "pnpm exec lint-staged"
npx husky add .husky/commit-msg 'pnpm exec commitlint --edit "$1"'
npx husky add .husky/post-merge 'pnpm install'
```

## License

MIT
