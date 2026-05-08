import { Link } from 'react-router-dom'
import { useState } from 'react'

const services = [
  {
    img: '/images/hearing-test.jpg',
    title: 'Free Hearing Test',
    desc: 'Comprehensive hearing evaluation by certified audiologists — completely free of charge.',
  },
  {
    img: '/images/home-visit.jpg',
    title: 'Home Visit Service',
    desc: 'Our experts come to your doorstep. No travel needed — ideal for elderly and differently-abled patients.',
  },
  {
    img: '/images/trial-fitting.jpg',
    title: 'Hearing Aid Trial & Fitting',
    desc: 'Try before you buy. Precise fitting and programming of hearing aids tailored to your unique hearing profile.',
  },
  {
    img: '/images/speech-assessment.jpg',
    title: 'Speech Assessment',
    desc: 'Detailed evaluation of speech, language, voice, and fluency disorders by certified speech-language pathologists.',
  },
  {
    img: '/images/speech-therapy.jpg',
    title: 'Speech Therapy',
    desc: 'Personalised therapy sessions for children and adults with speech delays, stuttering, voice disorders, and more.',
  },
  {
    img: '/images/after-sales.jpg',
    title: 'After-Sales Support',
    desc: 'Lifetime support, cleaning, repair, and follow-up care for all hearing aid purchases.',
  },
]

const brands = [
  { name: 'Signia', color: 'from-purple-500 to-purple-700' },
  { name: 'Phonak', color: 'from-red-500 to-red-700' },
  { name: 'Resound', color: 'from-blue-500 to-blue-700' },
  { name: 'Widex', color: 'from-teal-500 to-teal-700' },
]

const products = [
  { name: 'BTE Hearing Aid', type: 'Behind the Ear', price: '₹15,000', badge: 'Most Popular', color: 'bg-blue-600', img: '/images/bte.jpg' },
  { name: 'RIC Hearing Aid', type: 'Receiver in Canal', price: '₹22,000', badge: 'Best Fit', color: 'bg-teal-600', img: '/images/ric.jpg' },
  { name: 'ITE Hearing Aid', type: 'In the Ear', price: '₹28,000', badge: 'Discreet', color: 'bg-purple-600', img: '/images/ite.jpg' },
  { name: 'CIC Hearing Aid', type: 'Completely in Canal', price: '₹35,000', badge: 'Invisible', color: 'bg-indigo-600', img: '/images/cic.jpg' },
]

const testimonials = [
  {
    name: 'Ramesh Sharma',
    age: 68,
    city: 'Delhi',
    tag: 'Hearing Care',
    text: 'After years of struggling to hear my grandchildren, VibeHome Hearing changed my life. The home visit service was incredibly convenient and the audiologist was very patient.',
    rating: 5,
  },
  {
    name: 'Sunita Patel',
    age: 72,
    city: 'Mumbai',
    tag: 'Hearing Care',
    text: 'The free hearing test was thorough and the team explained everything clearly. My new Phonak hearing aid fits perfectly and I can hear clearly again!',
    rating: 5,
  },
  {
    name: 'Arvind Mehta',
    age: 65,
    city: 'Bangalore',
    tag: 'Hearing Care',
    text: 'Excellent service from start to finish. They came home, did the test, fitted the hearing aid all in one visit. Highly recommended for senior citizens.',
    rating: 5,
  },
  {
    name: 'Kavitha Nair',
    age: 58,
    city: 'Chennai',
    tag: 'Hearing Care',
    text: 'My mother was hesitant about hearing aids but the team made her so comfortable. The after-sales support has been outstanding over 2 years.',
    rating: 5,
  },
  {
    name: 'Meera Reddy',
    age: 34,
    city: 'Hyderabad',
    tag: 'Speech Therapy',
    text: 'My son had severe speech delay and after just 3 months of therapy with VibeHome Speech team, he is now speaking full sentences. The therapist was patient and wonderful with him.',
    rating: 5,
  },
  {
    name: 'Suresh Kumar',
    age: 45,
    city: 'Hyderabad',
    tag: 'Speech Therapy',
    text: 'I developed stuttering after a stressful period at work. The speech therapist helped me regain my confidence and fluency. Excellent, empathetic care throughout.',
    rating: 5,
  },
  {
    name: 'Lakshmi Devi',
    age: 70,
    city: 'Hyderabad',
    tag: 'Swallow Therapy',
    text: 'After my stroke I had great difficulty swallowing. The swallow therapist from VibeHome visited my home regularly and helped me recover safely. Truly life-changing.',
    rating: 5,
  },
  {
    name: 'Prakash Rao',
    age: 65,
    city: 'Hyderabad',
    tag: 'Swallow Therapy',
    text: 'My wife had swallowing issues post-surgery. The team was professional, caring, and explained every step clearly to our family. We are so grateful for the home visit service.',
    rating: 5,
  },
]

