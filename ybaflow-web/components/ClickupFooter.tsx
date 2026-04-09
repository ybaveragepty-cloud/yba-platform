'use client';

export default function ClickupFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl font-bold tracking-tight">
                <span className="text-gray-300">Y</span>
                <span className="text-green-500">B</span>
                <span className="text-gray-300">A</span>
              </div>
              <div className="text-xl font-light text-blue-400 tracking-wide">
                Flow
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-6">
              Automation systems for real operations. 
              Building the next generation of intelligent platforms.
            </p>

            <p className="text-gray-500 text-sm">
              Why Be Average? Build systems that think, adapt, and scale beyond limits.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {[
                { name: 'YBA Flow Platform', href: '#' },
                { name: 'YBA Terra', href: '#terra' },
                { name: 'API Documentation', href: '#' },
                { name: 'Integration Guide', href: '#' }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About YBA Systems', href: '#' },
                { name: 'Careers', href: '#' },
                { name: 'Contact', href: '#contact' },
                { name: 'Support', href: '#' }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            © 2026 YBA Systems. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}