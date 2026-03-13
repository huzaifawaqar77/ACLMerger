# ACL File Merger Website

A professional landing page for the ACL File Merger Windows application, featuring a clean neumorphism (soft UI) design built with Next.js, TypeScript, and Tailwind CSS.

## Design Philosophy

This website uses **Neumorphism (Soft UI)** - a modern design trend that combines the tactile feel of skeuomorphism with the simplicity of flat design. Key characteristics include:

- **Soft, subtle shadows** - Dual shadows create raised/pressed effects
- **Light color palette** - Muted grays and off-whites (#e8ecf1 background)
- **Tactile elements** - Buttons and cards feel like physical objects
- **No gradients** - Clean, solid colors for a professional look
- **Rounded corners** - 12px-24px border radius throughout

## Features

- 🎨 **Neumorphism Design** - Professional soft UI with tactile shadows
- ☀️ **Light Theme Only** - Clean, easy-on-the-eyes color palette
- ⚡ **Smooth Animations** - Subtle Framer Motion transitions
- 📱 **Fully Responsive** - Works on all devices
- 🔒 **Professional Look** - No AI-generated gradient aesthetics

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS for Neumorphism
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

1. Install dependencies:
```bash
cd acl-file-merger
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
```

The static files will be generated in the `dist` folder.

## Project Structure

```
acl-file-merger/
├── src/
│   └── app/
│       ├── layout.tsx    # Root layout with favicon
│       ├── page.tsx      # Main landing page
│       └── globals.css   # Neumorphism styles
├── public/
│   ├── ACLMerger.exe     # Downloadable application
│   └── logo.svg          # Site logo/favicon
├── dist/                 # Built static files
├── tailwind.config.ts    # Tailwind configuration
├── next.config.mjs       # Next.js configuration
├── Dockerfile            # Docker configuration for Coolify
├── .dockerignore         # Docker ignore file
└── package.json
```

## Deploy to Coolify

This project includes a `Dockerfile` for easy deployment to your self-hosted Coolify instance.

### Steps:

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push <your-repo-url>
   ```

2. **In Coolify Dashboard:**
   - Click "New Resource"
   - Select "Public Repository"
   - Enter your repository URL
   - Coolify will automatically detect the Dockerfile
   - Click "Deploy"

3. **Environment Variables** (if needed):
   - No special environment variables required for static site

4. **Access Your Site:**
   - Coolify will provide a domain after deployment
   - Or configure your custom domain

### Docker Details

The Dockerfile uses a multi-stage build:
- **Builder stage:** Builds the Next.js application
- **Production stage:** Serves static files using `serve`
- Exposes port 3000
- Runs as non-root user for security

## Neumorphism CSS Classes

The design uses custom CSS classes for the neumorphic effect:

- `.neu-raised` - Elevated elements with dual shadows
- `.neu-pressed` - Inset/pressed elements
- `.neu-card` - Cards with strong shadow depth
- `.neu-button` - Interactive buttons with tactile feedback
- `.neu-button-primary` - Primary action buttons with color
- `.neu-input` - Form inputs with inset shadows
- `.neu-icon` - Icon containers
- `.neu-circle` - Circular buttons
- `.neu-badge` - Badge/pill elements

## Links & Contact

- **Download:** `/ACLMerger.exe` (automatic download)
- **GitHub:** [github.com/huzaifawaqar77](https://github.com/huzaifawaqar77)
- **Email:** [huzaifawaqar77@gmail.com](mailto:huzaifawaqar77@gmail.com)

## Design Credits

Designed and built by [UIFlexer.com](https://uiflexer.com) ([@uiflexer](https://twitter.com/uiflexer))

---

© 2026 ACL File Merger. All rights reserved.
