'use client';
import Image from 'next/image';

export default function ProjectModal({ selectedProject, activeTab, setActiveTab, zoomLevel, handleZoomIn, handleZoomOut, closeProjectModal }) {
  if (!selectedProject) return null;

  return (
    <div className="image-modal" onClick={closeProjectModal}>
      <button className="close-btn" onClick={closeProjectModal}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {selectedProject.kind === 'dev' && (
        <div className="modal-tabs">
          <button className={`modal-tab ${activeTab === 'preview' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setActiveTab('preview'); }}>🖼️ Preview</button>
          {selectedProject.codeUrl && <button className={`modal-tab ${activeTab === 'code' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setActiveTab('code'); }}>💻 Code</button>}
          {selectedProject.outputUrl && <button className={`modal-tab ${activeTab === 'output' ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setActiveTab('output'); }}>🚀 Live Output</button>}
        </div>
      )}

      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {selectedProject.kind === 'figma' ? (
          <div className="modal-content-wrapper">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-3 text-dark font-display">{selectedProject.title}</h3>
              {selectedProject.description && <p className="text-gray-600 text-lg mb-4">{selectedProject.description}</p>}
              {selectedProject.figmaUrl && (
                <a href={selectedProject.figmaUrl} target="_blank" rel="noreferrer" className="btn-primary px-6 py-3 rounded-full text-white font-semibold inline-flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 2C6.34 2 5 3.34 5 5s1.34 3 3 3h3V2H8zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3v-3H8zm8-8h-3v6h3c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-3 8v3c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3h-3zm0 5c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3h3v3z"/>
                  </svg>
                  Open in Figma
                </a>
              )}
            </div>
            {selectedProject.figmaUrl ? (
              <div style={{ width: '100%', height: '65vh', borderRadius: '10px', overflow: 'hidden' }}>
                <iframe src={"https://www.figma.com/embed?embed_host=share&url=" + encodeURIComponent(selectedProject.figmaUrl)} style={{ width: '100%', height: '100%', border: 'none' }} title={selectedProject.title} />
              </div>
            ) : (
              <div className="modal-image-container" style={{ transform: `scale(${zoomLevel})` }}>
                <Image src={selectedProject.image} alt={selectedProject.title} width={1920} height={1080} className="max-w-full h-auto" style={{ objectFit: 'contain' }} />
              </div>
            )}
          </div>
        ) : selectedProject.kind === 'dev' ? (
          <div className="modal-content-wrapper">
            {activeTab === 'preview' && (
              <div className="modal-image-container" style={{ transform: `scale(${zoomLevel})` }}>
                <Image src={selectedProject.image} alt={selectedProject.title} width={1920} height={1080} className="max-w-full h-auto" style={{ objectFit: 'contain' }} />
              </div>
            )}
            {activeTab === 'code' && selectedProject.codeUrl && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-dark">Source Code</h3>
                <p className="text-gray-600 mb-4">View the complete source code on GitHub</p>
                <a href={selectedProject.codeUrl} target="_blank" rel="noreferrer" className="btn-primary px-6 py-3 rounded-full text-white font-semibold inline-block mb-6">Open on GitHub →</a>
                <div className="code-container">
                  <pre>{`// ${selectedProject.title}\n// Visit the GitHub repository to explore the full source code →`}</pre>
                </div>
              </div>
            )}
            {activeTab === 'output' && selectedProject.outputUrl && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-dark">Live Output</h3>
                <iframe src={selectedProject.outputUrl} className="output-container" title={selectedProject.title} />
                <a href={selectedProject.outputUrl} target="_blank" rel="noreferrer" className="btn-secondary px-6 py-3 rounded-full text-white font-semibold inline-block mt-4">Open in New Tab →</a>
              </div>
            )}
          </div>
        ) : (
          <div className="modal-image-container">
            <Image src={selectedProject.image} alt={selectedProject.title} width={1920} height={1080} className="max-w-full h-auto" style={{ objectFit: 'contain' }} />
          </div>
        )}
      </div>

      {((selectedProject.kind === 'dev' && activeTab === 'preview') || (selectedProject.kind === 'figma' && !selectedProject.figmaUrl)) && (
        <div className="zoom-controls">
          <button className="zoom-btn" onClick={handleZoomOut}>−</button>
          <span className="zoom-level-text">{Math.round(zoomLevel * 100)}%</span>
          <button className="zoom-btn" onClick={handleZoomIn}>+</button>
        </div>
      )}
    </div>
  );
}
