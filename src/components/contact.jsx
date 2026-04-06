export default function Contact() {
  return (
    <section id="contact" className="py-32 relative reveal bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 font-display">Let&apos;s Work Together</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <a href="mailto:ansaritamanna23102006@gmail.com" target="_blank" rel="noopener noreferrer"
            className="bg-light rounded-3xl p-8 card-hover shadow-lg text-center">
            <div className="w-16 h-16 rounded-full bg-white mx-auto mb-4 flex items-center justify-center">
              <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
                <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
                <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
                <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
                <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
                <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0C43.076,8,45,9.924,45,12.298z"/>
              </svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Email</h4>
            <p className="text-sm text-gray-600">Contact with me</p>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/tamanna-ansari-36832939a" target="_blank" rel="noopener noreferrer"
            className="bg-light rounded-3xl p-8 card-hover shadow-lg text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <h4 className="font-bold text-lg mb-2">LinkedIn</h4>
            <p className="text-sm text-gray-600">Connect with me</p>
          </a>

          {/* GitHub */}
          <a href="https://github.com/ansaritamanna23102006-debug" target="_blank" rel="noopener noreferrer"
            className="bg-light rounded-3xl p-8 card-hover shadow-lg text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h4 className="font-bold text-lg mb-2">GitHub</h4>
            <p className="text-sm text-gray-600">View my code</p>
          </a>
        </div>
      </div>
    </section>
  );
}
