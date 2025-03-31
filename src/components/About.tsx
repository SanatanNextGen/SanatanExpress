/* eslint-disable react/no-unescaped-entities */


export default function About() {

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-800 animate__animated animate__fadeIn">
            About Our Company
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-blue-600 mx-auto mb-4 animate__animated animate__fadeIn animate__delay-1s"></div>
          <p className="text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
            We are a logistics company committed to providing end-to-end
            solutions for transportation and supply chain management. Our
            mission is to streamline the way goods are moved across the globe,
            ensuring timely, safe, and cost-effective services.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-2s mt-4">
            With years of experience, we specialize in road, air, rail, and sea
            transport, alongside comprehensive warehousing solutions. Our
            customer-centric approach ensures we tailor our services to meet
            each client's unique needs.
          </p>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-blue-800">
            Our Core Values
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-blue-600 mx-auto mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-2xl font-semibold text-blue-800 mb-3">
                Reliability
              </h4>
              <p className="text-gray-600">
                We guarantee timely deliveries, every time. Our network of
                services ensures reliability across all our logistics
                operations.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-2xl font-semibold text-blue-800 mb-3">
                Innovation
              </h4>
              <p className="text-gray-600">
                We leverage cutting-edge technology to enhance the customer
                experience and optimize logistics processes.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-2xl font-semibold text-blue-800 mb-3">
                Customer Focus
              </h4>
              <p className="text-gray-600">
                Our customers are our top priority. We offer tailored solutions
                and 24/7 support to ensure satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
