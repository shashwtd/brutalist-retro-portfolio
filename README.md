# Brutalist Portfolio

A minimalist, brutalist-style portfolio website built with Next.js 14, React, and Tailwind CSS.

## Tech Stack

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS
- Hedvig Letters Serif & Inter fonts

## Features

- Responsive brutalist design
- Dynamic time display (Indian timezone)
- CSS animations and effects
- SEO optimized
- Mobile-first approach
- Customizable content

## Running Locally

```bash
git clone https://github.com/yourusername/brutalist-retro-portfolio.git
cd brutalist-retro-portfolio
npm install
npm run dev
```

Visit `http://localhost:3000`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage component
│   └── globals.css     # Global styles
├── components/
│   └── BrutalAlert.tsx # Alert component
└── public/
    ├── arrow.svg       # Navigation arrow
    └── location.svg    # Location icon
```

## Customization

1. Update metadata in `layout.tsx`
2. Modify colors in `globals.css`
3. Edit content in `page.tsx`

## Deployment

Deploy using Vercel for the best experience:

```bash
npm run build
```

## License

MIT
