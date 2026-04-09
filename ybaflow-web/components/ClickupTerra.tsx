'use client';

export default function ClickupTerra() {
  const terraModules = [
    {
      name: 'Hydroponics',
      description: 'Automated nutrient delivery and environmental control',
      status: 'Active',
      efficiency: '96%',
      color: 'green',
      icon: '🌿'
    },
    {
      name: 'Aquaculture',
      description: 'Fish farming with intelligent water management',
      status: 'Optimal',
      efficiency: '94%',
      color: 'blue',
      icon: '🐟'
    },
    {
      name: 'Climate Control',
      description: 'Precision environmental monitoring and adjustment',
      status: 'Running',
      efficiency: '98%',
      color: 'purple',
      icon: '🌡️'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Now Available: YBA Terra
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              The first{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                intelligent farming
              </span>{' '}
              system powered by Flow
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              YBA Terra demonstrates the power of Flow in real-world operations. 
              Complete agricultural automation with AI-driven optimization, 
              real-time monitoring, and predictive management.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              {[
                { title: 'Automated Operations', desc: '24/7 system management with minimal human intervention' },
                { title: 'AI Optimization', desc: 'Continuous learning and improvement of growing conditions' },
                { title: 'Scalable Design', desc: 'From small operations to commercial-scale deployments' }
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/40 transform hover:-translate-y-0.5 transition-all duration-200">
              Explore Terra System
            </button>
          </div>

          {/* Right: Terra Dashboard */}
          <div className="relative">
            {/* Main Terra Interface */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900">YBA Terra Control Center</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-700 font-medium">All Systems Optimal</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* System Modules */}
                <div className="space-y-4 mb-6">
                  {terraModules.map((module, i) => (
                    <div key={i} className={`bg-gradient-to-r from-${module.color}-50 to-${module.color}-100 rounded-xl p-4 border border-${module.color}-200`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{module.icon}</span>
                          <div>
                            <h4 className="font-semibold text-gray-900">{module.name}</h4>
                            <p className="text-sm text-gray-600">{module.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold text-${module.color}-700`}>{module.efficiency}</div>
                          <div className={`text-sm text-${module.color}-600`}>{module.status}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Live Metrics */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-4">Live Production Data</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-700">2.8kg</div>
                      <div className="text-sm text-gray-600">Daily Yield</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700">6.2</div>
                      <div className="text-sm text-gray-600">pH Level</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-700">24°C</div>
                      <div className="text-sm text-gray-600">Temperature</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-700">85%</div>
                      <div className="text-sm text-gray-600">Humidity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Status Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">AI Optimizing</div>
                  <div className="text-xs text-gray-600">+15% efficiency</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">Next Harvest</div>
              <div className="font-bold text-gray-900">In 3 days</div>
              <div className="text-xs text-green-600">Projected: 45kg</div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Terra Performance Metrics
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '96%', label: 'Average Efficiency', sublabel: 'Across all systems' },
              { value: '24/7', label: 'Uptime', sublabel: 'Continuous monitoring' },
              { value: '15%', label: 'Cost Reduction', sublabel: 'vs traditional methods' },
              { value: '3x', label: 'Faster Growth', sublabel: 'Optimized conditions' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}