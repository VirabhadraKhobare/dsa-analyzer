<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# DSA Analyzer - Copilot Instructions

This is a React.js-based Data Structure and Algorithm Code Analysis application. Please follow these guidelines when assisting with this project:

## Project Overview
- **Frontend**: React.js with Vite build tool
- **Styling**: Tailwind CSS with custom design system
- **Code Editor**: Monaco Editor for code input
- **Charts**: Chart.js with react-chartjs-2 for visualizations
- **Authentication**: Firebase Auth
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## Code Standards
- Use functional components with React hooks
- Follow ES6+ JavaScript standards
- Use Tailwind CSS for styling (avoid inline styles)
- Implement responsive design principles
- Use TypeScript-style prop validation when needed

## Component Structure
- Keep components focused and single-purpose
- Use custom hooks for complex state logic
- Implement proper error boundaries
- Follow the established folder structure:
  - `/src/components/` - Reusable UI components
  - `/src/pages/` - Page-level components
  - `/src/contexts/` - React contexts
  - `/src/utils/` - Utility functions

## Styling Guidelines
- Use the predefined color palette (primary, gray scales)
- Implement hover states and transitions for interactive elements
- Ensure proper contrast ratios for accessibility
- Use consistent spacing and typography scales

## Features to Maintain
- Monaco Editor integration for code input
- Firebase authentication system
- Code analysis simulation with mock data
- Responsive navigation and layouts
- Chart visualizations for complexity analysis
- Data structure detection and visualization

## Performance Considerations
- Implement lazy loading for routes and heavy components
- Optimize bundle size with proper imports
- Use React.memo for expensive components
- Implement proper error handling and loading states

Please ensure all suggestions maintain the existing design patterns and user experience while following React best practices.
