import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import AiHero from './components/AiHero.vue'
import NotFound from './components/NotFound.vue'
import Icon from './components/Icon.vue'
import SiteFooter from './components/SiteFooter.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Animation chủ đề AI hiển thị bên phải Hero của trang chủ
      'home-hero-image': () => h(AiHero),
      // Trang 404 tùy biến tiếng Việt
      'not-found': () => h(NotFound),
      // Footer 4 cột toàn site (kiểu trang AIDT) — hiển thị cuối mọi trang
      'layout-bottom': () => h(SiteFooter),
    })
  },
  enhanceApp({ app }) {
    // Icon SVG dùng được trong mọi trang Markdown: <Icon name="..." />
    app.component('Icon', Icon)
  },
} satisfies Theme
