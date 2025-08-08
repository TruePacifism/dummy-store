# DummyStore

DummyStore — современный демонстрационный интернет-магазин, реализованный на Next.js с использованием TypeScript, App Router, Zustand, Axios и SCSS-модулей.

## 🚀 Стек технологий

- **Next.js (App Router)** — современный фреймворк для React
- **TypeScript** — строгая типизация
- **Zustand** — глобальное состояние (авторизация, UI)
- **Axios** — запросы к API
- **SCSS-модули** — стилизация компонентов
- **Prettier, ESLint, Stylelint** — поддержка качества кода

## ⚡ Функционал

- Список товаров с Skeleton Loader при загрузке
- Выделенный Featured Product
- Анимация карточек товаров
- Модальное окно с подробной информацией о товаре
- Глобальный лоадер и обработка ошибок
- Адаптивная верстка для мобильных устройств
- Авторизация пользователя
- Хэдер с навигацией и футер с соцсетями (GitHub, Telegram, YouTube)

## 🛠️ Запуск проекта

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📝 Структура проекта

```
eslint.config.mjs
next-env.d.ts
next.config.ts
package.json
README.md
tsconfig.json
public/
src/
  app/
  components/
  lib/
  store/
  styles/
  types/
```

## 🧩 Ключевые файлы

- `src/app/page.tsx` — главная страница
- `src/components/FeaturedProduct/FeaturedProduct.tsx` — выделенный товар
- `src/components/ProductModal/ProductModal.tsx` — модальное окно товара
- `src/store/ui.ts` — глобальное состояние UI

## 🧑‍💻 Качество кода

- Prettier, ESLint, Stylelint — автоформатирование и линтинг

## 📦 Деплой

Рекомендуется использовать [Vercel](https://vercel.com/) для деплоя Next.js приложений.

## 📚 Документация

- [Next.js](https://nextjs.org/docs)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Axios](https://axios-http.com/docs/intro)
- [SCSS-модули](https://nextjs.org/docs/app/building-your-application/styling/css-modules)

---

DummyStore — отличный старт для создания современного магазина на Next.js!
