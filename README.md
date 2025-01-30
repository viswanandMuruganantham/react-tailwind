## React Tailwind Project

This is a simple React application styled using Tailwind CSS. It's built with Vite as the build tool and includes basic configurations for deploying to GitHub Pages.

## Live Website

You can view the live website [here](https://viswanandmuruganantham.github.io/react-tailwind/).

## Features

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Vite**: A fast build tool and development server.

## Installation

To get started with this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/viswanandmuruganantham/react-tailwind.git
Navigate into the project directory:

bash
cd react-tailwind
Install the dependencies:

bash
npm install
Development
To run the development server locally:
npm run dev
Visit http://localhost:3000 in your browser to see the application.
Build
To create a production build of the project:
npm run build
This will generate a dist/ directory with the optimized production files.
Deployment
This project is deployed to GitHub Pages. You can deploy your changes by pushing the built files to the gh-pages branch.

Build the project:
npm run build
Push the files to the gh-pages branch:
git add dist/
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
