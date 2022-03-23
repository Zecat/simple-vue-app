# simple-vue-app

Simple Vue application with detailed toolchain, for demonstration purpose.

[App demo](https://Zecat.github.io/simple-vue-app) - [Components demo](https://Zecat.github.io/simple-vue-app/storybook)

## Techno involved

- [Vue](https://vuejs.org/) + [Vite](https://vitejs.dev/) + [Typescript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Cypress](https://www.cypress.io/) + [Vitest](https://vitest.dev/)
- [Husky](https://typicode.github.io/husky/#/) + [lint staged](https://github.com/okonet/lint-staged#readme)
- [Eslint](https://eslint.org/) + [prettier](https://prettier.io/)
- [Yamllint](https://github.com/rasshofer/yaml-lint)
- [markdownlint](https://github.com/DavidAnson/markdownlint)
- [Stylelint](stylelint.io/) + [ordered rules](https://github.com/theKashey/stylelint-semantic-groups)
- [Commitlint](https://commitlint.js.org/) + [Angular commit message guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
- [Semantic release](https://semantic-release.gitbook.io/semantic-release/)
- [GitHub Actions](https://github.com/features/actions)
- [Github Flow](https://githubflow.github.io/)

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
yarn storybook
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

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
yarn build
yarn test:e2e # or `yarn test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

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
