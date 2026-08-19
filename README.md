# Сайт-портфолио

Одностраничный сайт: Vite 6 + React 18 + TypeScript (strict) + Tailwind CSS 4.
Без роутера и бэкенда, навигация якорями, статическая сборка.

## Команды

```bash
npm run dev       # локальная разработка
npm run build     # проверка типов + статическая сборка в dist/
npm run preview   # просмотр собранной версии
```

## Где что лежит

```
src/data/        контент: кейсы, таймлайн, стек, принципы, профиль
src/components/  секции страницы
src/ui/          примитивы (Section, RuleLabel, ThemeToggle)
src/styles/      токены тем и глобальные стили
public/          PDF-резюме, og:image, favicon
```

Тексты правятся только в `src/data/*.ts` — компоненты рендерят их маппингом.
Цвета берутся из CSS-переменных в `src/styles/index.css`, в компонентах не хардкодятся.

## og:image

Исходник — `og.source.html`. Пересобрать после правок:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars --allow-file-access-from-files \
  --window-size=1200,630 --screenshot="public/og.png" "file://$PWD/og.source.html"
```

После привязки домена заменить `og:image` в `index.html` на абсолютный URL —
относительный путь корректно разворачивают не все мессенджеры.
