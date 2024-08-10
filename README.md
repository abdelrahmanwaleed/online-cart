<---------Online Store with React and Redux------>
This project is an online store application built with React and Redux. It features a product listing fetched from an external API, a shopping cart with persistent storage, and user notifications for adding products to the cart.

Features

Product Listing: Fetches and displays products from Fake Store API.
Shopping Cart: Allows users to add products, view cart contents, and remove items.
Persistent Storage: Uses local storage to persist cart data across page reloads.
Notifications: Displays a toast notification when products are added to the cart.
Clear Cart: Option to clear all items from the cart.

Usage

Adding Products to the Cart
Navigate to the product listing page.
Click on the "Add to Cart" button for any product.
A toast notification will appear confirming the product has been added to the cart.
Viewing and Managing the Cart
Navigate to the cart page by clicking on the "Cart" link in the navigation bar.
The cart page will display all added products with their quantities.
You can remove individual items by clicking the "Remove" button next to each product.
To remove all items from the cart, click the "Clear Cart" button.

Dependencies

React: A JavaScript library for building user interfaces.
Redux: A state management library for JavaScript applications.
React-Redux: Official React bindings for Redux.
Redux Toolkit: The official, recommended way to write Redux logic.
React-Toastify: A library for displaying toast notifications.
Axios: A promise-based HTTP client for making API requests.

Configuration

The project uses Redux for state management, and Redux Toolkit for simplifying the Redux setup. The cart data is persisted in the browser’s local storage to maintain the cart state across page reloads.
Redux Setup
Store: Configured in src/redux/store.js.
Cart Slice: Manages cart state and actions in src/redux/cartSlice.js.
API Integration
Products are fetched from Fake Store API using Axios.

Troubleshooting

Cart Not Persisting: Ensure that local storage is accessible and not blocked by browser settings.
Toast Notifications Not Displaying: Verify that react-toastify is correctly installed and imported in the project.
