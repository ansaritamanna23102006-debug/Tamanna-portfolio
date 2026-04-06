export default function About() {
  return (
    <section id="about" className="py-32 relative reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 font-display">Who I Am</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I&apos;m currently pursuing a <span className="font-bold text-primary">Bachelor&apos;s degree in Artificial Intelligence & Machine Learning</span> at{' '}
              <span className="font-bold text-secondary">Nexcore Institute of Technology</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My passion lies in creating <span className="font-bold text-primary">intuitive web interfaces</span> and{' '}
              <span className="font-bold text-secondary">aesthetically pleasing designs</span> that deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: '10+', label: 'Projects Completed' },
              { value: '6+', label: 'Skills Mastered' },
              { value: '8+', label: 'Certifications' },
              { value: '∞', label: 'Ideas & Dreams' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white rounded-3xl p-8 shadow-xl text-center card-hover">
                <div className="text-5xl font-bold gradient-text font-display mb-2">{value}</div>
                <div className="text-gray-600 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
