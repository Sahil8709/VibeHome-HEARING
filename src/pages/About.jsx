const About = () => {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About VibeHome Hearing</h1>
          <p className="text-blue-100 text-lg">Bringing professional hearing care to your doorstep since 2009.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-5">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                VibeHome Hearing is India's leading home-based hearing care service provider. Founded in 2009, we have helped over 10,000 patients across the country rediscover the joy of hearing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe that quality hearing care should be accessible to everyone — especially the elderly who find it difficult to travel. Our team of certified audiologists brings the clinic to your home.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We carry all major international brands and offer solutions at every price point — from affordable basic aids to premium invisible hearing aids.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-10 border border-blue-100">
              <div className="grid grid-cols-2 gap-6">
                {[['10,000+', 'Happy Patients'], ['15+', 'Years Experience'], ['6', 'Premium Brands'], ['100%', 'Free Test']].map(([num, label]) => (
                  <div key={label} className="text-center">
                    <div className="text-3xl font-extrabold text-blue-700 mb-1">{num}</div>
                    <div className="text-sm text-gray-600 font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="audiologists" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Audiologists</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { name: 'Dr. Priya Sharma', role: 'Senior Audiologist', exp: '12 years experience' },
                { name: 'Dr. Rajesh Mehta', role: 'Hearing Aid Specialist', exp: '15 years experience' },
                { name: 'Dr. Ananya Nair', role: 'Paediatric Audiologist', exp: '8 years experience' },
              ].map((doc) => (
                <div key={doc.name} className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{doc.name.split(' ')[1][0]}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{doc.name}</h3>
                  <p className="text-blue-600 text-sm font-semibold mt-1">{doc.role}</p>
                  <p className="text-gray-400 text-xs mt-1">{doc.exp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About