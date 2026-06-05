# PeriTech

## Description

PeriTech is a university coursework project: an online store/catalog of computer peripheral devices. The application lets users browse peripherals, search by product name, filter products by category, and open a separate product details page.

## Technologies

- React
- Vite
- JavaScript
- React Router
- CSS

## Features

- PeriTech product catalog page
- Product details page for each peripheral device
- Search by product name
- Category filtering
- Product count display
- Product photos on catalog cards and details pages
- Global shopping cart state with React Context
- Add to cart buttons on catalog cards and product details pages
- Cart page with selected products, quantities, subtotals, total items, and total price
- Quantity increase/decrease, remove item, and clear cart actions
- Local mock product data
- Loading state with an artificial delay
- Product not found page for invalid product IDs

## Data Source

The PeriTech catalog uses local mock data from `src/data/products.js`.

The dataset was manually prepared based on open information about computer peripheral products from online stores and manufacturer websites. Public image URLs and open web images are used for educational demonstration purposes.

Each product in the dataset includes:

- `id`
- `name`
- `category`
- `price`
- `description`
- `image`
- `rating`

This approach simulates a real product catalog without a backend or external API. More details are available in [docs/data-sources.md](docs/data-sources.md).

## Project Structure

```text
coursework-product-catalog/
├── public/
├── src/
│   ├── components/
│   │   ├── CartIcon.jsx
│   │   ├── Loader.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   ├── CartProvider.jsx
│   │   └── useCart.js
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── CartPage.jsx
│   │   ├── ProductDetailsPage.jsx
│   │   └── ProductListPage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── docs/
│   └── data-sources.md
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

## Author

Dmytro Hapchenko
