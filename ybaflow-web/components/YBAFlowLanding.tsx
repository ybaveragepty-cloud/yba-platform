'use client';

export default function YBAFlowLanding() {
  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* YBA Logo */}
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-white">Y</span>
                <span className="text-green-500">B</span>
                <span className="text-white">A</span>
              </div>
              <div className="text-xl font-light text-blue-400 tracking-wide">
                Flow
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-300 hover:text-green-500 transition-colors">Services</a>
              <a href="#terra" className="text-gray-300 hover:text-green-500 transition-colors">Terra</a>
              <a href="#about" className="text-gray-300 hover:text-green-500 transition-colors">About</a>
              <button className="bg-gradient-accent text-black px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="animate-fadeInUp">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">Your Vision</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
                  Automated
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                YBA Flow transforms operational visions into intelligent, automated realities. 
                From concept to deployment, we build systems that think, adapt, and scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-gradient-accent text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all">
                  Start Your Project
                </button>
                <button className="border border-green-500 text-green-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-500/10 transition-all">
                  Explore Terra
                </button>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500 mb-1">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500 mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500 mb-1">∞</div>
                  <div className="text-sm text-gray-400">Scale</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative animate-float">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
                {/* Mock Dashboard */}
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-green-500 font-semibold">YBA Terra Dashboard</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-800 rounded p-3">
                      <div className="text-2xl font-bold text-white">94%</div>
                      <div className="text-xs text-gray-400">Efficiency</div>
                    </div>
                    <div className="bg-gray-800 rounded p-3">
                      <div className="text-2xl font-bold text-blue-400">12</div>
                      <div className="text-xs text-gray-400">Systems</div>
                    </div>
                  </div>
                  
                  {/* Chart Mockup */}
                  <div className="bg-gray-800 rounded p-3">
                    <div className="flex items-end gap-1 h-16">
                      {[40, 60, 45, 80, 65, 90, 75, 95, 70, 85].map((height, i) => (
                        <div 
                          key={i} 
                          className="bg-gradient-to-t from-green-600 to-green-400 rounded-t flex-1" 
                          style={{height: `${height}%`}}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-green-500 font-semibold mb-1">Live Production Data</div>
                  <div className="text-gray-400 text-sm">Real-time operational intelligence</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                AI Active
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                24/7 Monitoring
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Complete Automation Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From intelligent farming to enterprise operations, we deliver end-to-end automation platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Terra Agriculture',
                subtitle: 'Smart Farming',
                description: 'AI-powered hydroponics, aquaponics, and climate control systems for optimal crop production',
                icon: '🌱',
                color: 'green'
              },
              {
                title: 'Flow Platform',
                subtitle: 'Automation Engine', 
                description: 'Core platform connecting and orchestrating intelligent systems across any industry',
                icon: '⚡',
                color: 'blue'
              },
              {
                title: 'Enterprise Solutions',
                subtitle: 'Custom Systems',
                description: 'Tailored automation solutions for manufacturing, logistics, and operational workflows',
                icon: '🏢',
                color: 'purple'
              },
              {
                title: 'AI Integration',
                subtitle: 'Machine Learning',
                description: 'Advanced AI models for predictive analytics, optimization, and autonomous decision making',
                icon: '🧠',
                color: 'cyan'
              },
              {
                title: 'Cloud Infrastructure',
                subtitle: 'Scalable Hosting',
                description: 'Enterprise-grade cloud deployment with monitoring, security, and automatic scaling',
                icon: '☁️',
                color: 'indigo'
              },
              {
                title: 'Support & Maintenance',
                subtitle: '24/7 Operations',
                description: 'Comprehensive support, monitoring, and maintenance for all deployed systems',
                icon: '🔧',
                color: 'orange'
              }
            ].map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-gray-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <div className="text-green-500 font-semibold mb-4">{service.subtitle}</div>
                <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                <button className="text-green-500 font-semibold hover:text-green-400 transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terra Highlight Section */}
      <section id="terra" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  NOW AVAILABLE
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  YBA Terra
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
                    Farm OS
                  </span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  The world's first complete Farm Operating System. AI-controlled hydroponics, 
                  aquaponics, and environmental management for guaranteed yields and maximum efficiency.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">95%</div>
                    <div className="text-gray-400">Water Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">5x</div>
                    <div className="text-gray-400">Faster Growth</div>
                  </div>
                </div>
                
                <button className="bg-gradient-accent text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all">
                  Explore Terra
                </button>
              </div>
              
              <div className="relative">
                <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl">
                  <div className="text-center mb-6">
                    <h4 className="text-green-500 font-bold text-lg">Terra Control Center</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">🌿</div>
                        <div>
                          <div className="font-semibold text-white">Hydroponics A</div>
                          <div className="text-sm text-gray-400">pH: 6.2 | Temp: 24°C</div>
                        </div>
                      </div>
                      <div className="text-green-500 font-bold">96%</div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">🐟</div>
                        <div>
                          <div className="font-semibold text-white">Aquaculture</div>
                          <div className="text-sm text-gray-400">DO: 8.2 | Fish: 240</div>
                        </div>
                      </div>
                      <div className="text-green-500 font-bold">94%</div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">🌡️</div>
                        <div>
                          <div className="font-semibold text-white">Climate Control</div>
                          <div className="text-sm text-gray-400">Humidity: 65% | CO2: 400ppm</div>
                        </div>
                      </div>
                      <div className="text-green-500 font-bold">98%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl font-bold tracking-tight">
                  <span className="text-white">Y</span>
                  <span className="text-green-500">B</span>
                  <span className="text-white">A</span>
                </div>
                <div className="text-2xl font-light text-blue-400 tracking-wide">
                  Flow
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Why Be Average? Build extraordinary automated systems that transform operations 
                and create sustainable, intelligent workflows.
              </p>
              <div className="text-sm text-gray-500">
                © 2026 YBA Systems. Revolutionizing Operations Through Intelligence.
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">YBA Terra</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Flow Platform</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Enterprise</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">API Access</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}