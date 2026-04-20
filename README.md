# LeadFind

LeadFind is an Angular-based lead management dashboard that fetches lead records from a mock API, lets users search and filter the results, and opens a detailed view for each lead.

## Features

- Fetches lead data from a remote mock API on load
- Displays leads in a responsive card grid
- Filters results by search text and lead status
- Opens a lead details popup for the selected record
- Uses a clean component-based Angular structure

## Tech Stack

- Angular 21
- TypeScript
- RxJS
- Bootstrap

## Prerequisites

- Node.js 18 or later
- npm 10 or later

## Setup

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open the app in your browser at:

```bash
http://localhost:4200/
```

## Available Scripts

```bash
npm start
```

Starts the local development server.

```bash
npm run build
```

Builds the application for production.

```bash
npm run watch
```

Rebuilds automatically during development.

```bash
npm test
```

Runs the test suite.

## Project Structure

```text
src/
  app/
    app.ts                Root application shell
    container/            Lead dashboard feature area
    header/               Main navigation header
    Models/               Shared TypeScript models
```

## Notes

- Lead data is loaded from a remote mock API at runtime.
- The dashboard is split into reusable Angular components for search, filtering, listing, and details.

## GitHub Pages

This repository is set up to publish from the `gh-pages` branch.

After the branch is pushed:

1. Open the repository on GitHub.
2. Go to `Settings` > `Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select `gh-pages` and `/ (root)`.
5. Save the settings and open the published Pages URL once GitHub finishes updating it.
