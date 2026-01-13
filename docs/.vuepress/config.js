import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default {
  lang: 'ru-RU',
  title: 'Оферта ООО Архи-про',
  description: 'Договор-оферта на привлечение финансирования для кинопроектов',
  
  bundler: viteBundler(),
  theme: defaultTheme({
    // Настройки темы
    navbar: [
      {
        text: 'Оферта',
        link: '/oferta.html',
      },
      {
        text: 'Пояснительное письмо',
        link: '/letter.html',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/ink-kin/license-arhi-pro-ru',
      }
    ],
    
    // Автоматическое определение активной вкладки
    editLink: false,
    
    // Настройки для локализации
    locales: {
      '/': {
        selectLanguageName: 'Русский',
      },
    },
  }),
  
  // Базовый путь для деплоя на GitHub Pages (если нужно)
  base: '/',
  
  // Дополнительные настройки
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
}
