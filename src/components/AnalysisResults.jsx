import React from 'react'
import { 
  Database, 
  Clock, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle,
  Info 
} from 'lucide-react'

const AnalysisResults = ({ results }) => {
  const { dataStructures, complexity, codeQuality } = results

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-100'
    if (score >= 60) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Time Complexity */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 ml-3">Time Complexity</h3>
          </div>
          <div className="text-2xl font-bold text-blue-600 mb-2">{complexity.time}</div>
          <p className="text-sm text-gray-600">{complexity.explanation}</p>
        </div>

        {/* Space Complexity */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 ml-3">Space Complexity</h3>
          </div>
          <div className="text-2xl font-bold text-green-600 mb-2">{complexity.space}</div>
          <p className="text-sm text-gray-600">Memory usage efficiency</p>
        </div>

        {/* Code Quality Score */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 ml-3">Quality Score</h3>
          </div>
          <div className="text-2xl font-bold text-purple-600 mb-2">{codeQuality.score}/100</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${codeQuality.score}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Data Structures Detected */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Database className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 ml-3">Data Structures Detected</h3>
        </div>
        
        <div className="space-y-4">
          {dataStructures.map((structure, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-medium text-gray-900">{structure.name}</h4>
                  <p className="text-sm text-gray-600">
                    Found on lines: {structure.lines.join(', ')}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-indigo-600">
                  {structure.occurrences}
                </div>
                <div className="text-xs text-gray-500">occurrences</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Code Quality Metrics */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quality Metrics</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Readability</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(codeQuality.metrics.readability)}`}>
                {codeQuality.metrics.readability}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${codeQuality.metrics.readability}%` }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Efficiency</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(codeQuality.metrics.efficiency)}`}>
                {codeQuality.metrics.efficiency}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${codeQuality.metrics.efficiency}%` }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Maintainability</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(codeQuality.metrics.maintainability)}`}>
                {codeQuality.metrics.maintainability}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${codeQuality.metrics.maintainability}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Complexity Analysis Details */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Complexity Analysis Details</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
            <div>
              <h4 className="font-medium text-gray-900">Algorithm Efficiency</h4>
              <p className="text-sm text-gray-600">
                Your algorithm demonstrates optimal time complexity for the binary search operation. 
                The logarithmic time complexity ensures efficient performance even for large datasets.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-3" />
            <div>
              <h4 className="font-medium text-gray-900">Memory Usage</h4>
              <p className="text-sm text-gray-600">
                Excellent space complexity with O(1) constant space usage. The algorithm uses only 
                a few variables regardless of input size.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3" />
            <div>
              <h4 className="font-medium text-gray-900">Potential Improvements</h4>
              <p className="text-sm text-gray-600">
                Consider adding input validation and error handling to make the code more robust 
                for production use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalysisResults
