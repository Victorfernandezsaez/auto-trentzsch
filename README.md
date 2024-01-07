# Auto Trentzsch

Welcome to the Auto Trentzsch repository! This project is a website for Auto Trentzsch, a freie KFZ Werkstatt und Reifen1+ Partner.

## Description

This project is built using React, Vite, and Tailwind CSS. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/auto-trentzsch.git`
2. Navigate to the project directory: `cd auto-trentzsch`
3. Install dependencies: `npm install`
4. Set up EMAILJS_USER_ID

This project uses [EmailJS](https://www.emailjs.com/) for email services. Follow these steps to set up the `EMAILJS_USER_ID`:

1. Visit [EmailJS](https://www.emailjs.com/) and create an account.
2. Create a new Email Service and Template to obtain your `EMAILJS_USER_ID`.
3. Once you have the ID, create a `.env` file in the root of the project.
4. Add the following line to the `.env` file:

   ```dotenv
   VITE_EMAILJS_USER_ID=your-actual-user-id
   
## Usage

Run the development server:

bash
npm run dev
Visit http://localhost:3000 in your browser to see the application.

Scripts
dev: Run the Vite development server.
build: Build the project for production.
lint: Lint the project using ESLint.
preview: Run Vite in preview mode.
Dependencies
@heroicons/react: Icons for the UI.
@material-tailwind/react: Tailwind CSS components.
... (other dependencies)
Dev Dependencies
@types/react: TypeScript types for React.
@typescript-eslint/eslint-plugin: ESLint plugin for TypeScript.
eslint: Linting tool for JavaScript and TypeScript.
... (other dev dependencies)
License
This project is licensed under the MIT License.


Make sure to replace placeholders like `your-username` in the clone URL with your actual GitHub username. You can add more sections or details as needed.
