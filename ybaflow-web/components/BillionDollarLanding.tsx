'use client';

export default function BillionDollarLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      
      {/* Hero Section - Welcome to YBAFlow */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* YBA Logo */}
          <div className="mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="text-6xl md:text-8xl font-bold tracking-tight">
                <span className="text-gray-300">Y</span>
                <span className="text-green-500 glow-green">B</span>
                <span className="text-gray-300">A</span>
              </div>
              <div className="text-4xl md:text-6xl font-light text-blue-400 tracking-wider">
                Flow
              </div>
            </div>
            <div className="text-gray-400 text-lg tracking-[0.3em] mb-8">
              INTELLIGENT AUTOMATION PLATFORM
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 animate-slide-up">
            <span className="block text-white mb-4">
              Welcome to the Future of
            </span>
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Operational Intelligence
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed animate-slide-up">
            YBAFlow powers the next generation of intelligent systems. From agricultural automation 
            to enterprise operations, we're building the platform that connects, optimizes, and scales 
            real-world operations through advanced AI and automation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
            <button className="group relative px-10 py-6 text-xl font-bold text-black bg-gradient-to-r from-green-400 to-green-500 rounded-2xl transition-all duration-300 hover:scale-105 glow-green hover:shadow-2xl">
              Discover Terra
              <svg className="inline-block ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button className="group relative px-10 py-6 text-xl font-bold text-blue-400 border-2 border-blue-400/50 rounded-2xl transition-all duration-300 hover:border-blue-400 hover:bg-blue-400/10 glow-blue">
              Explore Platform
              <svg className="inline-block ml-3 w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Trust Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up">
            {[
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Monitoring' },
              { value: '10x', label: 'Efficiency' },
              { value: '∞', label: 'Scale' }
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{metric.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terra Section - What is Terra */}
      <section className="py-32 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-blue-900"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-pulse-glow">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              INTRODUCING YBA TERRA
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">The World's First</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Intelligent Farm Operating System
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Terra isn't just software—it's a complete transformation of how food production works. 
              We're solving the fundamental challenge of feeding a growing world population while 
              optimizing resource use and environmental impact.
            </p>
          </div>

          {/* Terra Problem & Solution */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left: The Problem */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6">The Problem We're Solving</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-red-400">Resource Waste:</strong> Traditional farming wastes 40% of water and 30% of nutrients through inefficient systems
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-red-400">Unpredictable Yields:</strong> Weather, disease, and human error cause massive crop losses and economic instability
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-red-400">Labor Shortage:</strong> Skilled agricultural workers are increasingly rare, making operations unsustainable
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-red-400">Climate Impact:</strong> Agriculture accounts for 70% of freshwater use and significant greenhouse gas emissions
                  </div>
                </li>
              </ul>
            </div>

            {/* Right: The Solution */}
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/20 rounded-2xl p-8 glow-green">
              <h3 className="text-2xl font-bold text-green-400 mb-6">The Terra Solution</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-green-400">Perfect Efficiency:</strong> AI-controlled hydroponics and aquaponics reduce water use by 95% and eliminate nutrient waste
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-green-400">Guaranteed Yields:</strong> Controlled environments eliminate weather risk and ensure consistent, predictable harvests
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-green-400">Complete Automation:</strong> AI manages every aspect from planting to harvest, requiring minimal human intervention
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-green-400">Carbon Negative:</strong> Our systems actually remove CO₂ from the atmosphere while producing more food per square meter
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Terra Modules */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hydroponics',
                icon: '🌱',
                description: 'Soilless plant cultivation with precision nutrient delivery',
                efficiency: '500% faster growth'
              },
              {
                title: 'Aquaponics',
                icon: '🐟',
                description: 'Integrated fish and plant production in symbiotic systems',
                efficiency: '95% water savings'
              },
              {
                title: 'Climate Control',
                icon: '🌡️',
                description: 'AI-managed environmental systems for optimal conditions',
                efficiency: '99.9% precision'
              }
            ].map((module, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-gray-700/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300 hover:glow-green">
                <div className="text-4xl mb-6">{module.icon}</div>
                <h4 className="text-xl font-bold text-white mb-4">{module.title}</h4>
                <p className="text-gray-300 mb-4">{module.description}</p>
                <div className="text-green-400 font-semibold">{module.efficiency}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terra AI Section */}
      <section className="py-32 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-gray-900 to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-pulse-glow">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              POWERED BY TERRA AI
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Why AI Changes</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Everything
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Terra AI isn't just automation—it's a completely new form of intelligence that understands 
              biological systems better than any human ever could, making decisions in microseconds 
              that optimize every aspect of production.
            </p>
          </div>

          {/* AI Capabilities */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: AI Features */}
            <div>
              <h3 className="text-3xl font-bold text-blue-400 mb-8">What Terra AI Does Right Now</h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Predictive Biology',
                    description: 'Analyzes 10,000+ data points per second to predict plant health, growth patterns, and optimal harvest timing',
                    status: 'Active'
                  },
                  {
                    title: 'Autonomous Adjustment',
                    description: 'Instantly modifies pH, nutrients, lighting, temperature, and humidity based on real-time plant responses',
                    status: 'Active'
                  },
                  {
                    title: 'Yield Maximization',
                    description: 'Continuously learns and optimizes to increase production while reducing resource consumption',
                    status: 'Learning'
                  },
                  {
                    title: 'Disease Prevention',
                    description: 'Identifies potential issues days before they become visible, preventing crop losses entirely',
                    status: 'Beta'
                  }
                ].map((feature, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/20 rounded-xl p-6 hover:glow-blue transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-blue-400">{feature.title}</h4>
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">{feature.status}</span>
                    </div>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: AI Metrics */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-gray-700/30 rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-white mb-8">Live AI Performance</h4>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { metric: '47,291', label: 'Decisions/Hour', change: '+12%' },
                    { metric: '99.7%', label: 'Accuracy', change: '+0.3%' },
                    { metric: '0.003s', label: 'Response Time', change: '-15%' },
                    { metric: '147TB', label: 'Data Processed', change: '+8%' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{stat.metric}</div>
                      <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                      <div className="text-xs text-green-400">{stat.change}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
                  <h5 className="text-cyan-400 font-semibold mb-4">Neural Network Status</h5>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Learning Rate</span>
                      <span className="text-cyan-400">Adaptive</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Model Confidence</span>
                      <span className="text-green-400">97.3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Active Sensors</span>
                      <span className="text-blue-400">2,847</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Products Section */}
      <section className="py-32 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-blue-900"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gray-600/20 text-gray-400 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
              EXPANDING THE ECOSYSTEM
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">The Complete</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                YBA Universe
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Terra is just the beginning. YBA Flow will power intelligent operations across every industry, 
              creating a connected ecosystem of autonomous systems that learn, adapt, and optimize continuously.
            </p>
          </div>

          {/* Future Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'YBA Realty',
                description: 'AI-powered property management and real estate optimization',
                status: 'Development',
                icon: '🏢',
                color: 'amber',
                eta: '2026'
              },
              {
                name: 'YBA Med',
                description: 'Intelligent healthcare systems and patient care automation',
                status: 'Research',
                icon: '🏥',
                color: 'red',
                eta: '2027'
              },
              {
                name: 'YBA Manufacturing',
                description: 'Smart factory automation and production optimization',
                status: 'Planning',
                icon: '🏭',
                color: 'blue',
                eta: '2027'
              },
              {
                name: 'YBA Energy',
                description: 'Renewable energy management and grid optimization',
                status: 'Concept',
                icon: '⚡',
                color: 'yellow',
                eta: '2028'
              }
            ].map((product, i) => (
              <div key={i} className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/20 border border-gray-700/30 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300">
                {/* Locked Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                    {product.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors mb-4">
                    {product.name}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-700/50 border border-gray-600/30 rounded-full">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-400 text-xs font-medium">{product.status}</span>
                    </div>
                    
                    <div className="text-gray-500 text-xs">{product.eta}</div>
                  </div>
                </div>

                {/* Lock Icon */}
                <div className="absolute top-6 right-6 text-gray-500 group-hover:text-gray-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Vision Statement */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800/30 to-gray-900/20 border border-gray-700/30 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-white mb-8">
                Building the Operating System for Planet Earth
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Every industry will be transformed by intelligent automation. YBA Flow provides the 
                foundation for this transformation—a unified platform where AI systems across agriculture, 
                healthcare, manufacturing, and energy work together to optimize resource use, reduce waste, 
                and create a sustainable future for humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-black"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Ready to Transform</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Your Operations?
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join the companies already using YBA Flow to revolutionize their operations. 
            The future of intelligent automation starts now.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            <button className="group relative px-12 py-6 text-xl font-bold text-black bg-gradient-to-r from-green-400 to-green-500 rounded-2xl transition-all duration-300 hover:scale-105 glow-green hover:shadow-2xl">
              Get Early Access
              <svg className="inline-block ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button className="group relative px-12 py-6 text-xl font-bold text-blue-400 border-2 border-blue-400/50 rounded-2xl transition-all duration-300 hover:border-blue-400 hover:bg-blue-400/10 glow-blue">
              Schedule Demo
              <svg className="inline-block ml-3 w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: 'Series A', label: 'Funding Stage' },
              { value: '$50M', label: 'Raised' },
              { value: '127', label: 'Team Members' },
              { value: '12', label: 'Countries' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Final Brand Statement */}
          <div className="border-t border-gray-800 pt-12">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-4xl font-bold tracking-tight">
                <span className="text-gray-300">Y</span>
                <span className="text-green-500">B</span>
                <span className="text-gray-300">A</span>
              </div>
              <div className="text-2xl font-light text-blue-400 tracking-wider">FLOW</div>
            </div>
            <p className="text-gray-400 text-lg mb-4">
              Why Be Average? Build Extraordinary.
            </p>
            <p className="text-gray-500">
              © 2026 YBA Systems. Revolutionizing Operations Through Intelligence.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}