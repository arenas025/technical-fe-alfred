# 🚀 Sky Connect Explorer

Welcome to **Sky Connect Explorer**! This README will guide you through setting up, running, and understanding the project structure.

## 🛠️ Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v18+ recommended) 
- **pnpm** (recommended for faster installs) 
- **Git**

---

## 📥 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arenas025/technical-fe-alfred
   cd technical-fe-alfred
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root folder and add the following:
   ```env
   API_KEY=ac38d015299dfaa9e7af3797fee050a8
   ```

   Take into account that the API only have a limit of 100 requests, so in case you run out of requests you can create a new account and use the new API key here [here](https://aviationstack.com/signup/free)

---

## ▶️ Running the Project

### Development mode
```bash
pnpm run dev
```
Visit **[http://localhost:3000](http://localhost:3000)** to view the app.

### Production mode
```bash
pnpm run build
pnpm start
```

---

## 🔥 Testing

To run the tests:
```bash
pnpm run test
```

For end-to-end (E2E) tests with Cypress:
```bash
pnpm run cypress
```
Take into account that for E2E test you need to have the server running with the following command:
```bash
pnpm run dev
```

---
