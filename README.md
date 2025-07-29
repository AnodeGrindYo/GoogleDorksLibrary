# Google Dorks Library

## Overview

**Google Dorks Library** is a lightweight web interface for browsing and filtering a collection of advanced Google search queries ("dorks"). It includes an educational tutorial to help users learn how to build their own queries ethically and responsibly.

---

## Requirements

* [Node.js](https://nodejs.org/) (v16 or newer)
* [Vite](https://vitejs.dev/) (installed via `npm` or `yarn`)

---

## Installation

1. Clone the repository:

```bash
git clone <repository-url> && cd google_dorks_library
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

This will serve the project at `http://localhost:5173` with hot reload enabled and CORS-friendly proxy support if configured.

---

## Running with Vite (Node.js)

To run a local server using Vite (with hot reload and no CORS issues):

```js
npm create vite@latest simple-server --template vanilla
cd simple-server
npm install
npm run dev
```

This will launch the server at http://localhost:5173/.

If you're inside a larger folder (like google_dorks_library/), you can keep your static files in the root and the dev server inside simple-server/. Just make sure to update your paths if needed.

---

## Start a local server without Node (Python only)

### Using Python 3.x

Inside the folder containing `index.html`, run:

```bash
python -m http.server 8000
```

Then open: [http://localhost:8000](http://localhost:8000)

> ⚠️ Note: This server does **not** handle CORS or proxies. It's meant for basic static file preview only.

---


## Author

* Built by AnodeGrindYo

---

## License

This project is licensed under the MIT License.

---

## Best Practices

* This project is for **educational and informational use only**.
* Do not use dorks to access unauthorized or sensitive data.
* Always act ethically and legally when researching with search engines.
