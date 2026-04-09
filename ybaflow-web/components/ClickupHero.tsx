'use client';

export default function ClickupHero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 60 60" fill="none">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center">
                {/* YBA Logo */}
                <div className="text-4xl font-bold tracking-tight">
                  <span className="text-gray-700">Y</span>
                  <span className="text-green-600">B</span>
                  <span className="text-gray-700">A</span>
                </div>
                <div className="ml-2 text-2xl font-light text-blue-600 tracking-wide">
                  Flow
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Automation systems for{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                real operations
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              YBA Flow builds practical automation, dashboards, and AI-assisted 
              workflows for operational businesses that need systems that actually work.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/40 transform hover:-translate-y-0.5 transition-all duration-200">
                Start a Project
                <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transform hover:-translate-y-0.5 transition-all duration-200">
                Explore YBA Terra
                <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Operational Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Scale Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span>Production Grade</span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            {/* Main Dashboard Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl shadow-gray-900/10 overflow-hidden border border-gray-200">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-600">YBA Terra Dashboard</div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">98%</div>
                    <div className="text-sm text-green-600">System Health</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">24/7</div>
                    <div className="text-sm text-blue-600">Monitoring</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gray-700">12</div>
                    <div className="text-sm text-gray-600">Active Systems</div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-end gap-2 h-24">
                    {[65, 78, 82, 71, 85, 92, 88, 95, 89, 94, 91, 96].map((height, i) => (
                      <div key={i} className="bg-gradient-to-t from-green-500 to-green-400 rounded-t flex-1 transition-all duration-1000 ease-out" style={{
                        height: `${height}%`,
                        animationDelay: `${i * 100}ms`
                      }}></div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Production Efficiency Over Time</div>
                </div>

                {/* System Status */}
                <div className="space-y-3">
                  {[
                    { name: 'Hydroponics System A', status: 'Optimal', color: 'green' },
                    { name: 'Aquaculture Tank 1-4', status: 'Running', color: 'blue' },
                    { name: 'Environmental Controls', status: 'Active', color: 'green' }
                  ].map((system, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 bg-${system.color}-500 rounded-full`}></div>
                        <span className="font-medium text-gray-700">{system.name}</span>
                      </div>
                      <span className={`text-sm text-${system.color}-600 font-medium`}>{system.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl shadow-gray-900/10 border border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Live Updates</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl shadow-gray-900/10 border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">AI Optimization</div>
              <div className="text-lg font-bold text-blue-600">+23% Efficiency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}