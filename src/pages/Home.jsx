import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { 
  Code, 
  Database, 
  BarChart3, 
  Lightbulb, 
  Users, 
  Star, 
  ArrowRight,
  CheckCircle,
  Clock,
  Globe,
  Zap,
  Eye
} from 'lucide-react'

const Home = () => {
  const { user } = useAuth()

  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Multi-Language Support",
      description: "Analyze code written in C++, Java, Python, and JavaScript with advanced parsing capabilities.",
      color: "bg-blue-50"
    },
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: "Data Structure Detection", 
      description: "Automatically detect arrays, linked lists, trees, graphs, stacks, queues, and more.",
      color: "bg-green-50"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Complexity Analysis",
      description: "Get time and space complexity estimates with detailed explanations and suggestions.",
      color: "bg-purple-50"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      title: "Visual Insights",
      description: "Beautiful charts and visualizations to understand your algorithm's performance.",
      color: "bg-orange-50"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "Smart Suggestions",
      description: "Receive intelligent recommendations for optimizing your code and data structures.",
      color: "bg-yellow-50"
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: "Learning Resources",
      description: "Access curated tutorials and educational content to master DSA concepts.",
      color: "bg-indigo-50"
    }
  ]

  const stats = [
    { number: "10,000+", label: "Code Analyses", icon: <Code className="h-6 w-6" /> },
    { number: "25+", label: "Data Structures", icon: <Database className="h-6 w-6" /> },
    { number: "2,500+", label: "Active Users", icon: <Users className="h-6 w-6" /> },
    { number: "98%", label: "Success Rate", icon: <Star className="h-6 w-6" /> }
  ]

  const benefits = [
    "Instant code analysis and feedback",
    "Learn while you code with explanations", 
    "Optimize algorithms for better performance",
    "Track your progress over time",
    "Access from anywhere, anytime"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-blue-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="animate-bounce-in mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 fade-in">
                🚀 Analyze Your Code 
                <span className="text-primary-600 block bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                  Like Never Before
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto fade-in">
              DSA Analyzer helps you understand your code better by detecting data structures, 
              analyzing complexity, and providing optimization suggestions with beautiful visualizations.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 fade-in">
              <Link
                to="/analyzer"
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center group"
              >
                <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Start Analyzing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/learn"
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-primary-300 transition-all duration-200 hover:shadow-md inline-flex items-center justify-center group"
              >
                <Eye className="mr-2 h-5 w-5" />
                Learn DSA
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Demo */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">✨ Try It Now</h3>
              <div className="text-left bg-gray-900 text-green-400 p-4 rounded-md font-mono text-sm mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">function</span>
                  <span className="text-blue-400 ml-1">binarySearch</span>
                  <span className="text-white">(arr, target) {'{'}</span>
                </div>
                <div className="ml-4 text-gray-300">// O(log n) time complexity</div>
                <div className="ml-4 text-white">return searchResult;</div>
                <div className="text-white">{'}'}</div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Time Complexity: <strong className="text-blue-600">O(log n)</strong></span>
                <span className="text-gray-600">Space: <strong className="text-green-600">O(1)</strong></span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Optimized</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
            <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-4">
                  <div className="text-primary-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Code Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to analyze, understand, and optimize your data structures and algorithms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get insights into your code in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Your Code",
                description: "Paste your code or upload files in C++, Java, Python, or JavaScript",
                icon: <Code className="h-8 w-8" />
              },
              {
                step: "02", 
                title: "AI Analysis",
                description: "Our advanced algorithms analyze your code for data structures and complexity",
                icon: <Zap className="h-8 w-8" />
              },
              {
                step: "03",
                title: "Get Insights",
                description: "Receive detailed reports with visualizations and optimization suggestions",
                icon: <BarChart3 className="h-8 w-8" />
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose DSA Analyzer?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of developers who trust DSA Analyzer to improve their coding skills 
                and write more efficient algorithms.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-white">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">Ready to start?</div>
                <p className="text-blue-100 mb-6">
                  Join our community and start analyzing your code today
                </p>
                {user ? (
                  <Link
                    to="/analyzer"
                    className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center w-full"
                  >
                    Go to Analyzer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                ) : (
                  <div className="space-y-3">
                    <Link
                      to="/register"
                      className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center w-full"
                    >
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link
                      to="/login"
                      className="bg-transparent text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center w-full border border-white/30"
                    >
                      Sign In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Analyzing Your Code Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take your coding skills to the next level with intelligent code analysis and optimization suggestions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/analyzer"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Try It Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/learn"
              className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-gray-600 transition-colors inline-flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
