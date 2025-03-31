import { useState } from 'react';

const services = [
  { id: 'road', name: 'Road Express', icon: '🚚', description: 'Fast and reliable road transportation services across the country with guaranteed delivery timelines.' },
  { id: 'air', name: 'Air Express', icon: '✈️', description: 'Time-sensitive air freight solutions for urgent deliveries with priority handling and tracking.' },
  { id: 'rail', name: 'Rail Express', icon: '🚂', description: 'Cost-effective rail transportation for large shipments with nationwide connectivity.' },
  { id: 'sea', name: 'Sea Freight', icon: '🚢', description: 'Global sea freight solutions for international logistics with competitive rates and reliable service.' },
  { id: 'warehouse', name: 'Warehousing', icon: '📦', description: 'State-of-the-art warehousing facilities with inventory management and distribution services.' },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('road');

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-800 animate__animated animate__fadeIn">Our Logistics Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-blue-600 mx-auto mb-4 animate__animated animate__fadeIn animate__delay-1s"></div>
          <p className="text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
            Comprehensive logistics solutions tailored to meet your transportation and supply chain needs.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`px-6 py-3 mx-2 mb-4 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  activeTab === service.id 
                    ? 'bg-gradient-to-r from-blue-700 to-blue-600 text-white scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(service.id)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="mr-2">{service.icon}</span>
                {service.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Service Content */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 border border-gray-200 transform transition-all duration-500 hover:shadow-xl">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`transition-all duration-500 ${activeTab === service.id ? 'opacity-100 block' : 'opacity-0 hidden'}`}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 animate__animated animate__fadeIn animate__delay-3s">
                  <h3 className="text-2xl font-bold mb-4 text-blue-800">{service.name}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-blue-600 mb-4"></div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-700 mr-2 bg-blue-100 p-1 rounded-full">✔️</span>
                      <span className='text-gray-600'>Nationwide coverage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-700 mr-2 bg-blue-100 p-1 rounded-full">✔️</span>
                      <span className='text-gray-600'>Real-time tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-700 mr-2 bg-blue-100 p-1 rounded-full">✔️</span>
                      <span className='text-gray-600'>Customized solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-700 mr-2 bg-blue-100 p-1 rounded-full">✔️</span>
                      <span className='text-gray-600'>24/7 customer support</span>
                    </li>
                  </ul>
                  <a 
                    href="#" 
                    className="inline-block mt-6 bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-md font-medium hover:from-blue-800 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-md"
                  >
                    Learn More
                  </a>
                </div>
                <div className="md:w-1/2 flex justify-center animate__animated animate__fadeIn animate__delay-4s">
                  <div className="relative bg-gray-100 h-64 w-full rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-500">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-200">
                      <div className="text-center">
                        <div className="text-7xl mb-4">{service.icon}</div>
                        <p className="text-xl font-medium text-blue-800">{service.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
