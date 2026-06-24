<script setup lang="ts">
/* Footer toàn site theo phong cách trang https://aidt.hutech.edu.vn/vi
   Bố cục 4 cột: Thương hiệu · Liên kết · Liên hệ · Theo dõi, kèm thanh bản quyền.
   Hiển thị ở mọi trang qua slot `layout-bottom` trong theme/index.ts. */
import { withBase } from 'vitepress'

const year = new Date().getFullYear()

const links = [
  { text: 'Trang chủ', link: '/' },
  { text: 'Hệ thống LMS (Canvas)', link: '/lms/' },
  { text: 'Hệ thống AIDT', link: '/he-thong-aidt/' },
  { text: 'Liên hệ', link: '/lien-he/' },
]

const socials = [
  { name: 'Facebook', link: 'https://www.facebook.com/hutechuniversity' },
  { name: 'YouTube', link: 'https://www.youtube.com/@hutechchannel' },
  { name: 'Website', link: 'https://www.hutech.edu.vn' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__grid">
        <!-- Cột 1: Thương hiệu -->
        <div class="sf-col sf-brand">
          <img class="sf-logo" :src="withBase('/logo_brand.png')" alt="AIDT – HUTECH" />
          <p class="sf-brand-name">Viện Trí tuệ Nhân tạo và Chuyển đổi số (AIDT)</p>
          <p class="sf-brand-sub">Trường Đại học Công nghệ TP.HCM (HUTECH)</p>
          <p class="sf-brand-desc">
            Trung tâm hỗ trợ &amp; hướng dẫn sử dụng hệ thống học tập trực tuyến Canvas LMS.
          </p>
        </div>

        <!-- Cột 2: Liên kết -->
        <nav class="sf-col" aria-label="Liên kết nhanh">
          <h3 class="sf-heading">Liên kết</h3>
          <ul class="sf-list">
            <li v-for="item in links" :key="item.link">
              <a :href="withBase(item.link)">{{ item.text }}</a>
            </li>
          </ul>
        </nav>

        <!-- Cột 3: Liên hệ -->
        <div class="sf-col">
          <h3 class="sf-heading">Liên hệ</h3>
          <ul class="sf-list sf-contact">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-5.686-7-11a7 7 0 0 1 14 0c0 5.314-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
              <span>475A Điện Biên Phủ, P.25, Q. Bình Thạnh, TP.HCM</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
              <a href="tel:+842854452222">(028) 5445 2222</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
              <a href="mailto:aidt@hutech.edu.vn">aidt@hutech.edu.vn</a>
            </li>
          </ul>
        </div>

        <!-- Cột 4: Theo dõi -->
        <div class="sf-col">
          <h3 class="sf-heading">Theo dõi</h3>
          <ul class="sf-list">
            <li v-for="s in socials" :key="s.name">
              <a :href="s.link" target="_blank" rel="noopener">{{ s.name }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="site-footer__bar">
        <span>© {{ year }} AIDT – HUTECH. Bảo lưu mọi quyền.</span>
        <span class="sf-bar-brand">Viện Trí tuệ Nhân tạo và Chuyển đổi số (AIDT) — HUTECH</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
}
.site-footer__inner {
  max-width: 1152px;
  margin: 0 auto;
  padding: 48px 24px 28px;
}

/* ----- Lưới 4 cột ----- */
.site-footer__grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.4fr 1fr;
  gap: 40px;
}
.sf-col {
  min-width: 0;
}

/* ----- Cột thương hiệu ----- */
.sf-logo {
  height: 64px;
  width: auto;
  margin-bottom: 16px;
}
.sf-brand-name {
  font-weight: 700;
  font-size: 15px;
  line-height: 1.45;
  color: var(--vp-c-text-1);
  margin: 0 0 4px;
}
.sf-brand-sub {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin: 0 0 12px;
}
.sf-brand-desc {
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0;
  max-width: 30ch;
}

/* ----- Tiêu đề cột ----- */
.sf-heading {
  position: relative;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--vp-c-text-1);
  margin: 4px 0 18px;
  padding-bottom: 10px;
}
.sf-heading::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 32px;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--hutech-orange-1));
}

/* ----- Danh sách link ----- */
.sf-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.sf-list li {
  margin-bottom: 10px;
  font-size: 13.5px;
  line-height: 1.5;
}
.sf-list a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}
.sf-list a:hover {
  color: var(--vp-c-brand-1);
}

/* ----- Liên hệ (icon + text) ----- */
.sf-contact li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: var(--vp-c-text-2);
}
.sf-contact svg {
  flex-shrink: 0;
  width: 17px;
  height: 17px;
  margin-top: 1px;
  fill: none;
  stroke: var(--hutech-orange-1);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* ----- Thanh bản quyền ----- */
.site-footer__bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: 36px;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 12.5px;
  color: var(--vp-c-text-3);
}
.sf-bar-brand {
  color: var(--vp-c-text-3);
}

/* ----- Responsive ----- */
@media (max-width: 860px) {
  .site-footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  .sf-brand {
    grid-column: 1 / -1;
  }
}
@media (max-width: 520px) {
  .site-footer__grid {
    grid-template-columns: 1fr;
  }
  .site-footer__bar {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
