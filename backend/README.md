# DSA Analyzer Backend

This directory contains the backend API server for the DSA Analyzer application.

## Setup Instructions

1. **Initialize the Node.js project**
   ```bash
   cd backend
   npm init -y
   ```

2. **Install dependencies**
   ```bash
   npm install express cors dotenv helmet mongoose
   npm install -D nodemon
   ```

3. **Install Python dependencies for code analysis**
   ```bash
   pip install ast-decompiler pyflakes bandit
   ```

4. **Environment variables**
   Create a `.env` file with:
   ```
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/dsa-analyzer
   JWT_SECRET=your-jwt-secret
   FIREBASE_PROJECT_ID=your-firebase-project-id
   ```

5. **Start the server**
   ```bash
   npm run dev
   ```

## API Endpoints

### Code Analysis
- `POST /api/analyze` - Analyze code for data structures and complexity
- `GET /api/analysis/:id` - Get specific analysis result
- `GET /api/user/:userId/analyses` - Get user's analysis history

### User Management
- `POST /api/auth/register` - Register new user (handled by Firebase)
- `POST /api/auth/login` - Login user (handled by Firebase)
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Learning Resources
- `GET /api/tutorials` - Get all tutorials
- `GET /api/tutorials/:category` - Get tutorials by category
- `POST /api/user/progress` - Track learning progress

## File Structure

```
backend/
├── src/
│   ├── controllers/
│   │   ├── analysisController.js
│   │   ├── userController.js
│   │   └── tutorialController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── Analysis.js
│   │   ├── User.js
│   │   └── Tutorial.js
│   ├── routes/
│   │   ├── analysis.js
│   │   ├── user.js
│   │   └── tutorial.js
│   ├── services/
│   │   ├── codeAnalyzer.js
│   │   ├── complexityCalculator.js
│   │   └── dataStructureDetector.js
│   ├── utils/
│   │   ├── firebase.js
│   │   └── database.js
│   └── app.js
├── python_analyzer/
│   ├── ast_analyzer.py
│   ├── complexity_analyzer.py
│   └── structure_detector.py
├── package.json
└── server.js
```

## Technology Stack

- **Node.js + Express.js** - API server
- **MongoDB + Mongoose** - Database
- **Firebase Admin SDK** - Authentication
- **Python** - Code analysis engine
- **Child Process** - Execute Python scripts from Node.js
