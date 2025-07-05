# Adna Fika Agestifanka - Portfolio Website

A clean, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Dark Mode**: Beautiful dark theme as default
- **Responsive Design**: Optimized for all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper metadata and semantic HTML

## Pages

- **Home**: Introduction and overview of skills
- **Projects**: Showcase of featured projects
- **About**: Personal story and technical skills

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd adna-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
adna-portfolio/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── data.ts
├── public/
├── package.json
└── README.md
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with default settings

The project is optimized for Vercel deployment with no additional configuration required.

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Customization

### Updating Project Data

Edit `src/lib/data.ts` to update the projects shown on the Projects page.

### Styling

The project uses Tailwind CSS for styling. Global styles are in `src/app/globals.css`.

### Content

Update the content in the respective page files:
- Home page: `src/app/page.tsx`
- Projects page: `src/app/projects/page.tsx`
- About page: `src/app/about/page.tsx`

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Inter](https://fonts.google.com/specimen/Inter) - Typography

## License

This project is open source and available under the [MIT License](LICENSE).
