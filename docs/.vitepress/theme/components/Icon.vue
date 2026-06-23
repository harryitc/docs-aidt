<script setup lang="ts">
/* Bộ icon SVG (kiểu nét Lucide) dùng thay cho emoji trong toàn bộ tài liệu.
   Cách dùng trong Markdown:  <Icon name="life-buoy" />

   Lưu ý kỹ thuật: phải v-html cả chuỗi <svg>…</svg> vào một <span>.
   Nếu v-html nội dung path trực tiếp vào thẻ <svg>, trình duyệt sẽ parse
   các <path> theo namespace HTML (không phải SVG) → icon vô hình. */
import { computed } from 'vue'
import { svgIcon } from './icons'

const props = defineProps<{
  name: string
  size?: number | string
}>()

const html = computed(() => svgIcon(props.name, props.size))
</script>

<template>
  <span class="vp-icon" v-html="html" />
</template>

<style scoped>
.vp-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: -0.18em;
  margin-right: 0.15em;
}
.vp-icon :deep(svg) {
  flex-shrink: 0;
}
</style>
