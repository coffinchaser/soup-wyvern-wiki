const tailwindConfig = require('./tailwind.config');
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  tailwindConfig: tailwindConfig,
});

const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

// Compose both configurations
module.exports = withNextra(withMDX(nextConfig));
