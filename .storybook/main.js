module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal: async (config) => {
    config.base = '/simple-vue-app/storybook/'
    return config
  },
  webpackFinal: async (config, { configType }) => {
    config.output.publicPath = '/simple-vue-app/storybook/'
    return config
  },
  managerWebpack: async (config) => {
    config.output.publicPath = '/simple-vue-app/storybook/'
    return config
  },
}
