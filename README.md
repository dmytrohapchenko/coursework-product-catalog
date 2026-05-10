# PeriTech

PeriTech is a simple university coursework project: an online store/catalog of computer peripheral devices. The application lets users browse peripherals, search by product name, filter by category, and open a product details page.

## Technologies

- React
- Vite
- JavaScript
- React Router
- CSS

## Features

- PeriTech catalog page
- Product details page for each peripheral
- Search by product name
- Category filter
- Product count text
- Real product photos on cards and details pages
- Mock product data
- Loading state with artificial delay
- Product not found page for invalid product IDs

## Project Structure

```text
coursework-product-catalog/
├── public/
├── src/
│   ├── components/
│   │   ├── Loader.jsx
│   │   └── ProductCard.jsx
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── ProductDetailsPage.jsx
│   │   └── ProductListPage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## How to Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## How to Build

Create a production build:

```bash
npm run build
```

## Джерело даних

Каталог PeriTech використовує локальні mock-дані з файлу `src/data/products.js`. Детальніше описано у файлі [docs/data-sources.md](docs/data-sources.md).

## Coursework Note

The catalog uses mock data based on open product information for coursework purposes. Product names, categories, descriptions, prices, ratings, and images are included only to demonstrate the React catalog functionality.

## Author

Dmytro Hapchenko
