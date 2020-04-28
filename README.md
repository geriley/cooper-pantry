# Cooper Pantry

Cooper Pantry is an open source pantry inventory management and community outreach platform.

## Getting Started

1. Clone Repository
2. Run `npm install` to install dependencies
3. Create a `.env` file based upon `.env.example` in the project root

## Run UI

Run `npm run start:pantry` to run Cooper Pantry with on a local dev server. Navigate to http://localhost:4200. The app will automatically reload if you change any of the source files.

## Run API

Run `npm run start:dev` to start the NestJS server. Navigate to http://localhost:333/api to view swagger documentation.

## Build

Run `ng run build:prod` to build the UI and API. The build artifacts will be stored in the `dist/` directory. 

## Running unit tests

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.
