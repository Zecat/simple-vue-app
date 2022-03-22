import type { UserConfig, Plugin } from 'vite'
import viteConfig from '../vite.config'

export default async (
  storyConfig: UserConfig
  // { configType }: { configType: string }
) => {
  // TODO find if we can cast directly from import
  // Assumes viteConfig to be an <UserConfig> instead of <UserConfigExport> (could be callback or promise)
  const userConfig = <UserConfig>viteConfig

  // Assumes userConfig.plugin is a flat array of plugins, does not handles <PluginOption> nor <PluginOption>[]
  const userPlugins = <Plugin[]>userConfig.plugins

  const storyPlugins = <Plugin[]>storyConfig.plugins

  // NOTE this is not generic, it only handles viteConfig plugins and alias
  // if other keys where added to viteConfig, changes would not be reflected to storybook

  const userPluginNames: string[] = userPlugins.map((p) => p.name)
  const notDuplicated = (plugin: Plugin): boolean =>
    !userPluginNames.includes(plugin.name)

  storyConfig.plugins = [...userPlugins, ...storyPlugins.filter(notDuplicated)]

  // Assumes storyConfig.resolve exists, would throw `Uncaught TypeError: can't convert undefined to object` otherwise
  Object.assign(storyConfig.resolve?.alias, userConfig.resolve?.alias)

  // https://github.com/storybookjs/storybook/issues/17504

  storyConfig.resolve.dedupe = ['@storybook/client-api']

  return storyConfig
}
