
# 🤖 AI Recipe Generator 
---

https://recipefrontend.pages.dev

Welcome to the *AI Recipe Generator* project! This app was designed to solve a common problem we face during hostel life — not knowing what to cook with leftover ingredients. With this AI-powered solution, just input the ingredients you have left, and it will generate a recipe for you based on those ingredients! 

## 🚀 Demo
Try the live version of the AI Recipe Generator here: [AI Recipe Generator](https://recipefrontend.pages.dev)
---
![image](https://github.com/user-attachments/assets/c0512a0b-d7df-49bf-8494-815e35d25714)
---

## 🛠 Tech Stack

- *Frontend: Built using **React.js* for the user interface.
- *Backend: Powered by **Cloudflare Workers* to handle requests.
- *AI Model: Uses **Llama 3.8b Instruct Model* to generate the recipe.
- *Markdown Rendering: Uses **React Markdown* to display the recipe neatly.

## 🔧 Installation

### 1. Clone the repository

```
git clone https://github.com/teja-poa/Recipe-AI.git
cd recipefrontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Cloudflare Workers

Install *Wrangler* to deploy Cloudflare Workers:

```bash
npm install -g wrangler
```

Then, configure *Wrangler* with your Cloudflare account.

### 4. Run Locally

Start the development server:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view it locally.

### 5. Deploy

Deploy the project to Cloudflare Workers when ready:

```bash
cd recipemaker
wrangler publish
```

## 🤝 Contributing

We welcome contributions! Fork the repo, make your changes, and submit a pull request.

## 📄 License

This project is licensed under the MIT License.

---

