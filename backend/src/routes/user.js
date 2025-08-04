const express = require('express');
const router = express.Router();

// GET /api/user/profile
router.get('/profile', async (req, res) => {
  try {
    // Mock user profile
    const userProfile = {
      id: '12345',
      email: 'user@example.com',
      name: 'John Doe',
      analysisCount: 15,
      joinDate: '2024-01-01',
      preferences: {
        defaultLanguage: 'javascript',
        notifications: true
      }
    };

    res.json({
      success: true,
      user: userProfile
    });
  } catch (error) {
    console.error('User profile error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch user profile' 
    });
  }
});

// GET /api/user/history
router.get('/history', async (req, res) => {
  try {
    // Mock analysis history
    const history = [
      {
        id: '1',
        title: 'Binary Search Implementation',
        language: 'javascript',
        date: '2024-01-15',
        complexity: { time: 'O(log n)', space: 'O(1)' },
        qualityScore: 85
      }
    ];

    res.json({
      success: true,
      analyses: history
    });
  } catch (error) {
    console.error('User history error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch analysis history' 
    });
  }
});

module.exports = router;
