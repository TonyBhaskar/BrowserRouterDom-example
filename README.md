# React Single-Page Application (SPA) with Routing and Navigation

This is a simple React SPA that demonstrates routing and navigation using React Router DOM. It includes the following components:

- `App.js`: The main application component that sets up routing and renders the `Navbar` and content based on the current route.
- `Navbar.js`: The navigation bar component that displays links to different pages and highlights the active page.
- `Home.js`, `About.js`, and `Account.js` : Components for each page of the application (Example Components).

## Prerequisites

- Node.js and npm (or yarn) installed on your system.

## Installation

1. Clone this repository or download the ZIP file.
2. Navigate to the project directory in your terminal.
3. Run `npm install` (or `yarn install`) to install the required dependencies.

## Running the Application

1. Start the development server by running `npm start` (or `yarn start`).
2. The application will be available in your browser at `http://localhost:5173/`.

## Features

- **Routing:** This application uses React Router DOM to handle navigation between different pages (routes) within the SPA.
- **Navigation:** The `Navbar` component displays links to the `Home`, `About`, and `Account` pages. Clicking on a link will navigate the user to the corresponding route.
- **Active Page Highlighting:** The active page is highlighted in the navigation bar using inline styles that adjust the font weight.

## Additional Considerations

- This is a basic example. 
- You may want to explore more advanced routing features offered by React Router DOM, such as nested routes, dynamic parameters, and protected routes.

## Contributing

Feel free to fork this repository and make your own modifications. We welcome contributions to improve the application!
