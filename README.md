# 📘 Advance Types of TypeScript

Welcome to learn Advance Types of TypeScript — a concise guide to understanding the Advance of TypeScript. This guide will help you grasp the core building blocks of TypeScript.

## 📚 What You'll Learn
- 

---

## 🛠 Project Setup

### 1. Initialize TypeScript
```bash
tsc --init
````

### 2. Update `tsconfig.json`

Make sure your `tsconfig.json` has the following configuration:

```json
{
  "compilerOptions": {
    "rootDir": "./src/",
    "outDir": "./dist/",
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### 3. Install `ts-node-dev`

```bash
npm install -g ts-node-dev
```

### 4. Run the Project

```bash
ts-node-dev --respawn --transpile-only src/index.ts
```

### Happy coding with TypeScript! 🚀
