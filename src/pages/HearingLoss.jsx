import { Link } from 'react-router-dom'

const HearingLoss = () => (
  <div className="pt-20">
    <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">What is Hearing Loss?</h1>
        <p className="text-blue-100 text-lg">Understanding hearing loss is the first step towards better hearing.</p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-5">What is Hearing Loss?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hearing loss is the partial or total inability to hear sound in one or both ears. It is one of the most common health conditions worldwide, affecting over 63 million people in India alone. It can occur at any age — from newborns to the elderly.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Hearing loss can range from mild (difficulty hearing soft sounds) to profound (inability to hear even loud sounds). The good news is that most hearing loss can be successfully managed with the right hearing aids and audiological support.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Hearing Loss</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { type: 'Conductive', colorClass: 'bg-blue-50 border-blue-200', textColor: 'text-blue-700', desc: 'Caused by problems in the outer or middle ear — such as earwax buildup, fluid, or damaged eardrum. Often treatable medically or surgically.' },
              { type: 'Sensorineural', colorClass: 'bg-purple-50 border-purple-200', textColor: 'text-purple-700', desc: 'Caused by damage to the inner ear (cochlea) or auditory nerve. The most common type — usually permanent but manageable with hearing aids.' },
              { type: 'Mixed', colorClass: 'bg-teal-50 border-teal-200', textColor: 'text-teal-700', desc: 'A combination of both conductive and sensorineural hearing loss. Requires a comprehensive treatment approach addressing both components.' },
            ].map(item => (
              <div key={item.type} className={`${item.colorClass} rounded-2xl p-6 border`}>
                <h3 className={`font-bold text-lg mb-3 ${item.textColor}`}>{item.type}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Degrees of Hearing Loss</h2>
          <div className="space-y-3">
            {[
              { level: 'Normal', db: '0–25 dB', desc: 'No significant hearing difficulty.', color: 'bg-green-100 text-green-700' },
              { level: 'Mild', db: '26–40 dB', desc: 'Difficulty hearing soft sounds and whispered speech, especially in noisy environments.', color: 'bg-yellow-100 text-yellow-700' },
              { level: 'Moderate', db: '41–70 dB', desc: 'Difficulty with normal conversation. Often requires repeating sentences.', color: 'bg-orange-100 text-orange-700' },
              { level: 'Severe', db: '71–90 dB', desc: 'Only loud sounds are heard. Hearing aids are essential for daily communication.', color: 'bg-red-100 text-red-700' },
              { level: 'Profound', db: '91+ dB', desc: 'Very little or no hearing. May require powerful hearing aids or cochlear implants.', color: 'bg-red-200 text-red-800' },
            ].map(item => (
              <div key={item.level} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
                <span className={`${item.color} text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`}>{item.level}</span>
                <div>
                  <span className="text-blue-700 font-bold text-sm">{item.db} &nbsp;</span>
                  <span className="text-gray-600 text-sm">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-5">Common Causes of Hearing Loss</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Age-related hearing loss (Presbycusis)', 'Prolonged exposure to loud noise', 'Ear infections and fluid buildup', 'Genetic / hereditary factors', 'Head injury or trauma', 'Certain medications (ototoxic drugs)', 'Diabetes and cardiovascular disease', 'Earwax blockage'].map(cause => (
              <div key={cause} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 text-sm text-gray-700">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {cause}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-5">Signs You May Have Hearing Loss</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Asking people to repeat themselves frequently', 'Difficulty hearing on the phone', 'Turning up TV volume louder than others prefer', 'Missing parts of conversations in noisy places', 'Ringing or buzzing in the ears (tinnitus)', 'Difficulty hearing high-pitched sounds', 'Feeling that others are mumbling', 'Avoiding social situations due to hearing difficulty'].map(sign => (
              <div key={sign} className="flex items-start gap-3 bg-blue-50 rounded-xl p-4 text-sm text-gray-700 border border-blue-100">
                <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {sign}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-10 text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Get Your Hearing Tested Today — Free</h2>
          <p className="text-blue-100 mb-6">Early detection leads to the best outcomes. Book your free home visit today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-block bg-white text-blue-700 font-extrabold px-8 py-3 rounded-2xl hover:bg-blue-50 transition-colors">
              Book Free Hearing Test
            </Link>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-3 rounded-2xl transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  </div>
)

export default HearingLoss