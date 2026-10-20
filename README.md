# SmartLibrary Angular Project

A beginner-friendly Angular website for Web Engineering Assignment 2. It has four routed pages:
- Home (`/`)
- Books (`/books`)
- Issue / Return (`/issue-return`)
- About (`/about`)

## Requirements
- Node.js LTS (recommended)
- npm
- VS Code (recommended)

## Run the website
1. Extract this ZIP.
2. Open the extracted `smart-library-angular` folder in VS Code.
3. Open Terminal > New Terminal.
4. Run `npm install`
5. Run `npm start`
6. Open the local URL shown in the terminal, usually `http://localhost:4200`.

## Build for hosting
Run `npm run build`. The production output is created in `dist/smart-library/browser`.

## Online hosting (Netlify)
1. Run `npm run build` and confirm it completes successfully.
2. Sign in to Netlify and choose to deploy a site manually (drag-and-drop deploy).
3. Upload the contents of `dist/smart-library/browser` (not the whole source folder).
4. Open the generated public URL and test all four pages.
5. If direct refresh on a nested route gives a 404, configure a single-page-app rewrite to send routes to `/index.html` with status 200.

Hosting providers can change their dashboards, so use the current instructions shown in your hosting account.

## Important project notes
- This is a frontend classroom demo. It uses sample book data in the code.
- The issue/return form displays a demo confirmation only. It does not save data to a database or perform real library transactions.
- Contact details and collection counts are illustrative; replace them with your college's real details if needed.
- No passwords or API keys are required.

## Presentation outline
1. Introduce the project and the problem it addresses.
2. Explain the four pages and the navigation bar.
3. Demonstrate searching and filtering books.
4. Demonstrate the issue/return form.
5. Explain Angular components, routing, data binding, event binding, and CSS responsiveness.
6. Explain that a database/backend would be needed for real users and persistent transactions.
