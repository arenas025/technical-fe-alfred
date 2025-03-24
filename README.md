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
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root folder and add the following:
   ```env
   API_KEY=9e140901d3ece2716855f44cdddb55d3
   ```

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
