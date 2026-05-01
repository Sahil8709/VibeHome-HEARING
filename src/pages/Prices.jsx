import { Link } from 'react-router-dom'

const tiers = [
  {
    name: 'Basic',
    range: '₹8,000 – ₹25,000',
    color: 'border-gray-200',
    badge: 'bg-gray-100 text-gray-700',
    features: ['Essential sound amplification', 'Manual volume control', '1 year warranty', 'Basic noise reduction', 'Suitable for mild loss'],
  },
  {
    name: 'Advanced',
    range: '₹25,000 – ₹80,000',
    color: 'border-blue-500',
    badge: 'bg-blue-600 text-white',
    highlight: true,
    features: ['Automatic environment detection', 'Bluetooth connectivity', 'Rechargeable battery', '2 year warranty', 'Smartphone app control', 'Moderate to severe loss'],
  },
  {
    name: 'Premium',
    range: '₹80,000 – ₹2,50,000',
    color: 'border-teal-400',
    badge: 'bg-teal-600 text-white',
    features: ['AI-powered sound processing', 'Invisible styles available', 'Tinnitus masking', '3 year warranty', 'Health tracking features', 'Best for all environments'],
  },
]

const Prices = () => (
  <div className="pt-20">
    <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Hearing Aid Prices</h1>
        <p className="text-blue-100 text-lg">Transparent pricing with no hidden costs. Options for every budget.</p>
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {tiers.map((tier) => (
            <div key={tier.name} className={`bg-white rounded-2xl border-2 ${tier.color} p-7 ${tier.highlight ? 'shadow-xl scale-105' : 'shadow-sm'} transition-all`}>
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${tier.badge}`}>{tier.name}</span>
              <div className="text-2xl font-extrabold text-gray-900 mb-1">{tier.range}</div>
              <p className="text-xs text-gray-400 mb-6">Per hearing aid</p>
              <ul className="space-y-2.5 mb-7">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`block text-center font-bold text-sm py-3 rounded-xl transition-colors ${tier.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white'}`}>
                Get Free Consultation
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Not sure which one to choose?</h2>
          <p className="text-gray-500 mb-6 max-w-lg mx-auto">Book a free hearing test and our audiologist will recommend the best option based on your hearing level and budget.</p>
          <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-2xl transition-colors shadow-md">
            Book Free Hearing Test
          </Link>
        </div>
      </div>
    </section>
  </div>
)

export default Prices