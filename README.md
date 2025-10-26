# ChutNee Web App

A modern, optimized React web application built with Vite, featuring lazy loading, performance monitoring, loading skeletons, and smooth page transitions.
Live link : https://chut-nee-web-app.vercel.app/

## Features

- ⚡️ **Blazing Fast** - Built with Vite for rapid development and optimized production builds
- 🎯 **Performance Focused** - Integrated performance monitoring and optimization
- 🖼️ **Lazy Loading** - Images and components load on-demand
- 💫 **Smooth Transitions** - Beautiful page transitions for better UX
- 🦴 **Loading Skeletons** - Elegant loading states while content loads
- 📱 **Responsive Design** - Looks great on all devices
- 🎨 **CSS Modules** - Scoped styling with no conflicts

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd ChutNee_Web_App
```

2. Install dependencies
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

## Performance Optimizations

### Code Splitting
- React.lazy and Suspense for component-level code splitting
- Automatic chunk splitting by Vite
- Route-based lazy loading

### Image Optimization
- Lazy loading images using IntersectionObserver
- Responsive images with proper sizing
- Loading skeleton placeholders

### Performance Monitoring
- Built-in performance monitoring component
- Lighthouse integration for auditing
- Real-time performance metrics

### Loading States
- Skeleton loaders for content
- Shimmer effects for better UX
- Component-specific loading states

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── common/        # Shared components
│   ├── Features/      # Feature section components
│   ├── Footer/        # Footer components
│   ├── Header/        # Header components
│   └── Hero/          # Hero section components
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── styles/            # Global styles
└── assets/           # Static assets
```

## Performance Metrics

The application is optimized to meet the following performance targets:

- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
