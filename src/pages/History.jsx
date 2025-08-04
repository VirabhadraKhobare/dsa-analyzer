import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { 
  Clock, 
  Code, 
  Eye, 
  Trash2, 
  Download, 
  Calendar,
  Filter,
  Search,
  FileText,
  BarChart3
} from 'lucide-react'
import toast from 'react-hot-toast'

const History = () => {
  const { user } = useAuth()
  const [analyses, setAnalyses] = useState([])
  const [filteredAnalyses, setFilteredAnalyses] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [languageFilter, setLanguageFilter] = useState('all')
  const [dateFilter, setDateFilter] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data for demonstration
  useEffect(() => {
    const mockAnalyses = [
      {
        id: '1',
        title: 'Binary Search Implementation',
        language: 'javascript',
        date: new Date('2024-01-15'),
        complexity: { time: 'O(log n)', space: 'O(1)' },
        dataStructures: ['Array', 'Variable'],
        codeSnippet: 'function binarySearch(arr, target) {\n    let left = 0;\n    let right = arr.length - 1;...',
        qualityScore: 85
      },
      {
        id: '2',
        title: 'Quick Sort Algorithm',
        language: 'python',
        date: new Date('2024-01-14'),
        complexity: { time: 'O(n log n)', space: 'O(log n)' },
        dataStructures: ['Array', 'Variable'],
        codeSnippet: 'def quicksort(arr):\n    if len(arr) <= 1:\n        return arr...',
        qualityScore: 92
      },
      {
        id: '3',
        title: 'Linked List Implementation',
        language: 'cpp',
        date: new Date('2024-01-13'),
        complexity: { time: 'O(n)', space: 'O(1)' },
        dataStructures: ['LinkedList', 'Node', 'Pointer'],
        codeSnippet: 'class ListNode {\npublic:\n    int val;\n    ListNode* next;...',
        qualityScore: 78
      },
      {
        id: '4',
        title: 'Binary Tree Traversal',
        language: 'java',
        date: new Date('2024-01-12'),
        complexity: { time: 'O(n)', space: 'O(h)' },
        dataStructures: ['Tree', 'Node', 'Stack'],
        codeSnippet: 'public void inorderTraversal(TreeNode root) {\n    if (root != null) {...',
        qualityScore: 88
      },
      {
        id: '5',
        title: 'Hash Table Operations',
        language: 'javascript',
        date: new Date('2024-01-11'),
        complexity: { time: 'O(1)', space: 'O(n)' },
        dataStructures: ['HashTable', 'Array', 'Object'],
        codeSnippet: 'class HashTable {\n    constructor(size = 7) {\n        this.dataMap = new Array(size);...',
        qualityScore: 91
      }
    ]

    // Simulate loading delay
    setTimeout(() => {
      setAnalyses(mockAnalyses)
      setFilteredAnalyses(mockAnalyses)
      setIsLoading(false)
    }, 1000)
  }, [])

  // Filter analyses based on search term, language, and date
  useEffect(() => {
    let filtered = analyses

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(analysis =>
        analysis.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        analysis.dataStructures.some(ds => ds.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Language filter
    if (languageFilter !== 'all') {
      filtered = filtered.filter(analysis => analysis.language === languageFilter)
    }

    // Date filter
    if (dateFilter !== 'all') {
      const now = new Date()
      const filterDate = new Date()
      
      if (dateFilter === 'today') {
        filterDate.setHours(0, 0, 0, 0)
      } else if (dateFilter === 'week') {
        filterDate.setDate(now.getDate() - 7)
      } else if (dateFilter === 'month') {
        filterDate.setMonth(now.getMonth() - 1)
      }
      
      filtered = filtered.filter(analysis => analysis.date >= filterDate)
    }

    setFilteredAnalyses(filtered)
  }, [searchTerm, languageFilter, dateFilter, analyses])

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this analysis?')) {
      setAnalyses(analyses.filter(analysis => analysis.id !== id))
      toast.success('Analysis deleted successfully')
    }
  }

  const handleDownload = (analysis) => {
    const data = {
      title: analysis.title,
      language: analysis.language,
      date: analysis.date.toISOString(),
      complexity: analysis.complexity,
      dataStructures: analysis.dataStructures,
      code: analysis.codeSnippet,
      qualityScore: analysis.qualityScore
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${analysis.title.replace(/\s+/g, '_')}_analysis.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    toast.success('Analysis downloaded successfully')
  }

  const getLanguageColor = (language) => {
    const colors = {
      javascript: 'bg-yellow-100 text-yellow-800',
      python: 'bg-blue-100 text-blue-800',
      cpp: 'bg-green-100 text-green-800',
      java: 'bg-red-100 text-red-800'
    }
    return colors[language] || 'bg-gray-100 text-gray-800'
  }

  const getQualityScoreColor = (score) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 80) return 'text-blue-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Authentication Required</h3>
          <p className="text-gray-600 mb-4">Please log in to view your analysis history.</p>
          <Link
            to="/login"
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analysis History</h1>
        <p className="text-gray-600">
          View and manage your past code analysis results
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <div className="grid md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search analyses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {/* Language Filter */}
          <div>
            <select
              value={languageFilter}
              onChange={(e) => setLanguageFilter(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="all">All Languages</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
            </select>
          </div>

          {/* Date Filter */}
          <div>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-end">
            <span className="text-sm text-gray-500">
              {filteredAnalyses.length} result{filteredAnalyses.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Analysis List */}
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border animate-pulse">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-20 bg-gray-200 rounded mb-4"></div>
                  <div className="flex space-x-4">
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredAnalyses.length === 0 ? (
        <div className="text-center py-12">
          <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No analyses found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || languageFilter !== 'all' || dateFilter !== 'all'
              ? 'Try adjusting your filters or search terms.'
              : 'Start analyzing your code to see your history here.'}
          </p>
          <Link
            to="/analyzer"
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium transition-colors inline-flex items-center"
          >
            <Code className="h-4 w-4 mr-2" />
            Analyze Code
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAnalyses.map((analysis) => (
            <div key={analysis.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{analysis.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLanguageColor(analysis.language)}`}>
                      {analysis.language}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {analysis.date.toLocaleDateString()}
                    <Clock className="h-4 w-4 ml-4 mr-1" />
                    {analysis.date.toLocaleTimeString()}
                  </div>

                  <div className="bg-gray-50 p-3 rounded-md mb-4">
                    <code className="text-sm text-gray-700 font-mono">
                      {analysis.codeSnippet}
                    </code>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <span className="text-xs text-gray-500">Time Complexity</span>
                      <div className="font-medium text-blue-600">{analysis.complexity.time}</div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500">Space Complexity</span>
                      <div className="font-medium text-green-600">{analysis.complexity.space}</div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500">Data Structures</span>
                      <div className="font-medium text-gray-900">{analysis.dataStructures.length}</div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500">Quality Score</span>
                      <div className={`font-medium ${getQualityScoreColor(analysis.qualityScore)}`}>
                        {analysis.qualityScore}/100
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {analysis.dataStructures.map((ds, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {ds}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-2 ml-4">
                  <button
                    onClick={() => handleDownload(analysis)}
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                    title="Download Analysis"
                  >
                    <Download className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(analysis.id)}
                    className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                    title="Delete Analysis"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default History