const faqs = [
  { q: 'Is the hearing test really free?', a: 'Yes, completely free with no hidden charges. Our certified audiologist visits your home or you can visit our clinic — no obligation to purchase.' },
  { q: 'How long does a hearing test take?', a: 'A complete hearing evaluation takes about 30–45 minutes. We test both ears, check speech clarity, and provide a detailed audiogram.' },
  { q: 'Do you offer home visits for elderly patients?', a: 'Absolutely. Home visits are our specialty. We bring all equipment to your home so elderly or mobility-challenged patients get tested in comfort.' },
  { q: 'Which hearing aid brands do you carry?', a: 'We carry all major brands including Signia, Phonak, Resound, and Widex — across all price ranges from budget to premium.' },
  { q: 'What is the price range of hearing aids?', a: 'Hearing aids start from ₹8,000 and go up to ₹2,50,000 depending on the brand, technology level, and style. We have options for every budget.' },
  { q: 'Is there a warranty on hearing aids?', a: 'Yes. All hearing aids come with a manufacturer warranty of 1–3 years. We also provide lifetime service support and free follow-up visits.' },
  { q: 'Do you provide speech therapy services?', a: 'Yes! We have certified Speech-Language Pathologists (SLPs) who provide assessment and therapy for speech delays, stuttering, voice disorders, aphasia, and more — including home visit sessions.' },
  { q: 'Who needs speech therapy?', a: 'Speech therapy helps children with speech/language delays, adults recovering from stroke or brain injury, people with stuttering or voice disorders, and patients with swallowing difficulties (dysphagia).' },
  { q: 'What is swallow therapy (dysphagia therapy)?', a: 'Dysphagia therapy helps patients who have difficulty swallowing due to stroke, neurological conditions, or surgery. Our therapists assess and treat swallowing disorders safely at your home.' },
  { q: 'How many speech therapy sessions are needed?', a: 'It varies by condition. Mild speech delays may improve in 8–12 sessions, while complex cases like post-stroke aphasia may need 3–6 months of regular therapy. Your therapist will create a personalised plan.' },
]

const tagColors = {
  'Hearing Care': 'bg-blue-500/20 text-blue-200 border-blue-400/30',
  'Speech Therapy': 'bg-pink-500/20 text-pink-200 border-pink-400/30',
  'Swallow Therapy': 'bg-teal-500/20 text-teal-200 border-teal-400/30',
}

