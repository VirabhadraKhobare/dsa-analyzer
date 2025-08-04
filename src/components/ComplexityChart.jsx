import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const ComplexityChart = ({ data }) => {
  // Sample data for complexity visualization
  const timeComplexityData = {
    labels: ['1', '10', '100', '1,000', '10,000', '100,000', '1,000,000'],
    datasets: [
      {
        label: 'O(log n) - Your Algorithm',
        data: [0, 3.3, 6.6, 10, 13.3, 16.6, 20],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.1,
      },
      {
        label: 'O(n) - Linear Search',
        data: [1, 10, 100, 1000, 10000, 100000, 1000000],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.1,
      },
      {
        label: 'O(1) - Constant Time',
        data: [1, 1, 1, 1, 1, 1, 1],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.1,
      }
    ]
  }

  const spaceComplexityData = {
    labels: ['Variables', 'Arrays', 'Objects', 'Total Memory'],
    datasets: [
      {
        label: 'Memory Usage (bytes)',
        data: [24, 0, 0, 24],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(139, 92, 246, 0.8)',
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(245, 158, 11)',
          'rgb(139, 92, 246)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Time Complexity Comparison',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Input Size (n)'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Operations'
        },
        type: 'logarithmic',
      }
    }
  }

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Space Complexity Breakdown',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Memory (bytes)'
        }
      }
    }
  }

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Complexity Visualization</h3>
          <p className="text-gray-600">
            Compare your algorithm's performance with other common complexities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Time Complexity Chart */}
          <div>
            <Line 
              key="time-complexity-chart"
              data={timeComplexityData} 
              options={lineOptions}
            />
          </div>

          {/* Space Complexity Chart */}
          <div>
            <Bar 
              key="space-complexity-chart"
              data={spaceComplexityData} 
              options={barOptions}
            />
          </div>
        </div>
      </div>

      {/* Complexity Summary */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Complexity Summary</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Time Complexity: {data.time}</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Best Case:</span>
                <span className="font-medium">O(1)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Average Case:</span>
                <span className="font-medium">O(log n)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Worst Case:</span>
                <span className="font-medium">O(log n)</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Space Complexity: {data.space}</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Auxiliary Space:</span>
                <span className="font-medium">O(1)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Input Space:</span>
                <span className="font-medium">O(n)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Space:</span>
                <span className="font-medium">O(n)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComplexityChart
