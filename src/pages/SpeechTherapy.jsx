import { Link } from 'react-router-dom'

const SpeechTherapy = () => (
  <div className="pt-20">
    <section className="bg-gradient-to-br from-pink-900 via-purple-800 to-teal-700 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Speech & Swallow Therapy</h1>
        <p className="text-pink-100 text-lg max-w-2xl mx-auto">
          Professional speech-language therapy and dysphagia treatment delivered at your home by certified therapists.
        </p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <div>
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">What We Treat</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-5">Speech Therapy Services</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our certified Speech-Language Pathologists (SLPs) provide comprehensive assessment and therapy for a wide range of communication disorders in both children and adults. All sessions are available as home visits across Hyderabad and surrounding areas.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Speech & Language Delay', desc: 'For children not meeting speech milestones. Early intervention leads to the best outcomes.', color: 'bg-blue-50 border-blue-200' },
              { title: 'Stuttering & Fluency', desc: 'Evidence-based therapy for children and adults who stutter or have other fluency disorders.', color: 'bg-purple-50 border-purple-200' },
              { title: 'Voice Disorders', desc: 'Treatment for hoarseness, vocal nodules, spasmodic dysphonia, and professional voice users.', color: 'bg-pink-50 border-pink-200' },
              { title: 'Aphasia (Post-Stroke)', desc: 'Language rehabilitation for adults who have lost speech or language ability following a stroke.', color: 'bg-orange-50 border-orange-200' },
              { title: 'Autism Communication', desc: 'AAC, social communication, and language therapy tailored for children on the autism spectrum.', color: 'bg-teal-50 border-teal-200' },
              { title: 'Articulation Disorders', desc: 'Therapy to correct pronunciation errors, lisps, and sound substitutions in children and adults.', color: 'bg-green-50 border-green-200' },
            ].map(item => (
              <div key={item.title} className={`${item.color} rounded-2xl p-6 border`}>
                <h3 className="font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="swallow">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Dysphagia Care</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-5">Swallow Therapy</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Dysphagia (difficulty swallowing) can result from stroke, neurological conditions, surgery, or ageing. Our SLPs assess the swallowing mechanism and design safe, effective rehabilitation programmes — all at your home in Hyderabad.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Who benefits from swallow therapy?</h3>
              <ul className="space-y-2.5">
                {["Stroke and TIA survivors", "Parkinson's disease patients", "Post-head & neck cancer surgery", "Elderly with age-related swallowing decline", "Neurological conditions (ALS, MS)", "Infants with feeding difficulties"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-teal-50 rounded-2xl border border-teal-100 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Our swallow therapy process</h3>
              <ol className="space-y-3">
                {['Detailed swallowing assessment at home', 'Review of medical history and imaging reports', 'Personalised therapy plan creation', 'Exercises to strengthen swallowing muscles', 'Safe food texture recommendations', 'Family education and caregiver training'].map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose VibeHome Speech Therapy?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Certified Speech-Language Pathologists (SLPs)', 'Home visits across Hyderabad', 'Therapy for all ages — children to elderly', 'Evidence-based treatment approaches', 'Flexible scheduling 7 days a week', 'Family counselling and caregiver training'].map(item => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-600 to-teal-600 rounded-3xl p-10 text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Book a Speech or Swallow Assessment</h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">Our therapist will come to your home in Hyderabad. Free initial consultation available.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-block bg-white text-pink-700 font-extrabold px-8 py-3 rounded-2xl hover:bg-pink-50 transition-colors">
              Book Free Assessment
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

export default SpeechTherapy