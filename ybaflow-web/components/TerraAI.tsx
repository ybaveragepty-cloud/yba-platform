'use client';

export default function TerraAI() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        {/* Animated Neural Connections */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" style={{
                animationDelay: `${Math.random() * 3000}ms`
              }} />
            </div>
          ))}
        </div>

        {/* AI Processing Nodes */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="absolute animate-pulse" style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${i * 400}ms`
            }}>
              <div className="w-1 h-1 bg-blue-400 rounded-full shadow-sm shadow-blue-400/50" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-8">
            <span className="text-blue-400 font-medium tracking-wide">THE INTELLIGENCE BEHIND TERRA</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text">
              Terra AI
            </span>
          </h2>

          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            The decision-making engine that manages and optimizes biological systems. 
            <span className="text-blue-400"> Intelligent. Precise. Adaptive.</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: AI Visualization */}
          <div className="relative">
            {/* Central AI Core */}
            <div className="relative h-96 flex items-center justify-center">
              {/* Brain/Core Visualization */}
              <div className="relative">
                {/* Central Processing Unit */}
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full animate-ping" />
                  </div>
                </div>

                {/* Data Processing Rings */}
                {[0, 1, 2].map((ring) => (
                  <div key={ring} className={`absolute inset-0 rounded-full border-2 animate-spin`} style={{
                    borderColor: ring === 0 ? 'rgba(59, 130, 246, 0.3)' : ring === 1 ? 'rgba(147, 51, 234, 0.2)' : 'rgba(34, 197, 94, 0.1)',
                    width: `${160 + ring * 40}px`,
                    height: `${160 + ring * 40}px`,
                    left: `${-20 - ring * 20}px`,
                    top: `${-20 - ring * 20}px`,
                    animationDuration: `${6 + ring * 3}s`,
                    animationDirection: ring % 2 ? 'reverse' : 'normal'
                  }}>
                    {/* Data Points on Ring */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
                  </div>
                ))}

                {/* Sensor Input Lines */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div key={i} className="absolute" style={{
                    transform: `rotate(${i * 45}deg)`,
                    transformOrigin: 'center'
                  }}>
                    <div className="w-40 h-px bg-gradient-to-r from-blue-400/60 via-purple-400/40 to-transparent animate-pulse" style={{
                      animationDelay: `${i * 200}ms`
                    }} />
                    
                    {/* Sensor Node */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
                      <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg shadow-blue-400/50 animate-pulse" style={{
                        animationDelay: `${i * 200 + 600}ms`
                      }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Right: Capabilities */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-200 leading-relaxed">
                Terra AI continuously processes environmental data, biological signals, and system performance 
                to make <span className="text-blue-400 font-medium">intelligent decisions</span> in real-time.
              </p>
            </div>

            {/* AI Capabilities */}
            <div className="space-y-6">
              {[
                {
                  title: 'Environmental Monitoring',
                  desc: 'Processes thousands of data points from temperature, humidity, pH, nutrients, and light sensors',
                  icon: '🌡️',
                  color: 'blue'
                },
                {
                  title: 'Autonomous Adjustment',
                  desc: 'Automatically optimizes growing conditions without human intervention',
                  icon: '⚙️',
                  color: 'green'
                },
                {
                  title: 'Yield Optimization',
                  desc: 'Maximizes production efficiency while minimizing resource consumption',
                  icon: '📈',
                  color: 'purple'
                },
                {
                  title: 'Predictive Intelligence',
                  desc: 'Learns patterns and anticipates system needs before problems occur',
                  icon: '🧠',
                  color: 'blue'
                }
              ].map((capability, i) => (
                <div key={i} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 transition-all duration-500 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl filter group-hover:drop-shadow-lg group-hover:drop-shadow-blue-400/50 transition-all">
                        {capability.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                          {capability.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {capability.desc}
                        </p>
                      </div>
                    </div>
                    
                    {/* Processing Indicator */}
                    <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((dot) => (
                          <div key={dot} className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{
                            animationDelay: `${dot * 200}ms`
                          }} />
                        ))}
                      </div>
                      <span className="text-xs text-blue-400/80">Processing...</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real-time Data Stream */}
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">Live Decision Engine</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Environmental Inputs', value: '1,247', unit: 'sensors/min', color: 'blue' },
              { label: 'Decisions Made', value: '847', unit: 'actions/min', color: 'green' },
              { label: 'Efficiency Gain', value: '23.4%', unit: 'vs manual', color: 'purple' }
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-sm text-gray-400 mb-1">{metric.unit}</div>
                <div className="text-xs text-blue-400 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}