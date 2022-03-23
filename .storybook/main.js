module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') config.base = '/simple-vue-app/storybook/'
    return config
  },
  webpackFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION')
      config.output.publicPath = '/simple-vue-app/storybook/'
    return config
  },
  managerWebpack: async (config, { configType }) => {
    if (configType === 'PRODUCTION')
      config.output.publicPath = '/simple-vue-app/storybook/'
    return config
  },
  managerHead: (head, { configType }) => {
    if (configType === 'PRODUCTION')
      head += `
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/simple-vue-app/storybook/favicon.ico"
      />
      <base href="/simple-vue-app/storybook/" />`
    return head
  },
}
