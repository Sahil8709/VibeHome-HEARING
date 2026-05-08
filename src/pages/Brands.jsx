import { Link } from 'react-router-dom'

const brands = [
  { id: 'signia', name: 'Signia', color: 'from-purple-500 to-purple-700', desc: 'German-engineered hearing aids with AI-powered sound processing. Ideal for active lifestyles and complex listening environments.', range: '₹18,000 – ₹2,20,000' },
  { id: 'phonak', name: 'Phonak', color: 'from-red-500 to-red-700', desc: 'Swiss precision hearing aids trusted worldwide. Excellent Bluetooth connectivity and rechargeable options for all ages.', range: '₹20,000 – ₹2,50,000' },
  { id: 'resound', name: 'Resound', color: 'from-blue-500 to-blue-700', desc: 'Danish audiological innovation. Features unique Surround Sound technology for the most natural hearing experience.', range: '₹15,000 – ₹2,00,000' },
  { id: 'widex', name: 'Widex', color: 'from-teal-500 to-teal-700', desc: 'Pioneer in digital hearing aid technology. Known for the most natural sound quality and smallest invisible aids.', range: '₹22,000 – ₹2,30,000' },
]

const Brands = () => (
  <div className="pt-20">
    <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Hearing Aid Brands</h1>
        <p className="text-blue-100 text-lg">We carry all leading international brands — find the perfect match for you.</p>
      </div>
    </section>
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {brands.map((brand) => (
            <div id={brand.id} key={brand.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className={`bg-gradient-to-br ${brand.color} p-8 flex items-center gap-4`}>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-white font-extrabold text-2xl">{brand.name[0]}</span>
                </div>
                <h2 className="text-white font-extrabold text-2xl">{brand.name}</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{brand.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Price Range</p>
                    <p className="text-blue-700 font-bold text-sm">{brand.range}</p>
                  </div>
                  <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors">
                    Enquire
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
)

export default Brands