
Currency Converter App
A simple, fast, and responsive currency converter app built using React, Tailwind CSS, HTML, and the Exchange Rate API to fetch real-time exchange rates.

Features
Real-time exchange rates: Get up-to-date conversion rates using the Exchange Rate API.
Multi-currency support: Convert between multiple currencies from around the world.
Responsive design: Built with Tailwind CSS to ensure a seamless experience on both desktop and mobile devices.
User-friendly interface: Simple and intuitive layout for easy navigation and currency conversion.
Tech Stack
React: Front-end library for building the user interface.
Tailwind CSS: Utility-first CSS framework for styling and responsive design.
HTML: Markup structure for the app.
Exchange Rate API: External API used for fetching live currency conversion rates.
Getting Started
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or higher)
npm or yarn
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/currency-converter.git
Navigate to the project directory:

bash
Copy code
cd currency-converter
Install the dependencies:

bash
Copy code
npm install
Or, if you're using yarn:

bash
Copy code
yarn install
Set up the Exchange Rate API:

Visit the Exchange Rate API and sign up to get your API key.

Create a .env file in the root directory and add your API key:

bash
Copy code
REACT_APP_EXCHANGE_RATE_API_KEY=your-api-key
Running the App
Start the development server:

bash
Copy code
npm run dev
Or with yarn:

bash
Copy code
yarn dev
Open your browser and navigate to http://localhost:3000 to view the app.

Build for Production
To create a production build:

bash
Copy code
npm run build
This will bundle and optimize the app for production.

Usage
Select the base currency and the target currency from the dropdowns.
Enter the amount you want to convert.
View the real-time conversion rate and result instantly.
