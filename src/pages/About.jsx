import { useState } from 'react'
import { Link } from 'react-router-dom'

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-gray-800 text-base pr-4">{q}</span>
        <svg className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`transition-all duration-300 ${open ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <p className="px-6 py-4 text-gray-600 text-sm leading-relaxed bg-blue-50 border-t border-blue-100">{a}</p>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <div className="pt-20">
      <section className="bg-about text-white py-16 min-h-64 flex items-center">
        <div className="max-w-4xl mx-auto px-4 text-center w-full">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About VibeHome Hearing & Speech</h1>
          <p className="text-blue-100 text-lg">Bringing professional hearing care and speech therapy to your doorstep since 2009.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* About Us */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-5">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                VibeHome Hearing & Speech is India's leading home-based hearing care and speech therapy service provider. Founded in 2009, we have helped over 10,000 patients across the country rediscover the joy of hearing and clear communication.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our team of certified audiologists and speech-language pathologists brings clinic-quality care directly to your home. We treat hearing loss of all types with advanced hearing aid fittings, and we also provide comprehensive speech, language, voice, and swallowing therapy for children and adults.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We serve patients of all ages — from children with speech delays to elderly patients with hearing loss, post-stroke aphasia, and swallowing difficulties (dysphagia).
              </p>
              <div className="flex gap-4 mt-6">
                <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                  Book Free Assessment
                </Link>
                <Link to="/speech-therapy" className="bg-pink-50 hover:bg-pink-600 text-pink-700 hover:text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm border border-pink-200">
                  Speech Therapy
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-10 border border-blue-100">
              <div className="grid grid-cols-2 gap-6">
                {[['10,000+', 'Happy Patients'], ['15+', 'Years Experience'], ['4', 'Premium Brands'], ['100%', 'Free Assessment']].map(([num, label]) => (
                  <div key={label} className="text-center">
                    <div className="text-3xl font-extrabold text-blue-700 mb-1">{num}</div>
                    <div className="text-sm text-gray-600 font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div id="how-it-works" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">How It Works</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Book Online', desc: 'Fill the form or WhatsApp us to schedule your free assessment at home.' },
                { step: '02', title: 'Home Visit', desc: 'Our audiologist or speech therapist comes to you with professional equipment.' },
                { step: '03', title: 'Get Assessed', desc: 'Comprehensive hearing or speech evaluation with a detailed report.' },
                { step: '04', title: 'Start Treatment', desc: 'Begin your personalised hearing aid fitting or therapy programme.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-lg font-extrabold mx-auto mb-3 shadow-md">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Audiologists */}
          <div id="audiologists" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Our Audiologists</h2>
            <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
              Certified professionals with years of experience in diagnosing and treating hearing loss, tinnitus, and balance disorders across all age groups.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { name: 'Dr. Priya Sharma', role: 'Senior Audiologist', exp: '12 years experience', info: 'Specialises in adult hearing loss, hearing aid fitting, and tinnitus management.' },
                { name: 'Dr. Rajesh Mehta', role: 'Hearing Aid Specialist', exp: '15 years experience', info: 'Expert in paediatric and geriatric audiology. Trained in all major hearing aid brands.' },
                { name: 'Dr. Ananya Nair', role: 'Paediatric Audiologist', exp: '8 years experience', info: 'Dedicated to early intervention for children with hearing loss and auditory processing disorders.' },
              ].map((doc) => (
                <div key={doc.name} className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{doc.name.split(' ')[1][0]}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{doc.name}</h3>
                  <p className="text-blue-600 text-sm font-semibold mt-1">{doc.role}</p>
                  <p className="text-gray-400 text-xs mt-1 mb-3">{doc.exp}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{doc.info}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Speech & Swallow Therapists */}
          <div id="speech-therapists" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Speech & Swallow Therapists</h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
              Our certified Speech-Language Pathologists (SLPs) assess and treat a wide range of communication and swallowing disorders in children and adults — right at your home.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-pink-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">S</span>
                  Speech Therapy — What We Treat
                </h3>
                <ul className="space-y-2">
                  {['Speech & language delays in children', 'Stuttering and fluency disorders', 'Voice disorders (hoarseness, vocal nodules)', 'Aphasia (post-stroke language loss)', 'Articulation & pronunciation disorders', 'Autism spectrum communication support'].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">W</span>
                  Swallow Therapy (Dysphagia) — What We Treat
                </h3>
                <ul className="space-y-2">
                  {["Post-stroke swallowing difficulties", "Neurological conditions (Parkinson's, ALS)", "Post-surgical swallowing rehabilitation", "Feeding difficulties in infants & children", "Head & neck cancer rehabilitation", "Aspiration prevention and safe feeding"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { name: 'Ms. Divya Krishnan', role: 'Speech-Language Pathologist', exp: '10 years experience', info: 'Specialises in childhood speech delays, autism communication, and stuttering therapy.' },
                { name: 'Ms. Sneha Reddy', role: 'Swallow Therapist (SLP)', exp: '9 years experience', info: 'Expert in dysphagia rehabilitation for post-stroke and neurological patients.' },
                { name: 'Ms. Pooja Verma', role: 'Voice & Fluency Specialist', exp: '7 years experience', info: 'Trained in voice therapy, aphasia treatment, and adult language rehabilitation.' },
              ].map((doc) => (
                <div key={doc.name} className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{doc.name.split(' ')[1][0]}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{doc.name}</h3>
                  <p className="text-pink-600 text-sm font-semibold mt-1">{doc.role}</p>
                  <p className="text-gray-400 text-xs mt-1 mb-3">{doc.exp}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{doc.info}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
              Everything you need to know about our hearing and speech services.
            </p>
            <div className="space-y-3">
              {[
                { q: 'Is the hearing test really free?', a: 'Yes, completely free with no hidden charges. Our certified audiologist visits your home or you can visit our clinic — no obligation to purchase.' },
                { q: 'Do you offer home visits for elderly patients?', a: 'Absolutely. Home visits are our specialty. We bring all equipment to your home so elderly or mobility-challenged patients get tested in comfort.' },
                { q: 'Do you provide speech therapy services?', a: 'Yes! We have certified Speech-Language Pathologists who provide assessment and therapy for speech delays, stuttering, voice disorders, aphasia, and more — including home visit sessions.' },
                { q: 'What is swallow therapy (dysphagia therapy)?', a: 'Dysphagia therapy helps patients who have difficulty swallowing due to stroke, neurological conditions, or surgery. Our therapists assess and treat swallowing disorders safely at your home.' },
                { q: 'Which hearing aid brands do you carry?', a: 'We carry Signia, Phonak, Resound, and Widex — across all price ranges from budget to premium.' },
                { q: 'Is there a warranty on hearing aids?', a: 'Yes. All hearing aids come with a manufacturer warranty of 1–3 years. We also provide lifetime service support and free follow-up visits.' },
                { q: 'How many speech therapy sessions are needed?', a: 'It varies by condition. Mild speech delays may improve in 8–12 sessions, while complex cases like post-stroke aphasia may need 3–6 months of regular therapy. Your therapist will create a personalised plan.' },
              ].map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-10 text-center text-white">
            <h2 className="text-2xl font-extrabold mb-3">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">Book a free hearing test or speech assessment. Our expert will come to your home.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-700 font-extrabold px-8 py-3 rounded-2xl hover:bg-blue-50 transition-colors">
                Book Free Assessment
              </Link>
              <Link to="/speech-therapy" className="bg-pink-500 hover:bg-pink-400 text-white font-bold px-8 py-3 rounded-2xl transition-colors">
                Speech Therapy Info
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About