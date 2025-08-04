<<<<<<< HEAD
# DSA Analyzer 📊

A comprehensive React.js application for analyzing Data Structures and Algorithms code with visual complexity analysis, performance metrics, and educational insights.

![DSA Analyzer](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.0-blue)
![Firebase](https://img.shields.io/badge/Firebase-Authentication-orange)
![Vite](https://img.shields.io/badge/Vite-4.4.0-purple)

## 🚀 Features

- **Code Analysis**: Real-time analysis of data structure and algorithm implementations
- **Visual Complexity Charts**: Interactive charts showing time and space complexity
- **Monaco Editor Integration**: Professional code editor with syntax highlighting
- **Firebase Authentication**: Secure user authentication and session management
- **Analysis History**: Track and review previous code analyses
- **Responsive Design**: Optimized for desktop and mobile devices
- **Educational Content**: Learning resources for DSA concepts

## 🛠️ Tech Stack

- **Frontend**: React.js 18 with Hooks
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Code Editor**: Monaco Editor
- **Charts**: Chart.js with react-chartjs-2
- **Authentication**: Firebase Auth
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VirabhadraKhobare/dsa-analyzer.git
   cd dsa-analyzer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   VITE_FIREBASE_PROJECT_ID=your_project_id_here
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
   VITE_FIREBASE_APP_ID=your_app_id_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser and navigate to** `http://localhost:5173`

## 🎯 Usage

1. **Home Page**: Overview of features and quick access to analyzer
2. **Code Analyzer**: 
   - Input your DSA code in the Monaco editor
   - Click "Analyze Code" to get complexity analysis
   - View visual charts and performance metrics
3. **History**: Review your previous analyses (requires authentication)
4. **Learn**: Access educational content about data structures and algorithms

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── ProtectedRoute.jsx
│   └── ...
├── pages/              # Page-level components
│   ├── Home.jsx
│   ├── Analyzer.jsx
│   ├── History.jsx
│   ├── Learning.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── contexts/           # React contexts
│   └── AuthContext.jsx
├── utils/              # Utility functions
│   └── firebase.js
└── App.jsx             # Main application component
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Features

### Code Analysis Engine
- Detects data structures (Arrays, Linked Lists, Trees, Graphs, etc.)
- Analyzes algorithm patterns (Sorting, Searching, Dynamic Programming)
- Calculates time and space complexity
- Provides optimization suggestions

### Interactive Visualizations
- Time complexity charts
- Space complexity analysis
- Performance comparisons
- Data structure visualizations

### User Experience
- Clean, modern interface
- Responsive design for all devices
- Real-time code analysis
- Comprehensive error handling
- Toast notifications for user feedback

## 🔒 Authentication

The application uses Firebase Authentication with:
- Email/Password registration and login
- Password reset functionality
- Protected routes for authenticated users
- User session management

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

### Firebase Hosting
```bash
npm run build
firebase deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Virabhadra Khobare**
- GitHub: [@VirabhadraKhobare](https://github.com/VirabhadraKhobare)
- Email: your.email@example.com

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Monaco Editor for the code editor component
- Firebase for authentication services
- Chart.js for data visualization

---

⭐ Star this repository if you find it helpful!
=======
# dsa-analyzer
>>>>>>> a5c5f8c03f61e435e3dab2257661a890b5778fa7
