# 🚀 Adna Fika Agestifanka - Portfolio

A modern, AI-powered portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a unique command palette interface and integrated AI assistant.

## ✨ Features

### 🎯 Core Features
- **Modern Design**: Clean, responsive design with dark/light theme support
- **Command Palette**: Keyboard-driven navigation with `Cmd+K` / `Ctrl+K`
- **AI Assistant**: Integrated AI chat powered by Google Gemini
- **MDX Content**: Blog-style project documentation with frontmatter
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Optimized**: Comprehensive metadata and SEO configuration

### 🛠️ Technical Features
- **Next.js 14**: Latest App Router with server components
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **MDX Support**: Rich content with frontmatter metadata
- **Theme System**: Light/dark mode with system preference detection

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager
- Google AI API key (for AI assistant)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adnafika/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Google AI API key:
   ```env
   GOOGLE_AI_API_KEY=your_google_ai_api_key_here
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗂️ Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   │   └── chat/          # AI chat endpoint
│   ├── projects/          # Projects pages
│   │   ├── [slug]/        # Dynamic project pages
│   │   └── page.tsx       # Projects listing
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components
│   │   └── command-palette.tsx
│   ├── ai-chat.tsx       # AI chat component
│   └── theme-provider.tsx # Theme provider
├── lib/                  # Utility functions
│   └── projects.ts       # Project data handling
└── styles/               # Global styles
content/
└── projects/             # MDX project files
    ├── proyek-satu.mdx
    └── proyek-dua.mdx
```

## 📝 Adding New Projects

1. **Create a new MDX file** in `content/projects/`:
   ```mdx
   ---
   title: "Your Project Title"
   description: "Brief description of your project"
   date: "2024-01-01"
   tags: ["React", "Next.js", "TypeScript"]
   thumbnail: "https://your-image-url.jpg"
   ---

   # Your Project Title

   Your project content goes here...
   ```

2. **The project will automatically appear** in the projects listing and command palette.

## 🤖 AI Assistant Configuration

The AI assistant is powered by Google's Gemini AI. It's configured with a comprehensive system prompt that includes:

- Professional background and experience
- Technical skills and expertise
- Project information and achievements
- Personality and communication style

To customize the AI assistant:

1. Edit the `SYSTEM_PROMPT` in `src/app/api/chat/route.ts`
2. Update the professional information to match your background
3. Modify the personality and response style as needed

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom colors
        }
      }
    }
  }
}
```

### Command Palette
Add new commands in `src/components/ui/command-palette.tsx`:

```typescript
<Command.Item
  onSelect={() => runCommand(() => {
    // Your custom action
  })}
>
  Your Command
</Command.Item>
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard

3. **Deploy**
   Vercel will automatically deploy your site

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Digital Ocean App Platform
- AWS Amplify

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_AI_API_KEY` | Google AI API key for Gemini | Yes |
| `NEXT_PUBLIC_SITE_URL` | Your website URL | No |

## 📱 Features Walkthrough

### Command Palette
- Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) to open
- Navigate through pages, projects, and settings
- Switch between light/dark themes
- Access AI assistant

### AI Assistant
- Click "Tanya Adna AI..." in command palette
- Ask questions about experience, skills, or projects
- Get personalized responses based on configured profile
- Supports both English and Indonesian

### Project System
- MDX-based project documentation
- Automatic project listing generation
- Rich content with code highlighting
- SEO-optimized project pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Heroicons](https://heroicons.com/) - Beautiful SVG icons
- [Google AI](https://ai.google/) - AI assistant functionality

## 📧 Contact

Adna Fika Agestifanka - [adna.fika@example.com](mailto:adna.fika@example.com)

Project Link: [https://github.com/adnafika/portfolio](https://github.com/adnafika/portfolio)

---

**Built with ❤️ using Next.js 14 and TypeScript**