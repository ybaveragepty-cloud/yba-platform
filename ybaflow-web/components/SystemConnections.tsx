'use client';

export default function SystemConnections() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black to-gray-900">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text">
              How It All
            </span>
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mt-2">
              Connects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A unified ecosystem where each component amplifies the others
          </p>
        </div>

        {/* Connection Diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-16 items-center">
              {/* Flow */}
              <div className="relative text-center">
                <div className="relative z-20 mx-auto w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-400/50 transform hover:scale-105 transition-all duration-300">
                  <div className="text-white text-2xl font-bold">FLOW</div>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mt-6 mb-3">YBA Flow</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Automation platform and intelligence layer
                </p>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-blue-400 font-medium text-sm">
                  Brain
                </div>

                {/* Flow to Terra Connection */}
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                  <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-green-400 relative">
                    {/* Animated Flow Particles */}
                    <div className="absolute inset-0">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{
                        left: '-4px',
                        top: '-4px'
                      }} />
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse absolute" style={{
                        right: '-2px',
                        top: '-2px',
                        animationDelay: '500ms'
                      }} />
                    </div>
                    {/* Arrow */}
                    <div className="absolute -right-2 -top-1 w-2 h-2 border-r-2 border-t-2 border-green-400 transform rotate-45" />
                  </div>
                  <div className="text-xs text-gray-400 mt-2 whitespace-nowrap">powers</div>
                </div>
              </div>

              {/* Terra */}
              <div className="relative text-center">
                <div className="relative z-20 mx-auto w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-400/50 transform hover:scale-105 transition-all duration-300">
                  <div className="text-white text-xl font-bold">TERRA</div>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mt-6 mb-3">YBA Terra</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Physical agricultural systems and environments
                </p>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-green-400 font-medium text-sm">
                  Body
                </div>

                {/* Terra to AI Connection */}
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                  <div className="w-16 h-px bg-gradient-to-r from-green-400 to-purple-400 relative">
                    {/* Animated Flow Particles */}
                    <div className="absolute inset-0">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" style={{
                        left: '-4px',
                        top: '-4px'
                      }} />
                      <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse absolute" style={{
                        right: '-2px',
                        top: '-2px',
                        animationDelay: '300ms'
                      }} />
                    </div>
                    {/* Arrow */}
                    <div className="absolute -right-2 -top-1 w-2 h-2 border-r-2 border-t-2 border-purple-400 transform rotate-45" />
                  </div>
                  <div className="text-xs text-gray-400 mt-2 whitespace-nowrap">controlled by</div>
                </div>
              </div>

              {/* Terra AI */}
              <div className="relative text-center">
                <div className="relative z-20 mx-auto w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-400/50 transform hover:scale-105 transition-all duration-300">
                  <div className="text-white text-lg font-bold">AI</div>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mt-6 mb-3">Terra AI</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Decision-making and optimization engine
                </p>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-purple-400 font-medium text-sm">
                  Mind
                </div>
              </div>
            </div>

            {/* Feedback Loop */}
            <div className="relative mt-16">
              <div className="absolute top-8 left-1/4 right-1/4 h-px bg-gradient-to-r from-purple-400/50 via-blue-400/50 to-blue-400/50" />
              <div className="absolute top-8 left-1/4 w-2 h-2 border-l-2 border-b-2 border-purple-400 transform -rotate-45" />
              
              <div className="text-center pt-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-400/20 to-blue-400/20 backdrop-blur-sm border border-purple-400/30 rounded-full">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-purple-400 text-sm font-medium">Continuous Feedback Loop</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-12">
            {[
              { name: 'YBA Flow', component: 'FLOW', color: 'blue', desc: 'Automation platform and intelligence layer', label: 'Brain' },
              { name: 'YBA Terra', component: 'TERRA', color: 'green', desc: 'Physical agricultural systems and environments', label: 'Body' },
              { name: 'Terra AI', component: 'AI', color: 'purple', desc: 'Decision-making and optimization engine', label: 'Mind' }
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className={`mx-auto w-24 h-24 bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 rounded-xl flex items-center justify-center shadow-xl shadow-${item.color}-400/50`}>
                  <div className="text-white text-lg font-bold">{item.component}</div>
                </div>
                <h3 className={`text-xl font-bold text-${item.color}-400 mt-4 mb-2`}>{item.name}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
                <div className={`mt-2 text-${item.color}-400 font-medium text-xs`}>{item.label}</div>
                
                {i < 2 && (
                  <div className="flex justify-center mt-6">
                    <div className={`w-px h-8 bg-gradient-to-b from-${item.color}-400 to-${i === 0 ? 'green' : 'purple'}-400`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* System Benefits */}
        <div className="mt-20 bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-center text-white mb-8">Unified Ecosystem Benefits</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Seamless Integration',
                desc: 'All components work as one unified system, eliminating silos and inefficiencies',
                icon: '🔄'
              },
              {
                title: 'Exponential Intelligence',
                desc: 'AI learns from Flow data and Terra performance, becoming smarter over time',
                icon: '🧠'
              },
              {
                title: 'Scalable Foundation',
                desc: 'Platform architecture supports unlimited expansion across industries and use cases',
                icon: '📈'
              }
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">{benefit.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}