const StarRating = ({ count }) => (
  <div className="flex gap-0.5 justify-center">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

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

const Home = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const prev = () => setTestimonialIndex(i => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setTestimonialIndex(i => (i === testimonials.length - 1 ? 0 : i + 1))

  return (
    <div className="pt-20">

      {/* ── HERO ── */}
      <section className="bg-hero relative text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-teal-500/20 text-teal-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-teal-400/30">
                🎧 India's Trusted Hearing & Speech Care
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Better Hearing &
                <span className="block text-teal-300">Clearer Speech</span>
                <span className="block text-3xl sm:text-4xl mt-2 text-blue-200">Starts at Home</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-w-lg leading-relaxed">
                Professional hearing tests, hearing aid fittings, speech therapy, and swallow rehabilitation — all delivered to your doorstep. Trusted by over 10,000 families across India.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact"
                  className="bg-teal-500 hover:bg-teal-400 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5">
                  Book Free Assessment
                </Link>
                <Link to="/speech-therapy"
                  className="bg-pink-600 hover:bg-pink-500 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200">
                  Speech Therapy
                </Link>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200">
                  WhatsApp Us
                </a>
              </div>
              <div className="flex gap-8 mt-10">
                {[['10,000+', 'Happy Patients'], ['15+', 'Years Experience'], ['4', 'Premium Brands']].map(([num, label]) => (
                  <div key={label}>
                    <div className="text-2xl font-extrabold text-teal-300">{num}</div>
                    <div className="text-xs text-blue-200 font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                  <div className="w-24 h-24 bg-teal-400/30 rounded-full flex items-center justify-center border-4 border-teal-300/50">
                    <svg className="w-12 h-12 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <p className="text-center text-white font-semibold text-lg">Professional Care</p>
                  <p className="text-center text-blue-200 text-sm">Hearing & Speech at your doorstep</p>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {['Free Test', 'Home Visit', 'Speech Therapy', 'Expert Fitting'].map(tag => (
                      <span key={tag} className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Our Services</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Complete hearing and speech care — from hearing assessments and aid fittings to speech therapy and swallowing treatment — all delivered from the comfort of your home.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-teal-100">
                  <img src={s.img} alt={s.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = 'none' }} />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Book Online', desc: 'Fill the form or WhatsApp us to schedule your free hearing test or speech assessment.' },
              { step: '02', title: 'Home Visit', desc: 'Our audiologist or speech therapist visits your home with professional equipment.' },
              { step: '03', title: 'Get Assessed', desc: 'Complete hearing or speech evaluation in 30–45 minutes with detailed report.' },
              { step: '04', title: 'Start Treatment', desc: 'Get your hearing aid fitted or begin your personalised therapy plan the same day.' },
            ].map((item, i) => (
              <div key={item.step} className="text-center relative">
                {i < 3 && <div className="hidden lg:block absolute top-8 left-3/4 w-1/2 h-0.5 bg-blue-100" />}
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-extrabold mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">World Class</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Brands We Carry</h2>
            <p className="text-gray-500 mt-3">We stock all leading international hearing aid brands.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {brands.map((brand) => (
              <Link key={brand.name} to={`/brands#${brand.name.toLowerCase()}`}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 bg-gradient-to-br ${brand.color} rounded-xl flex items-center justify-center shadow-sm`}>
                  <span className="text-white font-extrabold text-lg">{brand.name[0]}</span>
                </div>
                <span className="font-bold text-gray-800 text-sm group-hover:text-blue-700 transition-colors">{brand.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Range</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Popular Hearing Aids</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">From basic to advanced — we have the right hearing aid for every need and budget.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`${p.color} h-48 overflow-hidden relative`}>
                  <img src={p.img} alt={p.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = 'none' }} />
                  <span className="absolute top-3 left-3 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    {p.badge}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 font-medium mb-1">{p.type}</p>
                  <h3 className="font-bold text-gray-900 text-base mb-3">{p.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-700 font-extrabold text-lg">Starting {p.price}</span>
                  </div>
                  <Link to="/contact"
                    className="mt-4 block text-center bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white text-sm font-bold py-2.5 rounded-xl transition-all duration-200">
                    Get Free Trial
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/prices" className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-3 rounded-xl transition-all duration-200">
              View All Prices
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-300 font-semibold text-sm uppercase tracking-wider">Real Stories</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">What Our Patients Say</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-white/20 text-center min-h-64">
              {testimonials[testimonialIndex].tag && (
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 border ${tagColors[testimonials[testimonialIndex].tag]}`}>
                  {testimonials[testimonialIndex].tag}
                </span>
              )}
              <StarRating count={testimonials[testimonialIndex].rating} />
              <p className="text-lg text-blue-100 mt-5 mb-6 leading-relaxed italic">
                "{testimonials[testimonialIndex].text}"
              </p>
              <div>
                <p className="font-bold text-white text-lg">{testimonials[testimonialIndex].name}</p>
                <p className="text-blue-300 text-sm">Age {testimonials[testimonialIndex].age} · {testimonials[testimonialIndex].city}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} className="w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setTestimonialIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-200 ${i === testimonialIndex ? 'bg-teal-400 w-6' : 'bg-white/30 w-2.5'}`} />
                ))}
              </div>
              <button onClick={next} className="w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Hear Better & Speak Clearly?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
            Book your free hearing test or speech assessment today. Our expert will come to you — no travel, no hassle.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact"
              className="bg-white text-blue-700 hover:bg-teal-50 font-extrabold text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-200 hover:-translate-y-0.5">
              Book Free Hearing Test
            </Link>
            <Link to="/speech-therapy"
              className="bg-pink-600 hover:bg-pink-500 text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-200">
              Speech Therapy Info
            </Link>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-200">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home