const tailwindConfig = require('./tailwind.config')

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  tailwindConfig: tailwindConfig,
})

module.exports = withNextra()