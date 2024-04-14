# Organization Chart Project

## Overview

The Organization Chart is a web application designed to visually represent the hierarchical structure of an organization through an interactive chart. This application allows users to search for a policyholder by their unique identifier and then displays the direct and indirect introductions related to that policyholder as a multi-level diagram. The search results are structured with the searched policyholder at the center (referred to as the "main node") and up to four levels of connected introductions, each differentiated by color coding.

## Features

- **Search by Policyholder ID**: Users can easily search for a specific policyholder using their unique identifier.
- **Hierarchical Representation**: The app displays up to four levels of introduction relationships from the main node.
- **Color-Coded Nodes**: The main policyholder node is distinctly colored to stand out, and each child node is color-coded to differentiate between direct and indirect introductions.
- **Interactive Tree**: Clicking on any node will re-center the chart on that node, displaying up to four levels of introduction from it.
- **Mock API**: Simulate the back-end API using Mock Service Worker (MSW) for development and testing.

## Technology Stack

- **Frontend Framework**: Next.js (v14.1.4), providing server-side rendering and fast client-side navigation.
- **UI Library**: React (v18) with @mui/material-nextjs for modern, responsive user interface components.
- **State Management**: React Query and @tanstack/react-query for handling server state and caching.
- **Styling**: Emotion CSS-in-JS library (@emotion/react, @emotion/styled) for styling components.
- **Charts**: react-d3-tree for rendering hierarchical data as an interactive tree structure.
- **Development Tools**: TailwindCSS for utility-first styling, ESLint for code quality, and TypeScript for static type checking.
- **Mocking**: MSW for mocking API requests during development to simulate back-end services.
- **Dependencies Management**: Managed through `package.json` with a clear distinction between runtime dependencies and development-only dependencies.

## Getting Started

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.
4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Development

To build the application for production, run `npm run build`. The production-ready version of the app can be started with `npm run start`.

For linting the codebase, use `npm run lint` to identify and fix linting errors.

## Mocking

Mock Service Worker (MSW) is configured to intercept network requests and simulate backend responses. The worker directory is set up in the `public` folder. Use this for testing the application without an actual backend.

## Client Requirements

- Web-based interface.
- Policyholder search functionality.
- Color distinction for various relationship types.
- Mock API specifications for development and testing purposes.

## Contributing

Contributions are welcome! Please read our contributing guidelines to get started with your first pull request.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

---
