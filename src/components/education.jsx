const timeline = [
  {
    year: 'Present',
    degree: 'B.Voc in AI & ML',
    school: 'Nexcore Institute of Technology',
    location: 'Specializing in Artificial Intelligence and Machine Learning with hands-on projects and industry-relevant curriculum.',
    gradient: 'from-green-400 to-emerald-500',
    pulse: true,
    side: 'right',
  },
  {
    year: '2023',
    degree: '12th Standard',
    school: 'National High School & Jr. College',
    location: 'Dapoli, Ratnagiri',
    gradient: 'from-blue-400 to-cyan-500',
    pulse: false,
    side: 'left',
  },
  {
    year: '2021',
    degree: '10th Standard (CBSE)',
    school: 'RPVV, Gandhi Nagar',
    location: 'Delhi',
    gradient: 'from-purple-400 to-pink-500',
    pulse: false,
    side: 'right',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 relative reveal bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Academic Journey</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 font-display">Education</h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {timeline.map(({ year, degree, school, location, gradient, pulse, side }) => {
              const isRight = side === 'right';
              return (
                <div key={degree} className="relative">
                  <div className={`md:flex md:items-center ${!isRight ? 'md:flex-row-reverse' : ''}`}>
                    {/* Dot */}
                    <div className={`absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-br ${gradient} border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10 ${pulse ? 'animate-pulse' : ''}`}></div>

                    {/* Year badge (desktop opposite side) */}
                    <div className={`hidden md:block md:w-1/2 ${isRight ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${gradient} text-white text-sm font-bold`}>{year}</div>
                    </div>

                    {/* Card */}
                    <div className={`md:w-1/2 ${isRight ? 'md:pl-12' : 'md:pr-12'} ml-20 md:ml-0`}>
                      <div className="bg-light rounded-3xl p-6 md:p-8 shadow-xl card-hover relative overflow-hidden">
                        <div className={`absolute ${isRight ? 'top-0 right-0 rounded-bl-full' : 'top-0 left-0 rounded-br-full'} w-24 h-24 bg-gradient-to-br ${gradient} opacity-10`}></div>
                        <div className="relative z-10">
                          <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${gradient} text-white text-xs font-bold mb-3 md:hidden`}>{year}</div>
                          <h3 className="text-xl md:text-2xl font-bold mb-2 font-display gradient-text">{degree}</h3>
                          <p className="text-base md:text-lg text-gray-700 font-semibold mb-2">{school}</p>
                          <p className="text-sm text-gray-600">{location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
