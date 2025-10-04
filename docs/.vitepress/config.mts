import { fileURLToPath, URL } from 'node:url'
import yaml from 'vite-plugin-yaml'
import llmstxt from 'vitepress-plugin-llms'
import coolbotPlugin from './plugins/vitepress-plugin-coolbot';
import { defineConfig } from 'vitepress'
import { useSidebar } from 'vitepress-openapi'
import spec from './theme/openapi.json' with { type: 'json' }
import container from 'markdown-it-container'
import { bundledLanguages } from 'shiki'
import { join, dirname } from 'node:path'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { loadEnv } from 'vitepress'
const env = loadEnv('', process.cwd())
const sidebar = useSidebar({ spec })

// Add SSH to bundled languages
bundledLanguages['ssh'] = {
  id: 'ssh',
  scopeName: 'source.ssh-config',
  path: join(dirname(fileURLToPath(import.meta.url)), '../../node_modules/shiki/languages/ssh-config.tmLanguage.json')
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Arvialo Docs",
  description: "Self hosting with superpowers: An open-source & self-hostable Heroku / Netlify / Vercel alternative.",
  appearance: 'dark', // 'dark' allows user to change theme, 'force-dark' doesn't allow user to change theme
  base: '/docs/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://arvialo.io/docs/'
  },

  head: [
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Arvialo Docs' }],
    ['meta', { property: 'og:url', content: 'https://arvialo.io/docs/' }],
    ['meta', { property: 'og:description', content: 'Self hosting with superpowers: An open-source & self-hostable Heroku / Netlify / Vercel alternative.' }],
    ['meta', { property: 'og:image', content: 'https://coolcdn.b-cdn.net/assets/arvialo/og-image-docs.png' }],
    ['meta', { property: 'twitter:site', content: '@arvialoio' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:title', content: 'Arvialo Docs' }],
    ['meta', { property: 'twitter:description', content: 'Self hosting with superpowers: An open-source & self-hostable Heroku / Netlify / Vercel alternative.' }],
    ['meta', { property: 'twitter:url', content: 'https://arvialo.io/docs/' }],
    ['meta', { property: 'twitter:image', content: 'https://coolcdn.b-cdn.net/assets/arvialo/og-image-docs.png' }],
    ['link', { rel: 'icon', href: '/docs/arvialo-logo-transparent.png' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['script', { defer: 'true', src: 'https://analytics.arvialo.io/js/script.tagged-events.js', 'data-domain': env.VITE_ANALYTICS_DOMAIN ?? 'arvialo.io/docs' }],
    ['script', { async: 'true', src: '/docs/trieve-user-script.js' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    carbonAds: {
      code: 'CW7IPKJJ',
      placement: 'arvialoio'
    },
    logo: '/arvialo-logo-transparent.png',
    nav: [
      { text: 'Arvialo Cloud', link: 'https://arvialo.io/pricing/' },
      {
        text: 'Resources',
        items: [
          { text: 'Releases', link: 'https://github.com/arvialoio/arvialo/releases' },
          { text: 'Support', link: 'https://arvialo.io/' },
          { text: 'Sponsor us', link: 'https://arvialo.io/sponsorships/' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    outline: [2, 4],

    editLink: {
      pattern: 'https://github.com/arvialoio/documentation-arvialo/tree/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/arvialo/arvialo' }
    ],

    sidebar: [
      {
        text: 'Get Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/get-started/introduction' },
          {
            text: 'Installation',
            link: '/get-started/installation',
            collapsed: false,
            items: [
              { text: 'Upgrade', link: '/get-started/upgrade' },
              { text: 'Downgrade', link: '/get-started/downgrade' },
              { text: 'Uninstallation', link: '/get-started/uninstallation' },
            ]
          },
          { text: 'Cloud', link: '/get-started/cloud' },
          { text: 'Usage', link: '/get-started/usage' },
          {
            text: 'Concepts', link: '/get-started/concepts',
            collapsed: true,
            items: [
              { text: 'Screenshots', link: '/get-started/screenshots' },
            ]
          },
          { text: 'Team', link: '/get-started/team' },
          { text: 'Support', link: '/get-started/support' },

        ],
      },
      {
        text: 'Builds',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/builds/introduction' },
          {
            text: 'Build Packs',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/builds/packs/overview' },
              { text: 'Static', link: '/builds/packs/static' },
              { text: 'Nixpacks', link: '/builds/packs/nixpacks' },
              { text: 'Dockerfile', link: '/builds/packs/dockerfile' },
              { text: 'Docker Compose', link: '/builds/packs/docker-compose' },
            ]
          },
          { text: 'Build Servers', link: '/builds/servers' },
        ],
      },
      {
        text: 'Applications',
        collapsed: true,
        items: [
          {
            text: 'Overview',
            link: '/applications/index',
            items: [
              { text: 'Django', link: '/applications/django' },
              { text: 'Jekyll', link: '/applications/jekyll' },
              { text: 'Laravel', link: '/applications/laravel' },
              { text: 'Phoenix', link: '/applications/phoenix' },
              { text: 'Ruby on Rails', link: '/applications/rails' },
              { text: 'Symfony', link: '/applications/symfony' },
              { text: 'Next.js', link: '/applications/nextjs' },
              { text: 'Vite', link: '/applications/vite' },
              { text: 'Vue', link: '/applications/vuejs' },
              { text: 'Nuxt', link: '/applications/nuxt' },
              { text: 'SvelteKit', link: '/applications/svelte-kit' },
            ]
          }
        ],
      },
      {
        text: 'Databases',
        collapsed: true,
        items: [
          {
            text: 'Overview',
            link: '/databases/index',
            items: [
              { text: 'Database SSL', link: '/databases/ssl' },
              { text: 'Backups', link: '/databases/backups' },
              { text: 'MySQL', link: '/databases/mysql' },
              { text: 'MariaDB', link: '/databases/mariadb' },
              { text: 'PostgreSQL', link: '/databases/postgresql' },
              { text: 'MongoDB', link: '/databases/mongodb' },
              { text: 'Redis', link: '/databases/redis' },
              { text: 'DragonFly', link: '/databases/dragonfly' },
              { text: 'KeyDB', link: '/databases/keydb' },
              { text: 'Clickhouse', link: '/databases/clickhouse' },
            ]
          }
        ],
      },
      {
        text: 'Integrations',
        collapsed: true,
        items: [
          { text: 'Webstudio', link: '/integrations/webstudio.md' },
        ],
      },
      {
        text: 'API Reference',
        collapsed: true,
        items: [
          {
            text: 'Authorization',
            link: '/api-reference/authorization',
          },
          ...sidebar.generateSidebarGroups({
            linkPrefix: '/api-reference/api/operations/',
          }).map((group) => ({
            ...group,
            collapsed: true
          }))
        ],
      },
    ],

  },

  markdown: {
    config: (md) => {
      md.use(container, 'success', {
        validate: (params) => {
          return params.trim().match(/^success\s*(.*)$/)
        },
        render: (tokens, idx) => {
          const m = tokens[idx].info.trim().match(/^success\s+(.*)$/)
          if (tokens[idx].nesting === 1) {
            // opening tag
            return `<div class="custom-block success">${m ? `<p class="custom-block-title">${m[1]}</p>` : ''
              }\n`
          } else {
            // closing tag
            return '</div>\n'
          }
        }
      })
      md.use(tabsMarkdownPlugin)
    },
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    // Configure Shiki with SSH language
    async shikiSetup(shiki) {
      await shiki.loadLanguage('ssh-config')
    },
    // Map ssh to ssh-config
    languageAlias: {
      ssh: 'ssh-config',
    }
  },

  rewrites: {},

  vite: {
    plugins: [
      yaml as any,
      llmstxt({
        ignoreFiles: [
          '/docs/api-reference/api/**/*',
          '**/api-reference/api/**/*'
        ],
      }),
      coolbotPlugin({
        docsDir: 'docs',
        writeRawOutput: false,
        ignoreFolders: [
          'vitepress',
          'api-reference',
          'node_modules',
          'dist'
        ],
      }),
      groupIconVitePlugin({
        customIcon: {
          bruno: 'vscode-icons:file-type-bruno',
          curl: 'simple-icons:curl',
        },
        defaultLabels: [
          'bruno',
          'curl',
          '.ts',
          '.js',
          '.py',
          '.php',
        ],
      }),
    ],
    assetsInclude: ['**/*.yml'],
    build: {
      chunkSizeWarningLimit: 5000
    },
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/Landing/HeroHeader.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPBadge\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPBadge.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPNavBar\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPNavBar.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPSidebar\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPSidebar.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFeatures\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPFeatures.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFeature\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPFeature.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPLocalNav\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPLocalNav.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPDocAside\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPDocAside.vue', import.meta.url)
          )
        }
      ]
    }
  }
})
