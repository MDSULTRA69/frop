# One Piece Daily — Frontend

React + Vite frontend. Deploy to **Netlify**.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the env file and fill in your Render backend URL:
   ```bash
   cp .env.example .env
   # Edit VITE_API_URL to point to your Render backend
   ```

3. Run locally:
   ```bash
   npm run dev
   ```

## Deploy to Netlify

### Option A — Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir dist
```

### Option B — Netlify Dashboard
1. Push this folder to a GitHub repo
2. Connect the repo in the Netlify dashboard
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variable: `VITE_API_URL=https://your-render-app.onrender.com`

The `netlify.toml` already handles SPA routing (all paths redirect to `index.html`).

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_URL` | Full URL of your Render backend, e.g. `https://onepiecedaily-api.onrender.com` |
