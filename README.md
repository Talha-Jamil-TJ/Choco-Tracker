# Choco Tracker

**Discover and track your favorite chocolates with ease. Choco Tracker is a web application designed for chocolate enthusiasts to explore, compare prices, and learn more about their favorite treats.**

## Features

### App Features

- **Overview**: Displays a list of chocolates, including details like name, manufacturer, lowest and average prices per 100g, and a direct link to the cheapest retailer.
- **Details**: Provides a comprehensive view of each chocolate, including all information from the overview, a table of various prices, and a pie chart visualizing its nutritional value.

### Project Features

- **Continuous Integration (CI)**: Automated tests, linting, and format checks are performed on every pull request to ensure code quality and functionality.
- **Continuous Deployment (CD)**: Utilizes an automated deployment pipeline with Netlify for seamless updates.

## Key Technologies

This project leverages several cutting-edge technologies and packages:

- **[Angular v17](https://blog.angular.io/introducing-angular-v17-4d7033312e4b)**: The core framework providing a robust platform for web application development.
- **[Ng Zorro](https://ng.ant.design/docs/introduce/en)**: A rich set of UI components for a sleek user interface.
- **[NGXS](https://www.ngxs.io/)**: An intuitive state management solution for Angular apps.
- **[Jest](https://jestjs.io/docs/testing-frameworks)**: A JavaScript Testing Framework with a focus on simplicity.

## Live Demo

Experience Choco Tracker live: [Click here to visit Choco Tracker](https://choco-tracker.netlify.app/)

## Getting Started

To set up the app locally, follow these instructions:

### Prerequisites

Ensure the following tools are installed on your local machine:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/download/) (includes [npm](http://npmjs.com))

### Cloning the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Talha-Jamil-TJ/choco-tracker.git
cd choco-tracker
```

### Installing Dependencies

Install the required dependencies by running:

```bash
npm install
```

### Running the Development Server

Start the development server with:

```bash
npm run start
```

Open [`http://localhost:4200/`](http://localhost:4200/) in your browser. The app will automatically reload if you change any of the source files.

### Building the App

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

To execute the unit tests:

```bash
npm run test
```

#### Component with Unit Tests

- OverviewComponent

## Branch Structure

- `main`: Contains the latest stable release of the application.
