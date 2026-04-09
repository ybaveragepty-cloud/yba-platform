'use client';

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 162, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 162, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>

        {/* Flowing Energy Streams */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute" style={{
              left: `${i * 20}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}>
              <div className="w-96 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse" style={{
                animationDelay: `${i * 800}ms`,
                animationDuration: `${3000 + Math.random() * 2000}ms`
              }} />
            </div>
          ))}
        </div>

        {/* Orbital Elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-96 border border-blue-500/10 rounded-full animate-spin-slow" />
            <div className="absolute -inset-64 border border-green-500/10 rounded-full animate-spin-reverse-slow" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Brand Callout */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-400/20 to-green-400/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
            <span className="text-blue-400 font-bold tracking-wider text-lg">WHY BE AVERAGE</span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
          <span className="block text-transparent bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text">
            Don't Build
          </span>
          <span className="block text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text mt-4">
            Average Systems
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
          Join the next generation of <span className="text-blue-400 font-medium">intelligent platforms</span>. 
          Build systems that think, adapt, and scale beyond limits.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
          <button className="group relative px-12 py-6 text-xl font-bold text-black bg-gradient-to-r from-green-400 to-green-500 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/30 transform-gpu">
            {/* Button Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-green-500 blur opacity-75 group-hover:opacity-100 transition-opacity" />
            
            {/* Button Content */}
            <span className="relative flex items-center gap-3">
              Get Early Access
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>

            {/* Particle Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="absolute animate-ping" style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 200}ms`
                }}>
                  <div className="w-1 h-1 bg-white/60 rounded-full" />
                </div>
              ))}
            </div>
          </button>
          
          <button className="group relative px-12 py-6 text-xl font-bold text-blue-400 border-2 border-blue-400/50 rounded-2xl transition-all duration-300 hover:border-blue-400 hover:bg-blue-400/10 hover:shadow-2xl hover:shadow-blue-400/20 backdrop-blur-sm">
            {/* Button Border Glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            
            <span className="relative flex items-center gap-3">
              Join the Ecosystem
              <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>

        {/* Final Message */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Ready to Transcend Average?</h3>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              YBA Flow is not just a platform—it's the foundation for the next evolution of intelligent systems. 
              Whether you're building agricultural operations, real estate platforms, healthcare solutions, 
              or entirely new categories, Flow gives you the power to create something extraordinary.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { metric: '10x', label: 'Faster Deployment', desc: 'vs custom solutions' },
                { metric: '99.9%', label: 'System Reliability', desc: 'enterprise-grade' },
                { metric: '∞', label: 'Scale Potential', desc: 'unlimited growth' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.metric}</div>
                  <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Brand Statement */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="text-center">
            <div className="text-gray-400 font-light text-lg mb-4">
              The Future is Not Average
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="text-3xl font-bold">
                <span className="text-transparent bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text">Y</span>
                <span className="text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text">B</span>
                <span className="text-transparent bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text">A</span>
              </div>
              <div className="text-xl font-light text-blue-400 tracking-wider">FLOW</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animation Keyframes */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </section>
  );
}