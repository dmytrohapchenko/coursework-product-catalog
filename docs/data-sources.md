# Data Source

The PeriTech project uses local mock data for the product catalog. The data is stored in `src/data/products.js`.

The dataset was manually prepared based on open information about computer peripheral products from online stores and manufacturer websites. It is used for an educational demonstration of how a product catalog works.

Product images use public image URLs and open web images. They are included only to demonstrate the visual appearance of product cards and the product details page in a coursework project.

Each product in the dataset contains the following fields:

- `id`
- `name`
- `category`
- `price`
- `description`
- `image`
- `rating`

This approach simulates a real product catalog without a backend or external API. It makes it possible to focus on core React logic: displaying a list of products, searching, filtering, and navigating to a product details page.
