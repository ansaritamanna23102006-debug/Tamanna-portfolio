import Image from 'next/image';

const aiCerts = [
  { title: 'AI Appreciate Badge', desc: 'Awarded for outstanding appreciation of AI concepts', image: '/Tamanna_AI_APPRECIATE_BADGE.png', gradient: 'from-yellow-400 to-orange-500' },
  { title: 'AI Appreciate Certificate', desc: 'Certificate of appreciation in Artificial Intelligence', image: '/Tamanna_AI_APPRECIATE_CERTIFICATE.png', gradient: 'from-blue-400 to-indigo-500' },
  { title: 'AI Aware Badge', desc: 'Recognized for AI awareness and foundational knowledge', image: '/Tamanna_AI_AWARE_BADGE.png', gradient: 'from-green-400 to-teal-500' },
  { title: 'AI Aware Certificate', desc: 'Certificate of AI awareness and understanding', image: '/Tamanna_AI_AWARE_CERTIFICATE.png', gradient: 'from-pink-400 to-red-500' },
];

const anthropicCerts = [
  { title: 'AI Fluency for Educators', desc: 'Empowering educators with AI tools and knowledge', image: '/AI educators.png', gradient: 'from-violet-500 to-purple-700' },
  { title: 'AI Fluency:Framework & Foundations', desc: 'Understanding AI frameworks and architectures', image: '/AI Framework.png', gradient: 'from-purple-500 to-pink-600' },
  { title: 'AIFluency for nonprofits', desc: 'Applying AI for social good and nonprofit impact', image: '/AI nonprofits.png', gradient: 'from-indigo-500 to-violet-600' },
  { title: 'AI Fluency for students', desc: 'AI learning program for students and learners', image: '/AI students.png', gradient: 'from-fuchsia-500 to-purple-600' },
  { title: 'Claude 101', desc: 'Foundations of working with Claude AI models', image: '/Claude101.png', gradient: 'from-purple-400 to-indigo-600' },
  { title: 'Teaching the AI Fluency Framework', desc: 'Techniques for training and teaching AI systems', image: '/Teaching the AI.png', gradient: 'from-violet-400 to-fuchsia-500' },
];

function CertCard({ title, desc, image, gradient, badge, badgeColor }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl card-hover">
      <div className={`relative w-full h-56 bg-gradient-to-br ${gradient} overflow-hidden`}>
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 text-center">
        <h4 className="text-xl font-bold mb-3 font-display">{title}</h4>
        <p className="text-gray-600 text-sm mb-4">{desc}</p>
        <div className={`inline-block px-4 py-2 rounded-full bg-light text-xs font-semibold ${badgeColor}`}>{badge}</div>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 relative reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Achievements</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 font-display">AI Certifications & Badges</h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Continuous learning and professional development in AI and emerging technologies
          </p>
        </div>

        {/* AI Certs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {aiCerts.map(c => <CertCard key={c.title} {...c} badge="Certified" badgeColor="text-primary" />)}
        </div>

        {/* Anthropic Certs */}
        <div className="text-center mb-10">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider">Anthropic</span>
          <h3 className="text-3xl md:text-4xl font-bold mt-3 font-display gradient-text">Anthropic Certifications</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {anthropicCerts.map(c => <CertCard key={c.title} {...c} badge="Anthropic" badgeColor="text-secondary" />)}
        </div>
      </div>
    </section>
  );
}
