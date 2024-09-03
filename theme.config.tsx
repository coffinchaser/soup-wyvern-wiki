import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import Logo from './components/Logo'

const config: DocsThemeConfig = {
  nextThemes: {
    defaultTheme: 'dark',
    storageKey: 'nextra-theme-docs-theme',
  },
  chat: {
    link: 'https://discord.gg/xs8v3TbwJq',
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
        <meta property="og:description" content={frontMatter.description || 'WyvernWiki is the central repository for all guides related to WyvernChat, TalOS, and SleepStories.'} />
        <meta property="og:image" content="/icon.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@WyvernWiki" />
        <meta name="twitter:title" content={frontMatter.title || 'WyvernWiki'} />
        <meta name="twitter:description" content={frontMatter.description || 'WyvernWiki is the central repository for all guides related to WyvernChat, TalOS, and SleepStories.'} />
        <meta name="twitter:image" content="/icon.png" />
        <meta name="twitter:image:alt" content="WyvernWiki" />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </>
    )
  },
  logo: <Logo />,
  footer: {
    text: `© ${new Date().getFullYear()} WyvernWiki. All rights reserved.`
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