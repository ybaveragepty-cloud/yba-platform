'use client';

export default function FlowExplanation() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 162, 255, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-gray-100 to-blue-400 bg-clip-text">
              What is YBA Flow
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-8" />
        </div>

        {/* Main Explanation */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-light">
              YBA Flow is the <span className="text-blue-400 font-medium">automation and intelligence layer</span> of the YBA ecosystem.
            </p>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              It connects systems, processes, and environments into a single intelligent flow. 
              The brain that orchestrates, optimizes, and scales operations across any industry.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {[
                { title: 'Automation Engine', desc: 'Intelligent workflow orchestration', icon: '⚡' },
                { title: 'System Orchestration', desc: 'Unified control layer', icon: '🔄' },
                { title: 'Real-time Control', desc: 'Instant response and adaptation', icon: '⚡' },
                { title: 'Scalable Infrastructure', desc: 'Built for exponential growth', icon: '📈' }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10">
                    <div className="text-2xl mb-3 filter group-hover:drop-shadow-lg group-hover:drop-shadow-blue-400/50 transition-all">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Abstract System Diagram */}
          <div className="relative">
            <div className="relative h-96 flex items-center justify-center">
              {/* Central Hub */}
              <div className="relative z-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-400/50">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full animate-pulse" />
              </div>

              {/* Connection Lines */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="absolute z-10" style={{
                  transform: `rotate(${i * 60}deg)`,
                  transformOrigin: 'center'
                }}>
                  <div className="w-32 h-px bg-gradient-to-r from-blue-400/80 to-transparent origin-left animate-pulse" style={{
                    animationDelay: `${i * 200}ms`
                  }} />
                  
                  {/* Endpoint Nodes */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50 animate-pulse" style={{
                      animationDelay: `${i * 200 + 400}ms`
                    }} />
                  </div>
                </div>
              ))}

              {/* Orbital Ring */}
              <div className="absolute inset-0 border-2 border-blue-400/20 rounded-full animate-spin-slow" />
              
              {/* Data Flow Particles */}
              {[0, 1, 2].map((i) => (
                <div key={i} className="absolute inset-0">
                  <div className="w-full h-full rounded-full border border-green-400/30 animate-spin" style={{
                    animationDuration: `${8 + i * 2}s`,
                    animationDirection: i % 2 ? 'reverse' : 'normal'
                  }}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-green-400 rounded-full shadow-sm shadow-green-400/50" />
                  </div>
                </div>
              ))}
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}