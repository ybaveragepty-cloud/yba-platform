'use client';

export default function ClickupFeatures() {
  const features = [
    {
      title: 'Intelligent Automation',
      description: 'AI-powered workflows that adapt and optimize in real-time, reducing manual intervention and maximizing efficiency.',
      icon: '🤖',
      color: 'blue',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Comprehensive dashboards with live data streams, alerts, and performance analytics for complete operational visibility.',
      icon: '📊',
      color: 'green',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Built to grow with your operations. From small setups to enterprise-scale deployments without architectural limits.',
      icon: '🚀',
      color: 'purple',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      title: 'System Integration',
      description: 'Seamlessly connects with existing tools and platforms through robust APIs and standardized protocols.',
      icon: '🔌',
      color: 'indigo',
      bgColor: 'from-indigo-50 to-indigo-100'
    },
    {
      title: 'Advanced Analytics',
      description: 'Deep insights from your operational data with predictive analytics and performance optimization recommendations.',
      icon: '📈',
      color: 'emerald',
      bgColor: 'from-emerald-50 to-emerald-100'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption, role-based access, and comprehensive audit trails.',
      icon: '🔒',
      color: 'gray',
      bgColor: 'from-gray-50 to-gray-100'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need for{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              operational excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            YBA Flow provides a complete automation platform with the tools and intelligence 
            needed to optimize any operational environment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl shadow-lg transition-all duration-300 hover:-translate-y-1">
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className={`w-6 h-6 text-${feature.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to transform your operations?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join forward-thinking organizations already using YBA Flow to automate, 
              optimize, and scale their operations.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/40 transform hover:-translate-y-0.5 transition-all duration-200">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}