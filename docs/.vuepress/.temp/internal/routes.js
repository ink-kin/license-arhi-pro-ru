export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/ink/html/license.arhi-pro.ru/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Оферта на привлечение финансирования для кинопроектов"} }],
  ["/letter.html", { loader: () => import(/* webpackChunkName: "letter.html" */"/home/ink/html/license.arhi-pro.ru/docs/.vuepress/.temp/pages/letter.html.js"), meta: {"title":"Письмо‑пояснение к оферте"} }],
  ["/list.html", { loader: () => import(/* webpackChunkName: "list.html" */"/home/ink/html/license.arhi-pro.ru/docs/.vuepress/.temp/pages/list.html.js"), meta: {"title":"Типовые договоры к оферте"} }],
  ["/oferta.html", { loader: () => import(/* webpackChunkName: "oferta.html" */"/home/ink/html/license.arhi-pro.ru/docs/.vuepress/.temp/pages/oferta.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/ink/html/license.arhi-pro.ru/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
