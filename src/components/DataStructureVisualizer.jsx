import React, { useState } from 'react'
import { 
  Grid, 
  List, 
  TreePine, 
  Network, 
  Layers,
  ChevronRight,
  ChevronDown
} from 'lucide-react'

const DataStructureVisualizer = ({ structures }) => {
  const [selectedStructure, setSelectedStructure] = useState(0)
  const [expandedSections, setExpandedSections] = useState({ details: true, examples: true })

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const getStructureIcon = (name) => {
    const iconMap = {
      'Array': <Grid className="h-6 w-6" />,
      'List': <List className="h-6 w-6" />,
      'Tree': <TreePine className="h-6 w-6" />,
      'Graph': <Network className="h-6 w-6" />,
      'Stack': <Layers className="h-6 w-6" />,
      'Queue': <Layers className="h-6 w-6" />,
      'Variable': <Grid className="h-6 w-6" />
    }
    return iconMap[name] || <Grid className="h-6 w-6" />
  }

  const getStructureDescription = (name) => {
    const descriptions = {
      'Array': 'A collection of elements stored in contiguous memory locations, allowing constant-time access by index.',
      'List': 'A linear data structure where elements are stored in nodes, each containing data and a reference to the next node.',
      'Tree': 'A hierarchical data structure with nodes connected by edges, with one root node and no cycles.',
      'Graph': 'A collection of vertices connected by edges, which can be directed or undirected.',
      'Stack': 'A Last-In-First-Out (LIFO) data structure where elements are added and removed from the same end.',
      'Queue': 'A First-In-First-Out (FIFO) data structure where elements are added at the rear and removed from the front.',
      'Variable': 'A storage location with an associated name that contains data.'
    }
    return descriptions[name] || 'A data structure used to organize and store data.'
  }

  const getStructureOperations = (name) => {
    const operations = {
      'Array': ['Access: O(1)', 'Search: O(n)', 'Insertion: O(n)', 'Deletion: O(n)'],
      'List': ['Access: O(n)', 'Search: O(n)', 'Insertion: O(1)', 'Deletion: O(1)'],
      'Tree': ['Search: O(log n)', 'Insertion: O(log n)', 'Deletion: O(log n)', 'Traversal: O(n)'],
      'Graph': ['Search: O(V + E)', 'Insertion: O(1)', 'Deletion: O(V + E)', 'Traversal: O(V + E)'],
      'Stack': ['Push: O(1)', 'Pop: O(1)', 'Peek: O(1)', 'IsEmpty: O(1)'],
      'Queue': ['Enqueue: O(1)', 'Dequeue: O(1)', 'Front: O(1)', 'IsEmpty: O(1)'],
      'Variable': ['Read: O(1)', 'Write: O(1)', 'Declaration: O(1)', 'Assignment: O(1)']
    }
    return operations[name] || ['Operation: O(1)']
  }

  const renderArrayVisualization = () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        {[1, 3, 5, 7, 9, 11, 13, 15].map((value, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 border-2 border-blue-300 flex items-center justify-center font-mono text-sm font-semibold text-blue-800 rounded">
              {value}
            </div>
            <div className="text-xs text-gray-500 mt-1">[{index}]</div>
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-600">
        Example: Sorted array used in binary search algorithm
      </div>
    </div>
  )

  const renderVariableVisualization = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { name: 'left', value: '0', type: 'number' },
          { name: 'right', value: '7', type: 'number' },
          { name: 'mid', value: '3', type: 'number' },
          { name: 'target', value: '7', type: 'number' },
          { name: 'arr', value: '[...]', type: 'array' },
          { name: 'result', value: '3', type: 'number' }
        ].map((variable, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-lg border">
            <div className="text-sm font-medium text-gray-700">{variable.name}</div>
            <div className="text-lg font-mono text-gray-900">{variable.value}</div>
            <div className="text-xs text-gray-500">{variable.type}</div>
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-600">
        Variables used in the binary search implementation
      </div>
    </div>
  )

  const renderVisualization = (structureName) => {
    switch (structureName) {
      case 'Array':
        return renderArrayVisualization()
      case 'Variable':
        return renderVariableVisualization()
      default:
        return (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-2">
              {getStructureIcon(structureName)}
            </div>
            <p className="text-gray-600">Visualization for {structureName} coming soon!</p>
          </div>
        )
    }
  }

  const currentStructure = structures[selectedStructure]

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Data Structure Visualization</h3>
        
        {/* Structure Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {structures.map((structure, index) => (
            <button
              key={index}
              onClick={() => setSelectedStructure(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                selectedStructure === index
                  ? 'bg-primary-50 border-primary-300 text-primary-700'
                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className={selectedStructure === index ? 'text-primary-600' : 'text-gray-500'}>
                {getStructureIcon(structure.name)}
              </div>
              <span className="font-medium">{structure.name}</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                {structure.occurrences}
              </span>
            </button>
          ))}
        </div>

        {/* Visualization Area */}
        <div className="bg-gray-50 p-6 rounded-lg">
          {renderVisualization(currentStructure.name)}
        </div>
      </div>

      {/* Structure Details */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="space-y-4">
          {/* Description Section */}
          <div>
            <button
              onClick={() => toggleSection('details')}
              className="flex items-center justify-between w-full text-left"
            >
              <h4 className="text-lg font-semibold text-gray-900">
                {currentStructure.name} Details
              </h4>
              {expandedSections.details ? (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {expandedSections.details && (
              <div className="mt-4 space-y-4">
                <p className="text-gray-600">
                  {getStructureDescription(currentStructure.name)}
                </p>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Time Complexities</h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {getStructureOperations(currentStructure.name).map((operation, index) => (
                      <div key={index} className="bg-gray-50 p-2 rounded text-sm">
                        {operation}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Usage in Code Section */}
          <div className="border-t pt-4">
            <button
              onClick={() => toggleSection('examples')}
              className="flex items-center justify-between w-full text-left"
            >
              <h4 className="text-lg font-semibold text-gray-900">
                Usage in Your Code
              </h4>
              {expandedSections.examples ? (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {expandedSections.examples && (
              <div className="mt-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">
                    Found on lines: {currentStructure.lines.join(', ')}
                  </div>
                  <div className="text-sm text-gray-600">
                    Occurrences: {currentStructure.occurrences}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataStructureVisualizer
