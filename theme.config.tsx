import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import Logo from './components/Logo'
import Image from 'next/image'

const config: DocsThemeConfig = {
  nextThemes: {
    defaultTheme: 'dark',
    storageKey: 'nextra-theme-docs-theme',
  },
  chat: {
    link: 'https://discord.gg/xs8v3TbwJq',
  },
  project: {
    icon: () => (<Image 
      src="/waywy.svg" 
      alt="WyvernWiki"
      width={40}
      height={40}
    />),
    link: 'https://app.wyvern.chat/',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – WyvernWiki'
    }
  },
  head: () => {
    const { frontMatter } = useConfig()
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={frontMatter.title || 'WyvernWiki'} />
        <meta property="og:description" content={frontMatter.description || 'WyvernWiki is the central repository for all guides related to WyvernChat, TalOS, and other Galrion Softworks Projects.'} />
        <meta property="og:image" content="/icon.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WyvernWiki" />
        <meta name="twitter:creator" content="@WyvernWiki" />
        <meta name="twitter:title" content={frontMatter.title || 'WyvernWiki'} />
        <meta name="twitter:description" content={frontMatter.description || 'WyvernWiki is the central repository for all guides related to WyvernChat, TalOS, and other Galrion Softworks Projects.'} />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </>
    )
  },
  logo: <Logo />,
  footer: {
    text: `© ${new Date().getFullYear()} Galrion Softworks. All rights reserved.`
  },
  primaryHue: 24.6, // This corresponds to your --primary in the CSS
  components: {
    // Add any custom components here
  },
  feedback: {
    content: '',
    labels: '',
  },
  editLink: {
    text: '',
  },
  // We'll add a custom CSS file in the next step
}

export default config