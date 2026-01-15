# @zanejs/lint-config

<div align="center">
  <a href="https://zanejs.com"><img alt="zanejs logo" width="215" src="https://unpkg.com/@zanejs/icons@1.0.1/dist/logo.svg"></a>

[![NPM version](https://img.shields.io/npm/v/@zanejs/vite-config)](https://npmjs.com/package/@zanejs/vite-config)


  **中文** | [English](./README.md)
</div>

# 简介

一个强大的 lint 配置集合，为现代前端项目提供开箱即用的代码规范解决方案。

## 特性

- **ESLint 配置**：完整的 JavaScript/TypeScript/Vue 代码规范
- **Prettier 配置**：统一的代码格式化风格
- **Stylelint 配置**：CSS/SCSS 代码规范
- **Commitlint 配置**：规范化的 Git 提交信息
- **Vue 支持**：原生支持 Vue 2 和 Vue 3
- **TypeScript 支持**：完整的类型安全检查
- **Monorepo 支持**：自动识别 monorepo 结构
- **智能排序**：自动排序 imports 和 exports

## 安装

```bash
npm install @zanejs/lint-config -D
```

## ESLint 配置

### 基础使用

```js
// eslint.config.js
import { eslintConfig } from '@zanejs/lint-config';

export default eslintConfig([]);
```

### Vue 项目

```js
// eslint.config.js
import { eslintConfig } from '@zanejs/lint-config';

export default eslintConfig([]);
```

### TypeScript 项目

```js
// eslint.config.js
import { eslintConfig } from '@zanejs/lint-config';

export default eslintConfig([]);
```

## Prettier 配置

### 使用方式

```js
// prettier.config.js
import { prettierConfig } from '@zanejs/lint-config';

export default prettierConfig;
```

### 配置项

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

## Stylelint 配置

### 使用方式

```js
// stylelint.config.js
import { stylelintConfig } from '@zanejs/lint-config';

export default stylelintConfig;
```

### 支持

- 标准 CSS
- SCSS
- Vue 单文件组件
- CSS 排序规则

## Commitlint 配置

### 使用方式

```js
// commitlint.config.js
import { commitlintConfig } from '@zanejs/lint-config';

export default commitlintConfig;
```

### 提交格式

```
type[scope]: description
```

### 支持的 Type

- feat: 新功能
- fix: 修复 bug
- perf: 性能优化
- style: 代码格式
- docs: 文档更新
- test: 测试相关
- refactor: 重构
- build: 构建相关
- ci: CI 配置
- chore: 其他更新
- revert: 回滚
- types: 类型定义
- release: 发布

### 快捷命令

- `pnpm commit :b` - build: 依赖更新
- `pnpm commit :c` - chore: 更新配置
- `pnpm commit :f` - docs: 修复拼写
- `pnpm commit :r` - docs: 更新文档
- `pnpm commit :s` - style: 代码格式

## 内置规则

### ESLint 规则

- 代码风格规范
- 最佳实践
- 潜在问题检测
- TypeScript 类型检查
- Vue 组件规范
- Import/Export 排序
- Unused 代码检测
- 测试文件规范

### Prettier 规则

- 代码格式化
- 引号风格
- 分号处理
- 尾随逗号
- 行宽度

### Stylelint 规则

- CSS 写法规范
- 选择器命名
- 属性顺序
- SCSS 特定规则

## 与 CI/CD 集成

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

## 许可证

MIT
