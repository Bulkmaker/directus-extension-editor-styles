import { defineEndpoint } from '@directus/extensions-sdk';

// CSS стили для TinyMCE редактора
const editorStyles = `
/* ===========================================
   Image Styles - для кнопок форматирования
   =========================================== */

/* Full Width - растянуть на всю ширину */
img.full-width {
  width: 100%;
  height: auto;
  display: block;
}

/* Responsive - адаптивное изображение */
img.img-responsive {
  max-width: 100%;
  height: auto;
}

/* Shadow - тень */
img.shadow {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}

/* Border - рамка */
img.border {
  border: 2px solid var(--theme--border-color, #e0e0e0);
  border-radius: 4px;
  padding: 4px;
  background: var(--theme--background-subdued, #f5f5f5);
}

/* Комбинации */
img.shadow.border {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  border: 2px solid var(--theme--border-color, #e0e0e0);
}

/* ===========================================
   Дополнительные стили (можно расширять)
   =========================================== */

/* Изображение слева с обтеканием */
img.float-left {
  float: left;
  margin: 0 1em 1em 0;
}

/* Изображение справа с обтеканием */
img.float-right {
  float: right;
  margin: 0 0 1em 1em;
}

/* Центрирование */
img.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
`;

export default defineEndpoint((router) => {
  // GET /editor-styles/styles.css
  router.get('/styles.css', (_req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // 24 часа
    res.send(editorStyles);
  });
});