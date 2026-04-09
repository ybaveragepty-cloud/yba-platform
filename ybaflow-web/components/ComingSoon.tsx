'use client';

export default function ComingSoon() {
  const futureProducts = [
    {
      name: 'YBA Systems',
      description: 'Infrastructure layer powering the ecosystem',
      icon: '⚡',
      gradient: 'from-gray-400 to-gray-600',
      shadowColor: 'gray'
    },
    {
      name: 'YBA Realty',
      description: 'Intelligent asset & property systems',
      icon: '🏗️',
      gradient: 'from-amber-400 to-orange-600',
      shadowColor: 'amber'
    },
    {
      name: 'YBA Med',
      description: 'Next-generation health systems',
      icon: '🏥',
      gradient: 'from-red-400 to-pink-600',
      shadowColor: 'red'
    },
    {
      name: 'YBA Agency',
      description: 'Strategic execution & optimization',
      icon: '🎯',
      gradient: 'from-indigo-400 to-purple-600',
      shadowColor: 'indigo'
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-900 to-black">
      {/* Constellation Background */}
      <div className="absolute inset-0">
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <div key={i} className="absolute animate-pulse" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3000}ms`,
            animationDuration: `${2000 + Math.random() * 2000}ms`
          }}>
            <div className="w-px h-px bg-white rounded-full" />
          </div>
        ))}

        {/* Larger Bright Stars */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute animate-pulse" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4000}ms`
          }}>
            <div className="w-0.5 h-0.5 bg-blue-400 rounded-full shadow-sm shadow-blue-400/50" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-700/30 to-gray-800/30 backdrop-blur-sm border border-gray-600/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse mr-3" />
            <span className="text-gray-400 font-medium tracking-wide">BUILT ON FLOW. EXPANDING EVERYWHERE.</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-gradient-to-r from-gray-200 to-blue-400 bg-clip-text">
              Coming Soon
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The YBA ecosystem is expanding. Each new platform amplifies the power of Flow.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {futureProducts.map((product, i) => (
            <div key={i} className="group relative">
              {/* Card */}
              <div className="relative h-64 bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gray-600/50 hover:shadow-2xl hover:shadow-gray-400/10">
                {/* Locked Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
                
                {/* Content */}
                <div className="relative z-20 p-6 h-full flex flex-col justify-between">
                  <div>
                    {/* Icon */}
                    <div className="text-4xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                      {product.icon}
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-2xl font-bold text-gray-300 group-hover:text-white transition-colors mb-3">
                      {product.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {product.description}
                    </p>
                  </div>

                  {/* Coming Soon Badge */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-700/50 border border-gray-600/30 rounded-full">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
                      <span className="text-gray-400 text-xs font-medium">Coming Soon</span>
                    </div>
                    
                    {/* Lock Icon */}
                    <div className="text-gray-500 group-hover:text-gray-400 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-t from-${product.shadowColor}-500/10 to-transparent`} />
                </div>

                {/* Scanning Line Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>

              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-${product.shadowColor}-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
            </div>
          ))}
        </div>

        {/* System Architecture Preview */}
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-center text-white mb-8">The Complete Ecosystem</h3>
          
          <div className="flex flex-col items-center space-y-6">
            {/* Flow Foundation */}
            <div className="flex items-center gap-4">
              <div className="w-32 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-400/30">
                <span className="text-white font-semibold text-sm">YBA Flow</span>
              </div>
              <span className="text-gray-400 text-sm">Platform Foundation</span>
            </div>

            {/* Branching Lines */}
            <div className="relative w-px h-8 bg-gradient-to-b from-blue-400 to-gray-600">
              <div className="absolute top-4 left-0 w-24 h-px bg-gray-600" />
              <div className="absolute top-4 left-0 w-24 h-px bg-gray-600 transform rotate-45 origin-left" />
              <div className="absolute top-4 left-0 w-24 h-px bg-gray-600 transform -rotate-45 origin-left" />
            </div>

            {/* Products */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="w-24 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-400/30">
                <span className="text-white font-semibold text-xs">Terra</span>
              </div>
              {futureProducts.map((product, i) => (
                <div key={i} className={`w-24 h-8 bg-gradient-to-r ${product.gradient} opacity-40 rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-semibold text-xs">{product.name.split(' ')[1]}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 text-sm max-w-2xl">
              One platform. Infinite possibilities. Each YBA system leverages the power of Flow 
              to deliver intelligent automation across every industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}