import React, { useState } from 'react'
import { 
  BookOpen, 
  Play, 
  Clock, 
  Users, 
  Star, 
  ChevronRight,
  Code,
  Database,
  TreePine,
  Network,
  Layers,
  Grid,
  Search
} from 'lucide-react'

const Learn = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')

  const categories = [
    { id: 'all', name: 'All Topics', icon: <BookOpen className="h-5 w-5" /> },
    { id: 'arrays', name: 'Arrays', icon: <Grid className="h-5 w-5" /> },
    { id: 'linked-lists', name: 'Linked Lists', icon: <Network className="h-5 w-5" /> },
    { id: 'stacks-queues', name: 'Stacks & Queues', icon: <Layers className="h-5 w-5" /> },
    { id: 'trees', name: 'Trees', icon: <TreePine className="h-5 w-5" /> },
    { id: 'graphs', name: 'Graphs', icon: <Network className="h-5 w-5" /> },
    { id: 'sorting', name: 'Sorting', icon: <Layers className="h-5 w-5" /> },
    { id: 'searching', name: 'Searching', icon: <Search className="h-5 w-5" /> }
  ]

  const tutorials = [
    {
      id: 1,
      title: 'Introduction to Arrays',
      description: 'Learn the fundamentals of arrays, indexing, and basic operations.',
      category: 'arrays',
      difficulty: 'beginner',
      duration: '15 min',
      rating: 4.8,
      students: 1250,
      topics: ['Array Basics', 'Indexing', 'Insertion', 'Deletion'],
      complexity: { time: 'O(1) - O(n)', space: 'O(n)' }
    },
    {
      id: 2,
      title: 'Binary Search Algorithm',
      description: 'Master the binary search algorithm with step-by-step explanations.',
      category: 'searching',
      difficulty: 'intermediate',
      duration: '25 min',
      rating: 4.9,
      students: 980,
      topics: ['Binary Search', 'Divide & Conquer', 'Recursion'],
      complexity: { time: 'O(log n)', space: 'O(1)' }
    },
    {
      id: 3,
      title: 'Linked Lists Deep Dive',
      description: 'Understanding singly and doubly linked lists with practical examples.',
      category: 'linked-lists',
      difficulty: 'intermediate',
      duration: '30 min',
      rating: 4.7,
      students: 876,
      topics: ['Singly Linked Lists', 'Doubly Linked Lists', 'Insertion', 'Deletion'],
      complexity: { time: 'O(1) - O(n)', space: 'O(n)' }
    },
    {
      id: 4,
      title: 'Stack Operations & Applications',
      description: 'Learn stack implementation and real-world applications.',
      category: 'stacks-queues',
      difficulty: 'beginner',
      duration: '20 min',
      rating: 4.6,
      students: 1100,
      topics: ['LIFO Principle', 'Push/Pop', 'Expression Evaluation'],
      complexity: { time: 'O(1)', space: 'O(n)' }
    },
    {
      id: 5,
      title: 'Binary Trees & Traversals',
      description: 'Explore binary trees and different traversal techniques.',
      category: 'trees',
      difficulty: 'intermediate',
      duration: '35 min',
      rating: 4.8,
      students: 756,
      topics: ['Binary Trees', 'Inorder', 'Preorder', 'Postorder'],
      complexity: { time: 'O(n)', space: 'O(h)' }
    },
    {
      id: 6,
      title: 'Graph Algorithms Fundamentals',
      description: 'Introduction to graphs, BFS, DFS, and shortest path algorithms.',
      category: 'graphs',
      difficulty: 'advanced',
      duration: '45 min',
      rating: 4.9,
      students: 654,
      topics: ['Graph Representation', 'BFS', 'DFS', 'Dijkstra'],
      complexity: { time: 'O(V + E)', space: 'O(V)' }
    },
    {
      id: 7,
      title: 'Sorting Algorithms Comparison',
      description: 'Compare different sorting algorithms and their performance.',
      category: 'sorting',
      difficulty: 'intermediate',
      duration: '40 min',
      rating: 4.7,
      students: 1350,
      topics: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Heap Sort'],
      complexity: { time: 'O(n log n)', space: 'O(log n)' }
    },
    {
      id: 8,
      title: 'Queue Implementation & Variants',
      description: 'Learn about queues, circular queues, and priority queues.',
      category: 'stacks-queues',
      difficulty: 'beginner',
      duration: '22 min',
      rating: 4.5,
      students: 890,
      topics: ['FIFO Principle', 'Enqueue/Dequeue', 'Circular Queue'],
      complexity: { time: 'O(1)', space: 'O(n)' }
    }
  ]

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === 'all' || tutorial.difficulty === selectedDifficulty
    
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const getDifficultyColor = (difficulty) => {
    const colors = {
      beginner: 'bg-green-100 text-green-800',
      intermediate: 'bg-yellow-100 text-yellow-800',
      advanced: 'bg-red-100 text-red-800'
    }
    return colors[difficulty]
  }

  const quickFacts = [
    {
      title: 'Time Complexity',
      content: 'Big O notation describes the upper bound of algorithm performance',
      icon: <Clock className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Space Complexity',
      content: 'Measures the amount of memory an algorithm uses',
      icon: <Database className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Best Practices',
      content: 'Choose the right data structure for your specific use case',
      icon: <Star className="h-6 w-6 text-yellow-600" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 fade-in">
            📚 Learn Data Structures & Algorithms
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in">
            Master the fundamentals with our comprehensive tutorials, interactive examples, and hands-on exercises
          </p>
          
          {/* Learning Path */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Beginner</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Intermediate</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Advanced</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Facts */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {quickFacts.map((fact, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-all duration-300 hover:scale-105 card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-lg mr-4">
                  {fact.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{fact.title}</h3>
              </div>
              <p className="text-gray-600">{fact.content}</p>
            </div>
          ))}
        </div>

        {/* Enhanced Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Enhanced Search */}
            <div className="md:col-span-2 relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🔍 Search Tutorials
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search topics, algorithms, or concepts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            {/* Enhanced Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📁 Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Enhanced Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🎯 Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="all">All Levels</option>
                <option value="beginner">🟢 Beginner</option>
                <option value="intermediate">🟡 Intermediate</option>
                <option value="advanced">🔴 Advanced</option>
              </select>
            </div>
          </div>

          {/* Filter Results Summary */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Found <span className="font-semibold">{filteredTutorials.length}</span> tutorials
            </p>
            {(searchTerm || selectedCategory !== 'all' || selectedDifficulty !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                  setSelectedDifficulty('all')
                }}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

      {/* Category Cards */}
      <div className="grid md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`p-4 rounded-lg border transition-colors text-center ${
              selectedCategory === category.id
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className={`mx-auto mb-2 ${selectedCategory === category.id ? 'text-primary-600' : 'text-gray-500'}`}>
              {category.icon}
            </div>
            <div className="text-sm font-medium">{category.name}</div>
          </button>
        ))}
      </div>

      {/* Tutorial Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTutorials.map((tutorial) => (
          <div key={tutorial.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 flex-1">{tutorial.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                  {tutorial.difficulty}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{tutorial.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {tutorial.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {tutorial.students.toLocaleString()}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                  {tutorial.rating}
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-xs font-medium text-gray-500">Time Complexity:</span>
                  <span className="ml-2 text-sm font-mono text-blue-600">{tutorial.complexity.time}</span>
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500">Space Complexity:</span>
                  <span className="ml-2 text-sm font-mono text-green-600">{tutorial.complexity.space}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {tutorial.topics.slice(0, 3).map((topic, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {topic}
                  </span>
                ))}
                {tutorial.topics.length > 3 && (
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    +{tutorial.topics.length - 3} more
                  </span>
                )}
              </div>

              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center">
                <Play className="h-4 w-4 mr-2" />
                Start Learning
                <ChevronRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTutorials.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tutorials found</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters.</p>
        </div>
      )}

      {/* Learning Path Section */}
      <div className="mt-16 bg-gradient-to-br from-primary-50 to-blue-100 rounded-xl p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Structured Learning Path</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Follow our carefully designed learning path to master data structures and algorithms step by step.
          </p>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { step: 1, title: 'Basics', topics: 'Arrays, Variables' },
              { step: 2, title: 'Linear', topics: 'Lists, Stacks, Queues' },
              { step: 3, title: 'Trees', topics: 'Binary Trees, BST, Heaps' },
              { step: 4, title: 'Advanced', topics: 'Graphs, Dynamic Programming' }
            ].map((phase) => (
              <div key={phase.step} className="bg-white p-4 rounded-lg text-center">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                  {phase.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{phase.title}</h3>
                <p className="text-sm text-gray-600">{phase.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn
