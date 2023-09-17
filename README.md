# Redux Shop - React Redux E-commerce App

## Overview

Redux Shop is a simple e-commerce application built with React and Redux. It allows users to browse and interact with a list of products. Users can add or remove products from their favorites list. The project is structured with reusable components and utilizes Redux for state management.

## Table of Contents

- [Components](#components)
- [Redux Store](#redux-store)
- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Components

The project consists of several React components that serve different purposes. Below is an overview of some key components and their expected props:

### ProductComponent

- Displays detailed information about a product.
- **Props**:
  - `id` (number, required): The unique ID of the product.
  - `title` (string, required): The title of the product.
  - `image` (string, required): The URL of the product image.
  - `price` (number, required): The price of the product.
  - `description` (string): The description of the product (default: 'No description available').
  - `rating` (object, required):
    - `rate` (number, required): The rating of the product (out of 5).
    - `count` (number, required): The number of customer reviews.
  - `category` (string, required): The category of the product.

### ProductListing

- Displays a list of products.
- Uses the `ProductComponent` to render individual products.
- Fetches products from an API using Redux actions.

### Favorite

- Allows users to add or remove a product from their favorites list.
- **Props**:
  - `productId` (number, required): The ID of the product to add/remove from favorites.

### Star

- Displays a star rating and the number of customer reviews.
- **Props**:
  - `rate` (number): The rating value (out of 5).
  - `reviews` (number): The number of customer reviews.

## Usage

To use the `ProductComponent`, import it into your React application and include it within your JSX. Here's an example of how to use the component with the expected props:

```jsx
import ProductComponent from "./ProductComponent";
<ProductComponent
  id={1}
  title="Sample Product"
  image="/sample-image.jpg"
  price={19.99}
  description="This is a sample product description."
  rating={{ rate: 4.5, count: 100 }}
  category="Electronics"
/>

```
## Redux Store

The project uses Redux for state management. The Redux store includes the following slices:

- `allProducts`: Manages the products and favorites list.

  - **State**:
    - `products` (array): An array of product objects.
    - `favorites` (array): An array of product IDs added to favorites.
    - `loading` (boolean): Indicates if products are being fetched.
    - `error` (string): Stores error messages if there's a failure in fetching products.

- **Actions**:
  - `fetchProducts()`: Fetches products from an API and updates the store.
  - `addToFavorites(productId)`: Adds a product to the favorites list.
  - `removeFromFavorites(productId)`: Removes a product from the favorites list.

## Installation

To run the project locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Yusuf-Software/health360-product-card
   ```

2. Navigate to the project directory:
    ```bash
    cd health360-product-card
3. Install dependencies and Start the development server using npm or yarn:
    ```bash
    npm install then npm start
    # or
    yarn install then yarn start
