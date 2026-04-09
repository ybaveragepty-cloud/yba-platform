'use client';

export default function PremiumHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 162, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 162, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Large Orbital Ring */}
          <div className="absolute -inset-96 rounded-full border border-blue-500/20 animate-spin-slow">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
          </div>
          
          {/* Medium Orbital Ring */}
          <div className="absolute -inset-64 rounded-full border border-green-500/30 animate-spin-reverse-slow">
            <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-green-400 rounded-full shadow-lg shadow-green-400/50" />
          </div>
          
          {/* Small Orbital Ring */}
          <div className="absolute -inset-40 rounded-full border border-blue-400/40 animate-spin">
            <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* YBA Flow Logo Area */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              {/* Logo Background Glow */}
              <div className="absolute -inset-8 bg-blue-500/10 rounded-full blur-2xl" />
              
              {/* YBA Text */}
              <div className="relative text-6xl md:text-8xl font-bold tracking-wider">
                <span className="text-transparent bg-gradient-to-b from-gray-200 to-gray-400 bg-clip-text drop-shadow-2xl">Y</span>
                <span className="text-transparent bg-gradient-to-b from-green-400 to-green-600 bg-clip-text drop-shadow-2xl">B</span>
                <span className="text-transparent bg-gradient-to-b from-gray-200 to-gray-400 bg-clip-text drop-shadow-2xl">A</span>
              </div>
              
              {/* Flow Text */}
              <div className="text-4xl md:text-6xl font-light tracking-widest mt-2">
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">FLOW</span>
              </div>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="text-gray-400 text-lg md:text-xl font-light tracking-wider">
            AUTOMATE. OPTIMIZE. ACCELERATE.
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="block text-transparent bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text">
            Control the Flow of
          </span>
          <span className="block text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text mt-2">
            Intelligent Systems
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          YBA Flow is the automation and intelligence platform powering 
          next-generation systems across industries. 
          <span className="text-blue-400"> Connect. Control. Scale.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-green-400 to-green-500 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/25">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400 to-green-500 blur opacity-75 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Explore Terra</span>
          </button>
          
          <button className="group relative px-8 py-4 text-lg font-semibold text-blue-400 border-2 border-blue-400/50 rounded-lg transition-all duration-300 hover:border-blue-400 hover:bg-blue-400/10 hover:shadow-xl hover:shadow-blue-400/25">
            <div className="absolute inset-0 rounded-lg border-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            <span className="relative">Get Early Access</span>
          </button>
        </div>

        {/* Flowing Energy Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-48 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-40 animate-pulse delay-500" />
          <div className="absolute bottom-1/4 left-1/3 w-32 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30 animate-pulse delay-1000" />
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}