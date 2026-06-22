<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <div class="nf">
    <div class="nf-card">
      <div class="nf-code">404</div>
      <h1 class="nf-title">Không tìm thấy trang</h1>
      <p class="nf-desc">
        Trang bạn tìm có thể đã được di chuyển hoặc không còn tồn tại.
        Hãy quay về trang chủ, hoặc liên hệ nếu cần hỗ trợ.
      </p>
      <div class="nf-actions">
        <a class="nf-btn nf-btn--brand" :href="withBase('/')">Về trang chủ</a>
        <a class="nf-btn" :href="withBase('/lien-he/')">Liên hệ</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nf {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--vp-nav-height));
  padding: 32px 24px;
}

.nf-card {
  width: 100%;
  max-width: 480px;
  text-align: center;
  padding: 48px 32px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
}

.nf-code {
  font-size: 88px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -2px;
  background: linear-gradient(135deg, #0a6bd4, #00b4d8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nf-title {
  margin: 16px 0 8px;
  font-size: 22px;
  font-weight: 700;
  border: none;
  padding: 0;
}

.nf-desc {
  margin: 0 auto 28px;
  max-width: 380px;
  color: var(--vp-c-text-2);
  font-size: 15px;
  line-height: 1.6;
}

.nf-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.nf-btn {
  display: inline-block;
  padding: 9px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  transition: border-color 0.25s, background-color 0.25s, color 0.25s;
}

.nf-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.nf-btn--brand {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #fff;
}

.nf-btn--brand:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
  color: #fff;
}
</style>
