import { Link } from 'react-router-dom'

const types = [
  { id: 'bte', name: 'BTE', full: 'Behind the Ear', color: 'bg-blue-600', desc: 'The most common and powerful style. Sits behind the ear with a tube connecting to an ear mould inside the ear canal. Best for moderate to severe hearing loss.', pros: ['Very powerful', 'Easy to handle', 'Rechargeable options', 'Suitable for all ages'] },
  { id: 'ric', name: 'RIC', full: 'Receiver in Canal', color: 'bg-teal-600', desc: 'A thin wire replaces the tube, placing the receiver directly in the ear canal. Smaller than BTE with excellent sound quality.', pros: ['Very discreet', 'Natural sound', 'Bluetooth enabled', 'Rechargeable'] },
  { id: 'ite', name: 'ITE', full: 'In the Ear', color: 'bg-purple-600', desc: 'Custom-made to fill the outer ear bowl. Larger than canal aids but easier to insert and handle — ideal for elderly patients.', pros: ['Easy to insert', 'Larger controls', 'Good battery life', 'Custom fit'] },
  { id: 'cic', name: 'CIC', full: 'Completely in Canal', color: 'bg-indigo-600', desc: 'Fits entirely inside the ear canal. Very discreet and nearly invisible. Best for mild to moderate hearing loss.', pros: ['Nearly invisible', 'Natural sound', 'Less wind noise', 'Cosmetically appealing'] },
  { id: 'iic', name: 'IIC', full: 'Invisible in Canal', color: 'bg-pink-600', desc: 'The smallest and most invisible hearing aid available. Sits deep in the second bend of the ear canal — completely invisible.', pros: ['100% invisible', 'Natural directionality', 'No visible components', 'Premium option'] },
  { id: 'itc', name: 'ITC', full: 'In the Canal', color: 'bg-orange-600', desc: 'Custom-made to fit partly in the ear canal. Larger than CIC with more features, yet still discreet.', pros: ['Discreet', 'More features', 'Longer battery', 'Easy to use'] },
]

const Types = () => (
  <div className="pt-20">
    <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Hearing Aid Types</h1>
        <p className="text-blue-100 text-lg">Understand the different styles to find what works best for you.</p>
      </div>
    </section>
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type) => (
            <div id={type.id} key={type.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className={`${type.color} p-6 flex items-center gap-4`}>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-white font-extrabold text-lg">{type.name}</span>
                </div>
                <div>
                  <h2 className="text-white font-extrabold text-xl">{type.full}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{type.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {type.pros.map(p => (
                    <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2.5 rounded-xl transition-colors">
                  Ask About {type.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
)

export default Types