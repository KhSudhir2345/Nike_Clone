Nike Clone Website
This project is a clone of the Nike website, featuring functionalities like cart management, favorites, and user authentication (login and logout). The project fetches data from a db.json file, which is used to create a REST API.

Features
Cart Management: Add items to the cart, view cart items, and remove items from the cart.
Favorites: Add items to favorites, view favorite items, and remove items from favorites.
User Authentication: Login and logout functionalities. The default username for first-time login is user1 and the password is Username123.
Data Fetching: Fetches product data from db.json.
Getting Started
Prerequisites
npm: Node package manager comes with Node.js. Verify installation by running npm -v in your terminal.
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/nike-clone.git
cd nike-clone
Install Dependencies:

bash
Copy code
npm install
Start JSON Server:

bash
Copy code
npx json-server --watch db.json --port 8000
Start the React Application:

bash
Copy code
npm start
Usage
Login:

Navigate to the login page.
Use the default credentials:
Username: user1
Password: Username123
After successful login, you will be redirected to the home page.
Browse Products:

Browse the products available on the website fetched from db.json.
Add to Cart:

Click on a product to view details.
Add the product to your cart.
View Cart:

Click on the cart icon to view items in your cart.
You can remove items from the cart.
Add to Favorites:

Click on the favorite icon on a product to add it to your favorites list.
View Favorites:

Click on the favorites icon to view your favorite items.
You can remove items from your favorites list.
Logout:

Click on the logout button to log out from your account.

Dependencies
React: Front-end library for building user interfaces.
Redux: State management library.
React-Redux: Official React bindings for Redux.
React Router: Library for routing in React applications.
JSON Server: Full fake REST API with zero coding.
react-toastify: Library for notifications.


Acknowledgements
Inspired by the Nike official website.
Built with React and Redux.
