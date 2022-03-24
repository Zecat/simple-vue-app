# simple-vue-app

Simple Vue application with detailed toolchain, for demonstration purpose.

Note: at this point, the app content and storybook are placeholders

[App demo](https://Zecat.github.io/simple-vue-app) - [Storybook & Doc](https://Zecat.github.io/simple-vue-app/storybook)

## Techno involved

- [Vue] + [Typescript]
- Build
  - [Vite]
  - [unplugin-auto-import] + [unplugin-vue-components]
- Doc
  - [Storybook]
- Tests
  - [Cypress] + [Vitest]
- Git strategies
  - [Husky] + [lint staged]
  - [Semantic release]
  - [Github Flow]
- Linter
  - [ESlint]
  - [Prettier]
  - [Yamllint]
  - [markdownlint]
  - [Stylelint] + [ordered rules]
  - [Commitlint] + [Angular commit message guidelines]
- CI
  - [GitHub Actions]
  - [github-pages-deploy-action]

## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Storybook

```sh
yarn storybook       # live reload
yarn build-storybook # build storybook-static
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Lint + autofix

```sh
yarn lint        # run all linters in parallel

yarn lint:eslint # eslint
yarn lint:style  # stylelint
yarn lint:md     # mardownlint
yarn lint:yaml   # yaml-lint
yarn format      # prettier
```

### Run Unit Tests with [Vitest]

```sh
yarn test:unit
```

### Run End-to-End Tests with [Cypress]

```sh
yarn build
yarn test:e2e # or `yarn test:e2e:ci` for headless testing
```

### Lint with [ESLint]

```sh
yarn lint
```

## CI with Github Actions

### [watchman.yml](https://github.com/Zecat/simple-vue-app/blob/master/.github/workflows/watchman.yml)

Runs on push on any branch except [master, gh-pages]

- build, lint & test project

### [release.yml](https://github.com/Zecat/simple-vue-app/blob/master/.github/workflows/release.yml)

Runs on push on master

- build, lint & test project
- build storybook
- perform semantic release
  - analyze commit messages
  - generate changelog according
  - choose & bump npm version
  - generate release commit
  - create release tag
- update github pages

## Troubleshooting

- pnpm issue: [storybook-builder-vite#55](https://github.com/eirslett/storybook-builder-vite/issues/55)

[vue]: https://vuejs.org/
[typescript]: https://www.typescriptlang.org/
[vite]: https://vitejs.dev/
[unplugin-auto-import]: https://github.com/antfu/unplugin-auto-import#readme
[unplugin-vue-components]: https://github.com/antfu/unplugin-vue-components#readme
[storybook]: https://storybook.js.org/
[cypress]: https://www.cypress.io/
[vitest]: https://vitest.dev/
[husky]: https://typicode.github.io/husky/#/
[lint staged]: https://github.com/okonet/lint-staged#readme
[semantic release]: https://semantic-release.gitbook.io/semantic-release/
[github flow]: https://githubflow.github.io/
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[yamllint]: https://github.com/rasshofer/yaml-lint
[markdownlint]: https://github.com/DavidAnson/markdownlint
[stylelint]: https://stylelint.io/
[ordered rules]: https://github.com/theKashey/stylelint-semantic-groups
[commitlint]: https://commitlint.js.org/
[angular commit message guidelines]: https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines
[github actions]: https://github.com/features/actions
[github-pages-deploy-action]: https://github.com/JamesIves/github-pages-deploy-action
