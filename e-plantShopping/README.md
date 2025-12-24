# e-plantShopping 🌱

A React-based online plant shop application called **Paradise Nursery**. This project implements a shopping cart functionality for various houseplants.

## Project Features

- **Landing Page** with a large animated "Paradise Nursery" title and an **Explore Plants** button linking to the product listing.
- **Navbar** with links to Home, Products, and Cart, with a dynamic cart count.
- **Product Listing Page**
  - Plants grouped into categories: Aromatic, Medicinal, and Air Purifier.
  - Each plant card shows an image, name, description, price, and **Add to Cart** button.
  - Buttons are disabled once a plant is added to the cart.
- **Shopping Cart Page**
  - Displays all items added to the cart.
  - Each item card shows a thumbnail, unit price, total cost, quantity, and Delete button.
  - Buttons to increase/decrease quantity update the cart dynamically.
  - **Continue Shopping** button links back to products.
  - **Checkout** button shows “Coming Soon”.
- **Styling**
  - Landing page with gradient background and fancy fonts.
  - Product cards and navbar styled with colors and spacing.
  - Green gradient navbar and pastel/purple theme for the app.

## Installation & Running Locally

```bash
# Clone the repository
git clone https://github.com/imjanvi/e-plantShopping.git

# Navigate to project folder
cd e-plantShopping

# Install dependencies
npm install

# Start the development server
npm run dev
