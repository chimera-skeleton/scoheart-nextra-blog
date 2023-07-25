import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/logo';
import style from "./theme.module.css";

const config: DocsThemeConfig = {
  logo: (<Logo></Logo>),
  primaryHue: 180,
  useNextSeoProps() {
    return {
      titleTemplate: 'Scoheart Blog'
    }
  },
  project: {
    link: 'https://github.com/',
  },
  chat: {
    link: 'https://discord.com',
  },
  banner: {
    dismissible: false,
    key: '2.0-release',
    text: (
      <a href="https://github.com/scoheart" target="_blank">
        🎉 Scoheart Github. Read more →
      </a>
    )
  },
  navbar: {
    extraContent: (
      null
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: false,
    toggleButton: true,
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div className={style.title}>{title}</div>
        )
      }
      return <>{title}</>
    }
  },
  toc: {
    title: "🔗 Table Of Content"
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' },
    { locale: 'de', text: 'Deutsch' },
    { locale: 'ar', text: 'العربية', direction: 'rtl' }
  ],
  gitTimestamp: (
    <>
      <h1>demo</h1>
    </>
  ),
  docsRepositoryBase: 'https://github.com/scoheart',
  footer: {
    text: (
      <span>
        📦 Scoheart July 24 {new Date().getFullYear()} ©{' '}
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
        .
      </span>
    ),
  },
  faviconGlyph: "👻"
}

export default config
