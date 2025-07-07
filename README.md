# Air Quality Insight

A full-stack application for monitoring and analyzing air quality data.

## Technologies Used

- **Frontend**: React, TailwindCSS, shadcn/ui
- **Backend**: Express.js, Node.js
- **Database**: Drizzle ORM with NeonDB
- **Authentication**: Passport.js

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/AirQualityInsight.git
   cd AirQualityInsight
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Building for Production

```bash
npm run build
```

## Deployment

This project is configured for deployment on Vercel. You can also deploy it to any other Node.js hosting platform.

### Deploying to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the configuration and deploy your application

## Project Structure

- `client/`: Frontend React application
- `server/`: Backend Express API
- `shared/`: Shared types and utilities
- `dist/`: Built application (generated after running build command)

## License

MIT 