import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slideUp font-display leading-tight">
              Hi, I&apos;m <br /><span className="gradient-text">Tamanna</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              Creative Web Developer & UI/UX Designer crafting beautiful digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <a href="#projects" className="btn-primary px-8 py-4 rounded-full text-white font-bold text-center">View Projects</a>
              <a href="#contact" className="btn-secondary px-8 py-4 rounded-full text-white font-bold text-center">Let&apos;s Connect</a>
            </div>
          </div>

          <div className="relative animate-scaleIn" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <Image src="/tamanna.jpeg" alt="Tamanna Ansari" fill className="object-cover" priority />
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-accent animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-secondary opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
