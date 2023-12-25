import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/logo/logo';
import style from "./theme.module.css";

const config: DocsThemeConfig = {
  logo: (<Logo></Logo>),
  docsRepositoryBase: 'https://github.com/chimera-skeleton/scoheart-nextra-blog/issues',
  primaryHue: {
      dark: 180,
      light: 280
  },
  useNextSeoProps() {
    return {
      titleTemplate: 'Scoheart Blog'
    }
  },
  project: {
    link: 'https://github.com/scoheart',
  },
  chat: {
    link: 'https://discord.com/scoheart',
  },
  search: {
    placeholder: "Search"
  },
  banner: {
    dismissible: false,
    key: '1',
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
  editLink: {
    text: "Edit this Page on Github"
  },
  feedback: {
    content: "Question? Give me Feedback"
  },
  // i18n: [
  //   { locale: 'en', text: 'English' },
  //   { locale: 'zh', text: '中文' }
  // ],
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
