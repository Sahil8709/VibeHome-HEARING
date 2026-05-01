import { Link } from 'react-router-dom'

const HearingAids = () => (
  <div className="pt-20">
    <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Hearing Aids Guide</h1>
        <p className="text-blue-100 text-lg">Everything you need to know about hearing aids and hearing loss.</p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <div id="what-is">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">What is a Hearing Aid?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">A hearing aid is a small electronic device worn in or behind the ear. It amplifies certain sounds so a person with hearing loss can listen, communicate, and participate more fully in daily activities.</p>
          <p className="text-gray-600 leading-relaxed">Modern hearing aids are sophisticated digital devices that can automatically adjust to different sound environments, connect to smartphones via Bluetooth, and even track your health.</p>
        </div>

        <div id="hearing-loss">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">Understanding Hearing Loss</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { level: 'Mild', db: '26–40 dB', desc: 'Difficulty hearing soft sounds and whispered speech.' },
              { level: 'Moderate', db: '41–70 dB', desc: 'Difficulty with normal conversation, especially in noise.' },
              { level: 'Severe', db: '71+ dB', desc: 'Difficulty hearing loud speech and most environmental sounds.' },
            ].map((item) => (
              <div key={item.level} className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="text-blue-700 font-extrabold text-xl mb-1">{item.level}</div>
                <div className="text-teal-600 font-semibold text-sm mb-3">{item.db}</div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {[
          { id: 'bluetooth', title: 'Bluetooth Hearing Aids', content: 'Modern Bluetooth hearing aids connect wirelessly to smartphones, TVs, and other devices. You can stream music, phone calls, and TV audio directly into your hearing aids. Popular Bluetooth models include Phonak Paradise, Signia AX, and Oticon More.' },
          { id: 'seniors', title: 'Hearing Aids for Senior Citizens', content: 'For elderly patients, we recommend easy-to-handle BTE or ITE styles with simple controls, long battery life, and rechargeable options to avoid small battery handling. Our home visit service is specifically designed to make the process hassle-free for seniors.' },
          { id: 'children', title: 'Hearing Aids for Children', content: 'Children require specially designed hearing aids that are durable, comfortable, and provide precise amplification for speech development. We work with paediatric audiologists to ensure proper fitting and follow-up for young patients.' },
          { id: 'tinnitus', title: 'Hearing Aids for Tinnitus', content: 'Many hearing aids now include tinnitus masking features that generate gentle sounds to reduce the perception of ringing or buzzing in the ears. Brands like Signia and Widex have specialised tinnitus therapy features built into their devices.' },
        ].map(section => (
          <div id={section.id} key={section.id}>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">{section.title}</h2>
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          </div>
        ))}

        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-10 text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Ready to find your perfect hearing aid?</h2>
          <p className="text-blue-100 mb-6">Book a free hearing test and get expert guidance tailored to your needs.</p>
          <Link to="/contact" className="inline-block bg-white text-blue-700 font-extrabold px-8 py-3 rounded-2xl hover:bg-blue-50 transition-colors">
            Book Free Hearing Test
          </Link>
        </div>
      </div>
    </section>
  </div>
)

export default HearingAids