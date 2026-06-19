# HUTECH Help Center

Trang tài liệu / trung tâm hỗ trợ CNTT của HUTECH, xây dựng bằng [VitePress](https://vitepress.dev).
Giao diện tiếng Việt, màu chủ đạo **xanh – cam**, có tìm kiếm, chế độ sáng/tối và SEO đa nền tảng.

🔗 **Demo nội dung:** tài khoản HUTECH ID (SSO), Email & Google Apps, hệ thống LMS, cổng sinh viên & đào tạo.

---

## 🚀 Bắt đầu

Yêu cầu: **Node.js ≥ 18**.

```bash
# Cài đặt phụ thuộc
npm install

# Chạy server phát triển (hot-reload) → http://localhost:5173
npm run docs:dev

# Build bản production ra docs/.vitepress/dist
npm run docs:build

# Xem thử bản production vừa build
npm run docs:preview
```

---

## 📁 Cấu trúc thư mục

```
docs/
├─ index.md                     # Trang chủ (layout: home)
├─ public/                      # Tài nguyên tĩnh (ảnh, favicon, robots.txt, og-image…)
│  ├─ images/                   # Ảnh minh họa cho tài liệu
│  └─ robots.txt
├─ tai-khoan/                   # Tài khoản HUTECH ID (SSO, đổi/quên mật khẩu)
├─ email/                       # Email & Google Apps
├─ lms/                         # Hệ thống LMS
├─ cong-sinh-vien/              # Cổng sinh viên & Đào tạo
└─ .vitepress/
   ├─ config.mts                # Cấu hình site: nav, sidebar, SEO, tìm kiếm
   └─ theme/
      ├─ index.ts               # Mở rộng default theme
      └─ custom.css             # Bảng màu xanh – cam
```

---

## ✍️ Thêm / sửa nội dung

1. **Thêm trang mới:** tạo file `.md` trong thư mục danh mục tương ứng (ví dụ `docs/lms/bai-moi.md`).
2. **Hiện trên menu trái:** thêm liên kết vào phần `sidebar` trong `docs/.vitepress/config.mts`.
3. **Mô tả SEO riêng cho trang:** thêm frontmatter ở đầu file:

   ```markdown
   ---
   title: Tiêu đề trang
   description: Mô tả ngắn gọn dùng cho kết quả tìm kiếm & chia sẻ mạng xã hội.
   ---
   ```

### Chèn ảnh

Đặt ảnh vào `docs/public/images/` rồi tham chiếu bằng đường dẫn tuyệt đối:

```markdown
![Mô tả ảnh](/images/ten-anh.png)
```

> Trong các file mẫu đã có sẵn comment `<!-- ![...](/images/...) -->`. Khi có ảnh, chỉ cần bỏ dấu chú thích.

---

## 🎨 Đổi màu thương hiệu

Sửa biến CSS trong `docs/.vitepress/theme/custom.css`:

| Biến | Ý nghĩa |
| --- | --- |
| `--vp-c-brand-1/2/3` | Màu xanh chủ đạo (link, nút) |
| `--hutech-orange-1/2` | Màu cam nhấn (nút phụ, cảnh báo) |

---

## 🔍 SEO (đã cấu hình sẵn)

Khai báo trong `docs/.vitepress/config.mts`. **Trước khi deploy, đổi `SITE_URL`** thành tên miền thật.

Đã hỗ trợ đa nền tảng:

- ✅ **Google:** `sitemap.xml` tự sinh, `robots.txt`, thẻ `canonical`, `title`/`description` riêng từng trang, `hreflang` (vi-VN).
- ✅ **Structured data (JSON-LD):** `Organization` + `WebSite` (ô tìm kiếm sitelinks) → kết quả tìm kiếm phong phú hơn.
- ✅ **Facebook / Zalo / LinkedIn:** thẻ **Open Graph** (`og:title`, `og:description`, `og:image`, `og:url`…).
- ✅ **Twitter / X:** **Twitter Card** dạng `summary_large_image`.

### Cần làm khi triển khai

1. Đổi `SITE_URL` trong `config.mts` và dòng `Sitemap:` trong `docs/public/robots.txt`.
2. Thêm ảnh chia sẻ **`docs/public/og-image.png`** (kích thước **1200×630**).
3. Thêm `docs/public/favicon.ico` và `docs/public/logo.png`.
4. Kiểm tra sau khi deploy:
   - Google Rich Results: <https://search.google.com/test/rich-results>
   - Facebook Sharing Debugger: <https://developers.facebook.com/tools/debug/>
   - Twitter Card Validator / dán link vào Zalo, Telegram để xem preview.

---

## 🌐 Triển khai (Deploy)

Sau `npm run docs:build`, thư mục tĩnh nằm ở `docs/.vitepress/dist` — deploy lên bất kỳ hosting tĩnh nào:

- **GitHub Pages / Netlify / Vercel / Cloudflare Pages:** build command `npm run docs:build`, output `docs/.vitepress/dist`.
- Hoặc copy thư mục `dist` lên web server (Nginx/Apache).

---

## 📞 Liên hệ hỗ trợ

- Email: **it@hutech.edu.vn**
- Tổng đài: **(028) 5445 2222**

> ⚠️ Các domain hệ thống (`sso.hutech.edu.vn`, `lms.hutech.edu.vn`…), số điện thoại và email trong nội dung mẫu là **placeholder** — hãy cập nhật theo thông tin chính thức của trường.
