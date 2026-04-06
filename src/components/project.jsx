import Image from 'next/image';

const devProjects = [
  {
    title: 'Pinterest Clone',
    description: "A comprehensive web application recreating Pinterest's core functionality with modern design patterns and interactive UI components.",
    tags: ['HTML', 'Tailwind', 'UI/UX'],
    image: '/pinterest.png',
    codeUrl: 'https://github.com/ansaritamanna23102006-debug',
    outputUrl: null,
  },
  {
    title: 'Travel HomePage',
    description: 'Designing journeys through clean code and modern UI — a travel homepage built with HTML & Tailwind.',
    tags: ['HTML', 'Tailwind', 'UI/UX'],
    image: '/wonder.png',
    codeUrl: 'https://github.com/ansaritamanna23102006-debug',
    outputUrl: null,
  },
];

const figmaProjects = [
  {
    title: 'Blinkit Clone', tag: 'Mobile App', image: '/blinkit.png',
    description: 'A modern redesign of the Blinkit grocery delivery app focusing on improved user experience, streamlined navigation, and intuitive checkout flow.',
    figmaUrl: 'https://www.figma.com/design/YOUR_BLINKIT_FILE_ID',
  },
  {
    title: 'Gozoop', tag: 'Website', image: '/gozoop.png',
    description: 'A creative agency website design showcasing portfolio work with stunning visuals and smooth animations.',
    figmaUrl: 'https://www.figma.com/design/YOUR_GOZOOP_FILE_ID',
  },
  {
    title: 'Urban Edge Clone', tag: 'Website', image: '/urban.png',
    description: 'An e-commerce platform design featuring a clean product catalog, advanced filtering system, and seamless checkout experience.',
    figmaUrl: 'https://www.figma.com/design/YOUR_URBAN_FILE_ID',
  },
  {
    title: 'Travel Website', tag: 'Travel', image: '/travel.png',
    description: 'A travel booking platform with immersive destination galleries, interactive maps, and smart itinerary planning.',
    figmaUrl: 'https://www.figma.com/design/YOUR_TRAVEL_FILE_ID',
  },
  {
    title: 'Red Bus Clone', tag: 'Website', image: '/red bus.png',
    description: 'A bus booking platform redesign with intuitive search, seat selection visualization, and real-time availability.',
    figmaUrl: 'https://www.figma.com/design/YOUR_REDBUS_FILE_ID',
  },
];

export default function Projects({ openProjectModal }) {
  return (
    <section id="projects" className="py-32 relative reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 font-display">Featured Work</h2>
        </div>

        {/* Dev Projects */}
        {devProjects.map((p) => (
          <div key={p.title} className="mb-20">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl card-hover">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-black text-sm font-bold mb-4">
                    💻 Featured Project
                  </div>
                  <h3 className="text-4xl font-bold mb-4 font-display">{p.title}</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {p.tags.map(t => <span key={t} className="px-4 py-2 rounded-full bg-light text-sm font-semibold">{t}</span>)}
                  </div>
                </div>
                <div
                  className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl relative cursor-pointer"
                  onClick={() => openProjectModal({ kind: 'dev', title: p.title, image: p.image, codeUrl: p.codeUrl, outputUrl: p.outputUrl })}
                >
                  <Image src={p.image} alt={p.title} fill className="project-image object-cover" />
                  <div className="project-overlay"><div className="zoom-text">🔍 Click to Zoom</div></div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Figma Projects */}
        <h3 className="text-3xl font-bold mb-8 font-display gradient-text">🎨 UI/UX Designs</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {figmaProjects.map((p) => (
            <div key={p.title} className="project-card bg-white rounded-3xl overflow-hidden shadow-xl"
              onClick={() => openProjectModal({ kind: 'figma', title: p.title, image: p.image, description: p.description, figmaUrl: p.figmaUrl })}>
              <div className="aspect-video overflow-hidden relative">
                <Image src={p.image} alt={p.title} fill className="project-image object-cover" />
                <div className="project-overlay"><div className="zoom-text">🔍 Click to View</div></div>
              </div>
              <div className="p-6 project-content">
                <span className="text-xs font-bold text-primary uppercase">{p.tag}</span>
                <h4 className="text-2xl font-bold mt-2 mb-3 font-display">{p.title}</h4>
                <p className="text-gray-600 mb-4">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
