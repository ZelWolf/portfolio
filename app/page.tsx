export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden grid-bg">
      
      {/* Background Gradient Orbs for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Main Layout Container */}
      <main className="relative max-w-3xl mx-auto px-6 py-20 space-y-24">
        
        {/* --- HERO SECTION --- */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-sm shadow-blue-500/5">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Available for AI & Systems Engineering Roles
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Ananay Chaudhry
            </h1>
            <p className="text-base sm:text-lg font-mono text-blue-400/90 tracking-tight flex items-center gap-2">
              <span>AI Engineer</span>
              <span className="text-slate-700">//</span>
              <span>MLOps</span>
              <span className="text-slate-700">//</span>
              <span>Cloud Security Automation</span>
            </p>
          </div>
          
          <p className="text-slate-400 max-w-xl leading-relaxed text-sm sm:text-base">
            Building robust machine learning infrastructure, high-throughput pipeline architectures, and secure AI evaluation guardrails. Focused on reliability and defensive design.
          </p>
          
          {/* Custom Action Button Badges */}
          <div className="flex flex-wrap gap-3 pt-2 font-mono text-xs">
            <a href="/resume.pdf" target="_blank" className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-blue-400 hover:border-blue-500/40 hover:text-blue-300 transition-all">
              $ cat resume.pdf
            </a>
            <a href="https://github.com" target="_blank" className="px-3 py-1.5 rounded bg-slate-900/40 border border-slate-900 text-slate-400 hover:border-slate-800 hover:text-slate-200 transition-all">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" className="px-3 py-1.5 rounded bg-slate-900/40 border border-slate-900 text-slate-400 hover:border-slate-800 hover:text-slate-200 transition-all">
              LinkedIn
            </a>
          </div>
        </section>

        {/* --- INTERACTIVE TERMINAL SECTION --- */}
        <section className="border border-slate-800 bg-slate-900/30 rounded-xl overflow-hidden backdrop-blur-md font-mono text-xs sm:text-sm shadow-2xl shadow-blue-950/20">
          <div className="bg-slate-900/80 px-4 py-3 flex items-center justify-between border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></div>
              <span className="text-xs text-slate-500 ml-2 select-none">ananay@cybertron:~</span>
            </div>
            <span className="text-[10px] text-slate-600 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">bash</span>
          </div>
          <div className="p-5 sm:p-6 space-y-5 leading-relaxed">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">ananay@cybertron</span>
                <span className="text-slate-500">:~#</span>
                <span className="text-slate-200">whoami</span>
              </div>
              <p className="text-slate-400 mt-1.5 pl-4 border-l border-slate-800">
                AI Engineering specialist designing clean backend telemetry, operational MLOps pipelines, and secure model integrations.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">ananay@cybertron</span>
                <span className="text-slate-500">:~#</span>
                <span className="text-slate-200">cat infrastructure.json</span>
              </div>
              <pre className="text-emerald-400/90 mt-2 overflow-x-auto text-xs bg-slate-950/80 p-4 rounded-lg border border-slate-900/60 leading-5 font-mono">
{`{
  "focus_vectors": ["LLM Guardrails", "PII Redaction Engines", "Data Ingestion Automation"],
  "design_motto": "Build defensively. Isolate failures. Log metrics.",
  "availability": "Graduating 2026 // Targeting Global Engineering Roles"
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* --- CORE PRODUCTION PROJECTS --- */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold tracking-tight flex items-center gap-2 text-slate-200">
            <span className="text-blue-500 font-mono text-base">&gt;</span> Core Engineering Repositories
          </h2>
          
          <div className="grid gap-6">
            
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-900/20 hover:border-slate-800 hover:bg-slate-900/40 transition-all duration-300 group relative">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <h3 className="text-base font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                    DataShield
                  </h3>
                  <p className="text-xs font-mono text-slate-500">Automated Sensitive Data Redaction Pipeline</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 tracking-wide uppercase whitespace-nowrap">
                  Hackathon
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                Designed an automated high-throughput privacy processing framework to intercept unstructured context payloads, programmatically stripping/masking PII configurations to safeguard backend training contexts against implicit data leakage vectors.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400">Python</span>
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400">RegexPipeline</span>
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400">SecurityAutomation</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-900/20 hover:border-slate-800 hover:bg-slate-900/40 transition-all duration-300 group relative">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <h3 className="text-base font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                    SentinelSQL & DocuSentinel
                  </h3>
                  <p className="text-xs font-mono text-slate-500">Enterprise AI Compliance Auditor & Secure Text-to-SQL Engine</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 tracking-wide uppercase whitespace-nowrap">
                  Architecture
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                Engineered a dual-framework engine utilizing structural vector mappings (ChromaDB/Pinecone) and LangChain layers to parse incoming human-language string commands into verified SQL code blocks while executing strict programmatic validation filters.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400">LangChain</span>
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400">VectorDB</span>
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400">ChromaDB</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-900/20 hover:border-slate-800 hover:bg-slate-900/40 transition-all duration-300 group relative">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <h3 className="text-base font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                    Industrial Support Classification Pipeline
                  </h3>
                  <p className="text-xs font-mono text-slate-500">End-to-End Production ML Intent Routing Engine</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wide uppercase whitespace-nowrap">
                  Production
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                Architected a robust classification preprocessing lifecycle to tokenize, cleanse, and run token sequence mapping on real-world inbound system logging metrics, achieving clean automated downstream execution triggers.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400">Scikit-Learn</span>
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400">NLP Pipelines</span>
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400">Tokenization</span>
              </div>
            </div>

          </div>
        </section>

        {/* --- TECHNICAL SKILL MATRIX --- */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold tracking-tight flex items-center gap-2 text-slate-200">
            <span className="text-blue-500 font-mono text-base">&gt;</span> Core Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-mono">
            <div className="p-5 rounded-xl border border-slate-900 bg-slate-900/10 space-y-3">
              <div className="text-blue-400 font-semibold tracking-wider uppercase text-[11px]">AI Execution & Systems</div>
              <div className="text-slate-400 leading-relaxed">
                Python, PyTorch, LangChain, LlamaIndex, Scikit-Learn, Pandas, NumPy, Vector Repositories (ChromaDB, Pinecone)
              </div>
            </div>
            <div className="p-5 rounded-xl border border-slate-900 bg-slate-900/10 space-y-3">
              <div className="text-blue-400 font-semibold tracking-wider uppercase text-[11px]">MLOps & Delivery Environments</div>
              <div className="text-slate-400 leading-relaxed">
                Docker Engine, Git/GitHub Version Isolation, CI/CD Automations (GitHub Actions), Linux/WSL Architecture, SQL Engine Topologies
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="pt-12 border-t border-slate-900 text-center text-xs font-mono text-slate-600">
          <p>© {new Date().getFullYear()} // Engineered using Next.js & Tailwind CSS.</p>
        </footer>

      </main>
    </div>
  );
}