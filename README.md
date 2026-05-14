# 🍕 Pizza 4 You

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)

> **Сучасний фронтенд для замовлення піци** — SPA з каталогом, кошиком, фільтрацією та TypeScript.

🔗 **Live Demo:** [https://nadiia29.github.io/react-pizza/](https://nadiia29.github.io/react-pizza/)

---

## 📋 Про проект

**Pizza 4 You** - це практичний проект для відпрацювання навичок створення односторінкового додатку (SPA) на React. Тут реалізовано повний цикл вибору піци: перегляд каталогу, фільтрація, налаштування розміру/тіста та додавання до кошика.

Проект написаний на **TypeScript** для типобезпеки, використовує **Redux Toolkit** для керування станом та **SCSS** для модульних стилів.

---

## 🚀 Функціонал

| Сторінка/Модуль | Що вміє |
|----------------|---------|
| **Головна (каталог)** | Показує всі піци з картинками, цінами, рейтингом |
| **Фільтрація** | За категоріями (м'ясні, гострі, вегетаріанські тощо) |
| **Сортування** | За ціною, популярністю, назвою |
| **Детальна сторінка піци** | Повна інформація + вибір розміру та типу тіста |
| **Кошик** | Додавання/видалення піц, зміна кількості, підсумкова сума |
| **Адаптивність** | Коректно працює на десктопах, планшетах і телефонах |

---

## 🛠️ Технології в деталях

| Технологія | Що робить у проекті |
|------------|----------------------|
| **React 18** | Компонентна архітектура, хуки (useState, useEffect, useContext) |
| **Redux Toolkit** | Глобальний стан: кошик, фільтри, дані про піци |
| **TypeScript** | Всі компоненти, пропси, стейти та API-відповіді мають типи |
| **SCSS** | Змінні, міксини, вкладені правила та модульний підхід |
| **Axios** | Запити до бекенду (отримання списку піц та окремої піци) |
| **React Router DOM** | Маршрутизація: головна, сторінка піци, кошик |

---

## 📁 Структура проекту (ключові папки)
src/
├── components/ # Перевикористовувані UI-компоненти (картка піци, кнопки, фільтри)
├── pages/ # Сторінки: Home, ProductDetail, Cart
├── redux/ # Redux Toolkit: slices (cart, filter, pizza), store
├── services/ # API-запити через Axios
├── styles/ # Глобальні стилі, змінні SCSS
├── types/ # TypeScript-типи для піци, кошика, фільтрів
└── App.tsx # Головний компонент з роутингом


---

## 🧩 Встановлення та запуск

1. **Клонуй репозиторій**
```bash
git clone https://github.com/Nadiia29/react-pizza.git
cd react-pizza
2. Встанови залежності npm install
3. Запусти локально npm start
Додаток буде доступний за адресою http://localhost:3000
4. Збірка для продакшену npm run build
```

---

## 🎯 Мета створення
Цей проект був реалізований як практичне завдання для демонстрації навичок:

Побудови SPA на React

Керування станом за допомогою Redux Toolkit

Типізації з TypeScript

Стилізації з SCSS

Роботи з HTTP-запитамі (Axios)

Деплою на GitHub Pages

---

## 📩 Контакти

- Email: ** nadiia.poshtova@gmail.com**  
- LinkedIn: [linkedin.com/in/nadiia-poshtova](https://linkedin.com/in/nadiia-poshtova)  
- GitHub: [github.com/Nadiia29](https://github.com/Nadiia29)

---
✨ Створено з ❤️ та бажанням розвиватись у фронтенді
