# Jingyi — Portfolio

以留白、超大字体和柠檬黄为主的响应式个人作品集，使用原生 HTML、CSS、JavaScript，无需安装第三方依赖。

## 开发

需要 Node.js 18 或更高版本。

```sh
cd /workspace/my-portfolio
npm run dev
```

默认端口 3000，可通过 `PORT` 环境变量修改。`npm run check` 检查脚本语法。

## 内容维护

- `index.html`：首页、关于、联系文案。Jingyi 为暂用名称，需本人确认。
- `app.js`：项目名称、分类、图片路径、详情。
- `assets/`：六张本地 SVG 概念封面，均为布局示意，非用户的实际作品。
- `style.css`：颜色、布局、响应式样式。

因环境代理连接失败，尚未读取 Figma 原始设计，也未读取参考网站。当前视觉依据用户上传的参考截图搭建。需用 Figma 导出的真实项目图片、项目介绍及联系信息替换示意内容后再正式发布。

## 已验证

Chromium 桌面与 390px 手机视口：六张作品封面、分类筛选、弹窗打开与关闭、Escape 关闭、手机无横向溢出、无 JavaScript 页面错误。支持减少动画偏好、键盘焦点及原生模态弹窗。

静态页面可部署到任意静态托管服务；`server.mjs` 仅用于本地开发。
