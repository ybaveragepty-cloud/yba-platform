'use client';
import { useState } from 'react';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: string;
  status: 'active' | 'developing' | 'planned';
  metrics?: { label: string; value: string }[];
  onClick: () => void;
}

function ModuleCard({ title, description, icon, status, metrics, onClick }: ModuleCardProps) {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    developing: 'bg-blue-100 text-blue-800', 
    planned: 'bg-slate-100 text-slate-600'
  };

  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer rounded-xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <div className="text-2xl">{icon}</div>
        <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      
      <h3 className="mt-4 text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      
      {metrics && (
        <div className="mt-4 grid grid-cols-2 gap-2">
          {metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <div className="text-sm font-semibold text-slate-950">{metric.value}</div>
              <div className="text-xs text-slate-500">{metric.label}</div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-4 flex items-center text-sm font-medium text-slate-700 group-hover:text-slate-950">
        Explore module
        <svg className="ml-1 h-4 w-4 transition group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function ModuleModal({ module, onClose }: { module: any; onClose: () => void }) {
  if (!module) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white">
        <div className="border-b border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{module.icon}</span>
              <h2 className="text-2xl font-bold text-slate-950">{module.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-950">Module Overview</h3>
              <p className="mt-2 text-slate-600">{module.description}</p>
              
              <div className="mt-6">
                <h4 className="font-medium text-slate-950">Key Features</h4>
                <ul className="mt-2 space-y-2">
                  {module.features?.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="rounded-lg bg-slate-50 p-4">
              <h4 className="font-medium text-slate-950">Live Metrics</h4>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {module.metrics?.map((metric: any, i: number) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-slate-950">{metric.value}</div>
                    <div className="text-sm text-slate-500">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <div className="h-32 rounded-lg bg-gradient-to-r from-blue-100 to-green-100 p-4">
                  <div className="text-center text-slate-600">
                    <div className="text-lg font-medium">System Status</div>
                    <div className="mt-2 text-sm">Monitoring • Optimizing • Scaling</div>
                    <div className="mt-2">
                      <div className="mx-auto h-2 w-24 rounded-full bg-green-200">
                        <div className="h-2 w-20 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TerraShowcase() {
  const [selectedModule, setSelectedModule] = useState<any>(null);
  
  const modules = [
    {
      title: 'Hydroponics Systems',
      description: 'NFT, DWC, and media bed management with automated nutrient control, pH monitoring, and growth tracking.',
      icon: '🌿',
      status: 'active' as const,
      metrics: [
        { label: 'Active Systems', value: '12' },
        { label: 'Yield Rate', value: '96%' },
        { label: 'pH Stability', value: '±0.1' },
        { label: 'Growth Rate', value: '+15%' }
      ],
      features: [
        'Automated nutrient dosing and pH control',
        'Real-time growth monitoring and alerts',
        'Harvest scheduling and yield prediction',
        'Multi-crop rotation management',
        'Environmental optimization (light, temp, humidity)',
        'Mobile worker interface for daily tasks'
      ]
    },
    {
      title: 'Aquaculture Management', 
      description: 'Complete RAS (Recirculating Aquaculture System) monitoring for tilapia, trout, and prawn production.',
      icon: '🐟',
      status: 'active' as const,
      metrics: [
        { label: 'Fish Tanks', value: '8' },
        { label: 'Water Quality', value: '98%' },
        { label: 'Feed Efficiency', value: '1.2:1' },
        { label: 'Survival Rate', value: '94%' }
      ],
      features: [
        'Water quality monitoring (DO, pH, ammonia, nitrite)',
        'Automated feeding schedules and feed conversion tracking',
        'Fish health monitoring and early disease detection',
        'Harvest weight prediction and market timing',
        'Biofilter management and cleaning schedules',
        'Multi-species production management'
      ]
    },
    {
      title: 'Mushroom Cultivation',
      description: 'Climate-controlled mushroom production with substrate management, fruiting schedules, and harvest optimization.',
      icon: '🍄',
      status: 'developing' as const,
      metrics: [
        { label: 'Growing Rooms', value: '6' },
        { label: 'Humidity Control', value: '±2%' },
        { label: 'Yield/kg', value: '2.8kg' },
        { label: 'Cycle Time', value: '28d' }
      ],
      features: [
        'Substrate preparation and sterilization tracking',
        'Climate control (temperature, humidity, CO2, fresh air)',
        'Fruiting induction and harvest timing',
        'Pest and contamination prevention protocols',
        'Strain performance comparison and optimization',
        'Post-harvest processing and packaging'
      ]
    },
    {
      title: 'Packhouse Operations',
      description: 'Post-harvest processing, quality control, traceability, and distribution management for all farm outputs.',
      icon: '📦',
      status: 'developing' as const,
      metrics: [
        { label: 'Daily Throughput', value: '500kg' },
        { label: 'Quality Grade A', value: '89%' },
        { label: 'Traceability', value: '100%' },
        { label: 'Waste Reduction', value: '-12%' }
      ],
      features: [
        'Batch tracking from harvest to customer',
        'Quality grading and sorting automation',
        'Cold chain management and temperature logging',
        'Packaging optimization and inventory management',
        'Customer order fulfillment and shipping',
        'Compliance reporting and certifications'
      ]
    },
    {
      title: 'Poultry Management',
      description: 'Layer and broiler production management with automated feeding, egg collection, and health monitoring.',
      icon: '🐓',
      status: 'planned' as const,
      metrics: [
        { label: 'Birds', value: '2,000' },
        { label: 'Egg Production', value: '85%' },
        { label: 'Feed Conversion', value: '2.1:1' },
        { label: 'Mortality Rate', value: '<2%' }
      ],
      features: [
        'Automated feeding and water management',
        'Egg collection scheduling and quality tracking',
        'Environmental control (ventilation, heating, lighting)',
        'Health monitoring and vaccination schedules',
        'Breeding program management',
        'Processing and packaging workflows'
      ]
    },
    {
      title: 'Livestock Systems',
      description: 'Cattle, goat, and small livestock management with pasture rotation, feeding, and health tracking.',
      icon: '🐄',
      status: 'planned' as const,
      metrics: [
        { label: 'Head Count', value: '45' },
        { label: 'Weight Gain', value: '+1.2kg/d' },
        { label: 'Pasture Health', value: '92%' },
        { label: 'Breeding Rate', value: '95%' }
      ],
      features: [
        'Pasture rotation and grazing management',
        'Individual animal health and breeding records',
        'Feed supplementation and nutrition tracking',
        'Weight monitoring and growth optimization',
        'Milk production tracking (dairy)',
        'Market timing and processing coordination'
      ]
    }
  ];

  return (
    <section id="terra" className="py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            YBA Terra
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Complete Farm Operating System
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            From hydroponics to livestock, Terra manages every aspect of your operation. 
            Real-time monitoring, automated workflows, and data-driven optimization.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              {...module}
              onClick={() => setSelectedModule(module)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            YBA Terra Beta available now for select operations
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Request Terra Access
            </a>
            <a
              href="#features"
              className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {selectedModule && (
        <ModuleModal 
          module={selectedModule} 
          onClose={() => setSelectedModule(null)} 
        />
      )}
    </section>
  );
}