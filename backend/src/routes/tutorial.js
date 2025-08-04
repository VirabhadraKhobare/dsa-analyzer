const express = require('express');
const router = express.Router();

// GET /api/tutorials
router.get('/', async (req, res) => {
  try {
    const { category, difficulty, search } = req.query;

    // Mock tutorials data
    let tutorials = [
      {
        id: 1,
        title: 'Introduction to Arrays',
        description: 'Learn the fundamentals of arrays, indexing, and basic operations.',
        category: 'arrays',
        difficulty: 'beginner',
        duration: '15 min',
        rating: 4.8,
        students: 1250
      },
      {
        id: 2,
        title: 'Binary Search Algorithm',
        description: 'Master the binary search algorithm with step-by-step explanations.',
        category: 'searching',
        difficulty: 'intermediate',
        duration: '25 min',
        rating: 4.9,
        students: 980
      }
    ];

    // Apply filters
    if (category && category !== 'all') {
      tutorials = tutorials.filter(t => t.category === category);
    }

    if (difficulty && difficulty !== 'all') {
      tutorials = tutorials.filter(t => t.difficulty === difficulty);
    }

    if (search) {
      tutorials = tutorials.filter(t => 
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    res.json({
      success: true,
      tutorials,
      total: tutorials.length
    });

  } catch (error) {
    console.error('Tutorials error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch tutorials' 
    });
  }
});

// GET /api/tutorials/:id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Mock tutorial detail
    const tutorial = {
      id: parseInt(id),
      title: 'Binary Search Algorithm',
      description: 'Master the binary search algorithm with step-by-step explanations.',
      content: 'Tutorial content here...',
      category: 'searching',
      difficulty: 'intermediate',
      duration: '25 min',
      rating: 4.9,
      students: 980
    };

    res.json({
      success: true,
      tutorial
    });

  } catch (error) {
    console.error('Tutorial detail error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch tutorial details' 
    });
  }
});

module.exports = router;
