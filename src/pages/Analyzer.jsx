import React, { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { 
  Play, 
  Upload, 
  Download, 
  FileText, 
  BarChart3, 
  Eye, 
  Lightbulb,
  Clock,
  Database,
  Zap,
  AlertCircle,
  CheckCircle,
  Info
} from 'lucide-react'
import toast from 'react-hot-toast'
import AnalysisResults from '../components/AnalysisResults'
import ComplexityChart from '../components/ComplexityChart'
import DataStructureVisualizer from '../components/DataStructureVisualizer'
import ErrorBoundary from '../components/ErrorBoundary'

const Analyzer = () => {
  const [code, setCode] = useState(`// Example: Binary Search Implementation
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Example usage
const numbers = [1, 3, 5, 7, 9, 11, 13, 15];
const result = binarySearch(numbers, 7);
console.log(result); // Output: 3`)
  
  const [language, setLanguage] = useState('javascript')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState(null)
  const [activeTab, setActiveTab] = useState('code')
  const editorRef = useRef(null)
  const fileInputRef = useRef(null)

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'cpp', label: 'C++' },
    { value: 'java', label: 'Java' }
  ]

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setCode(e.target.result)
        toast.success('File uploaded successfully!')
      }
      reader.readAsText(file)
    }
  }

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([code], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `code.${language === 'cpp' ? 'cpp' : language === 'java' ? 'java' : language === 'python' ? 'py' : 'js'}`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
    toast.success('Code downloaded successfully!')
  }

  const analyzeCode = async () => {
    if (!code.trim()) {
      toast.error('Please enter some code to analyze')
      return
    }

    setIsAnalyzing(true)
    try {
      // Simulate API call for demo purposes
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock analysis results
      const mockResults = {
        dataStructures: [
          { name: 'Array', occurrences: 2, lines: [8, 14] },
          { name: 'Variable', occurrences: 6, lines: [2, 3, 5, 6, 9, 10] }
        ],
        complexity: {
          time: 'O(log n)',
          space: 'O(1)',
          explanation: 'Binary search has logarithmic time complexity as it halves the search space in each iteration.'
        },
        suggestions: [
          {
            type: 'optimization',
            message: 'Consider adding input validation to check if the array is sorted',
            severity: 'info'
          },
          {
            type: 'improvement',
            message: 'Add bounds checking for empty arrays',
            severity: 'warning'
          }
        ],
        codeQuality: {
          score: 85,
          metrics: {
            readability: 90,
            efficiency: 95,
            maintainability: 80
          }
        }
      }
      
      setAnalysisResults(mockResults)
      setActiveTab('results')
      toast.success('Code analysis completed!')
    } catch {
      toast.error('Analysis failed. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const tabs = [
    { id: 'code', label: 'Code Editor', icon: <FileText className="h-4 w-4" /> },
    { id: 'results', label: 'Analysis Results', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'visualization', label: 'Visualization', icon: <Eye className="h-4 w-4" /> },
    { id: 'suggestions', label: 'Suggestions', icon: <Lightbulb className="h-4 w-4" /> }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 fade-in">
            🚀 Advanced Code Analyzer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in">
            Analyze your data structures and algorithms with AI-powered insights. 
            Get instant feedback on complexity, optimization opportunities, and code quality.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-2xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-sm text-gray-600">Codes Analyzed</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-2xl font-bold text-green-600 mb-2">99.8%</div>
            <div className="text-sm text-gray-600">Accuracy Rate</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-2xl font-bold text-purple-600 mb-2">4</div>
            <div className="text-sm text-gray-600">Languages Supported</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-2xl font-bold text-orange-600 mb-2">{"< 2s"}</div>
            <div className="text-sm text-gray-600">Analysis Time</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6 bg-white rounded-t-lg px-6">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600 bg-primary-50 rounded-t-md'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50 rounded-t-md'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Code Editor Tab */}
        {activeTab === 'code' && (
          <div className="space-y-6 fade-in">
            {/* Enhanced Controls */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Programming Language
                    </label>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white min-w-32"
                    >
                      {languages.map((lang) => (
                        <option key={lang.value} value={lang.value}>
                          {lang.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="block text-sm font-medium text-gray-700">
                      File Operations
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept=".js,.py,.cpp,.java,.txt"
                        className="hidden"
                      />
                      
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center space-x-2 px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-200 hover:shadow-md"
                      >
                        <Upload className="h-4 w-4" />
                        <span>Upload File</span>
                      </button>

                      <button
                        onClick={handleDownload}
                        className="flex items-center space-x-2 px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-200 hover:shadow-md"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Enhanced Analyze Button */}
                <div className="flex flex-col items-end">
                  <button
                    onClick={analyzeCode}
                    disabled={isAnalyzing || !code.trim()}
                    className="flex items-center space-x-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Analyzing Code...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="h-5 w-5" />
                        <span>Analyze Code</span>
                        <BarChart3 className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  {!code.trim() && (
                    <p className="text-xs text-gray-500 mt-1">Enter code to analyze</p>
                  )}
                </div>
              </div>

              {/* Code Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-md">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">{code.split('\n').length}</div>
                  <div className="text-xs text-gray-600">Lines</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">{code.length}</div>
                  <div className="text-xs text-gray-600">Characters</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">{code.split(/\s+/).filter(word => word.length > 0).length}</div>
                  <div className="text-xs text-gray-600">Words</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">{Math.ceil(code.split(/\s+/).filter(word => word.length > 0).length / 200)}</div>
                  <div className="text-xs text-gray-600">Est. Minutes</div>
                </div>
              </div>
            </div>

            {/* Enhanced Monaco Editor */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Code Editor</span>
                  <span className="text-sm text-gray-500">({language})</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="monaco-editor-container">
                <Editor
                  height="600px"
                  language={language}
                  value={code}
                  onChange={setCode}
                  onMount={handleEditorDidMount}
                  theme="vs-light"
                  options={{
                    minimap: { enabled: true },
                    fontSize: 14,
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 2,
                    wordWrap: 'on',
                    folding: true,
                    lineDecorationsWidth: 10,
                    lineNumbersMinChars: 3,
                    renderLineHighlight: 'all',
                    selectOnLineNumbers: true,
                    cursorStyle: 'line',
                    cursorBlinking: 'blink'
                  }}
                />
              </div>
            </div>

            {/* Code Examples */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Try These Examples</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Binary Search",
                    desc: "Efficient searching algorithm",
                    complexity: "O(log n)",
                    onClick: () => setCode(`// Binary Search Implementation
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}`)
                  },
                  {
                    title: "Quick Sort",
                    desc: "Fast sorting algorithm",
                    complexity: "O(n log n)",
                    onClick: () => setCode(`// Quick Sort Implementation
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}`)
                  },
                  {
                    title: "BFS Traversal",
                    desc: "Graph traversal algorithm",
                    complexity: "O(V + E)",
                    onClick: () => setCode(`// Breadth-First Search Implementation
function bfs(graph, startNode) {
    let visited = new Set();
    let queue = [startNode];
    let result = [];
    
    visited.add(startNode);
    
    while (queue.length > 0) {
        let node = queue.shift();
        result.push(node);
        
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    
    return result;
}`)
                  }
                ].map((example, index) => (
                  <button
                    key={index}
                    onClick={example.onClick}
                    className="text-left p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 hover:shadow-md"
                  >
                    <h4 className="font-semibold text-gray-900 mb-1">{example.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{example.desc}</p>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {example.complexity}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

      {/* Analysis Results Tab */}
      {activeTab === 'results' && (
        <div>
          {analysisResults ? (
            <AnalysisResults results={analysisResults} />
          ) : (
            <div className="text-center py-12">
              <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Analysis Results</h3>
              <p className="text-gray-600">Run code analysis to see detailed results here.</p>
            </div>
          )}
        </div>
      )}

      {/* Visualization Tab */}
      {activeTab === 'visualization' && (
        <div>
          {analysisResults ? (
            <div className="space-y-6">
              <ErrorBoundary>
                <ComplexityChart data={analysisResults.complexity} />
              </ErrorBoundary>
              <DataStructureVisualizer structures={analysisResults.dataStructures} />
            </div>
          ) : (
            <div className="text-center py-12">
              <Eye className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Visualizations Available</h3>
              <p className="text-gray-600">Run code analysis to see visualizations here.</p>
            </div>
          )}
        </div>
      )}

      {/* Suggestions Tab */}
      {activeTab === 'suggestions' && (
        <div>
          {analysisResults ? (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Suggestions</h3>
              {analysisResults.suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    suggestion.severity === 'warning'
                      ? 'bg-yellow-50 border-yellow-400'
                      : suggestion.severity === 'error'
                      ? 'bg-red-50 border-red-400'
                      : 'bg-blue-50 border-blue-400'
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      {suggestion.severity === 'warning' ? (
                        <AlertCircle className="h-5 w-5 text-yellow-400" />
                      ) : suggestion.severity === 'error' ? (
                        <AlertCircle className="h-5 w-5 text-red-400" />
                      ) : (
                        <Info className="h-5 w-5 text-blue-400" />
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium capitalize text-gray-900">
                        {suggestion.type}
                      </p>
                      <p className="text-sm text-gray-700">{suggestion.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Lightbulb className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Suggestions Available</h3>
              <p className="text-gray-600">Run code analysis to get optimization suggestions.</p>
            </div>
          )}
        </div>
      )}
      </div>
    </div>
  )
}

export default Analyzer
