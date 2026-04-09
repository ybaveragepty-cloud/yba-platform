'use client';

export default function TerraIntroduction() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Circuit Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 10 20 M 0 10 L 20 10" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <circle cx="10" cy="10" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
        
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-400/20 to-blue-400/20 backdrop-blur-sm border border-green-400/30 rounded-full mb-8">
            <span className="text-green-400 font-medium tracking-wide">POWERED BY FLOW. BUILT FOR THE REAL WORLD.</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="block text-transparent bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text">
                Introducing
              </span>
              <span className="block text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text mt-2">
                YBA Terra
              </span>
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-2xl text-gray-200 leading-relaxed">
                YBA Terra is a <span className="text-green-400 font-medium">next-generation agricultural system</span> powered by YBA Flow.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Not traditional farming. Controlled biological systems. 
                Precision environments. Data-driven growth optimization. 
                The future of scalable food production.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                'Intelligent Farming Systems',
                'Controlled Environments',
                'Data-Driven Growth',
                'Scalable Food Production'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full shadow-sm shadow-green-400/50" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group relative px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-green-400 to-green-500 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/25">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400 to-green-500 blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Learn More About Terra</span>
            </button>
          </div>

          {/* Right: Controlled Environment Visualization */}
          <div className="relative">
            <div className="relative h-96 bg-gradient-to-b from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden">
              {/* Environment Grid */}
              <div className="absolute inset-4">
                <div className="grid grid-cols-4 gap-2 h-full">
                  {Array.from({ length: 16 }, (_, i) => (
                    <div key={i} className="relative">
                      {/* Growing Module */}
                      <div className="h-full bg-gradient-to-t from-green-900/30 to-green-800/10 border border-green-400/20 rounded-lg relative overflow-hidden">
                        {/* Growth Animation */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-400/40 to-transparent animate-pulse" style={{
                          height: `${20 + (i % 5) * 15}%`,
                          animationDelay: `${i * 100}ms`
                        }} />
                        
                        {/* Data Point */}
                        <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full shadow-sm shadow-blue-400/50 animate-pulse" style={{
                          animationDelay: `${i * 150}ms`
                        }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Environmental Controls */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-blue-400">pH 6.2</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400">24°C</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    <span className="text-yellow-400">85% RH</span>
                  </div>
                </div>

                {/* System Status */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-green-900/30 border border-green-400/30 rounded-lg px-3 py-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-green-400">System Optimal</span>
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
                        <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                        <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-green-400/5 to-transparent" />
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}