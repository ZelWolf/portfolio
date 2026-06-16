"use client"; // Required for Framer Motion and TypeAnimation in Next.js App Router

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chaudhryananay@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset button after 2 seconds
  };

  // Reusable animation configuration for sections
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden grid-bg select-none">
      
      {/* Background Gradient Orbs for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Main Layout Container */}
      <main className="relative max-w-3xl mx-auto px-6 py-20 space-y-24">
        
        {/* --- HERO SECTION --- */}
        <motion.section {...fadeInUp} className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-sm shadow-blue-500/5">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Available for AI & Systems Engineering Roles
            </div>
            
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Ananay Chaudhry
              </h1>
              <div className="text-base sm:text-lg font-mono text-blue-400/90 tracking-tight flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>AI Infrastructure Engineer</span>
                <span className="text-slate-700">•</span>
                <span>MLOps</span>
                <span className="text-slate-700">•</span>
                <span>LLM Systems</span>
                <span className="text-slate-700">•</span>
                <span>Security</span>
              </div>
            </div>
            
            <p className="text-slate-400 max-w-xl leading-relaxed text-sm sm:text-base">
              Building robust machine learning infrastructure, high-throughput pipeline architectures, and secure AI evaluation guardrails. Focused on reliability and defensive design.
            </p>
            
            {/* Upgraded Call-To-Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 font-mono text-sm">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all font-medium flex items-center gap-2">
                <span className="text-blue-500/60">$</span> cat resume.pdf
              </a>
              <a href="https://github.com/ZelWolf" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:bg-slate-800 hover:border-slate-600 hover:text-slate-200 transition-all font-medium">
                GitHub
              </a>
              <a href="https://linkedin.com/in/ananaychaudhry" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:bg-slate-800 hover:border-slate-600 hover:text-slate-200 transition-all font-medium">
                LinkedIn
              </a>
              <button 
                onClick={handleCopyEmail}
                className="px-5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:bg-slate-800 hover:border-slate-600 hover:text-slate-200 transition-all font-medium"
              >
                {copied ? "Copied!" : "Email"}
              </button>
            </div>
          </div>
        </motion.section>

        {/* --- INTERACTIVE TERMINAL SECTION --- */}
        <motion.section {...fadeInUp} className="border border-slate-800 bg-slate-900/30 rounded-xl overflow-hidden backdrop-blur-md font-mono text-xs sm:text-sm shadow-2xl shadow-blue-950/20">
          <div className="bg-slate-900/80 px-4 py-3 flex items-center justify-between border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></div>
              <span className="text-xs text-slate-500 ml-2 select-none">ananay@ZelWolf:~</span>
            </div>
            <span className="text-[10px] text-slate-600 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">bash</span>
          </div>
          <div className="p-5 sm:p-6 space-y-5 leading-relaxed">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">ananay@ZelWolf</span>
                <span className="text-slate-500">:~#</span>
                <TypeAnimation
                  sequence={['whoami', 1000]}
                  wrapper="span"
                  cursor={true}
                  className="text-slate-200"
                />
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="text-slate-400 mt-1.5 pl-4 border-l border-slate-800"
              >
                AI Engineering specialist designing clean backend telemetry, operational MLOps pipelines, and secure model integrations.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">ananay@cybertron</span>
                <span className="text-slate-500">:~#</span>
                <TypeAnimation
                  sequence={['', 2500, 'cat infrastructure.json', 1000]}
                  wrapper="span"
                  cursor={true}
                  className="text-slate-200"
                />
              </div>
              <motion.pre 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 0.5 }}
                className="text-emerald-400/90 mt-2 overflow-x-auto text-xs bg-slate-950/80 p-4 rounded-lg border border-slate-900/60 leading-5 font-mono"
              >
{`{
  "focus_vectors": ["LLM Guardrails", "PII Redaction Engines", "Data Ingestion Automation"],
  "design_motto": "Build defensively. Isolate failures. Log metrics.",
  "availability": "Graduating 2026 // Targeting Global Engineering Roles"
}`}
              </motion.pre>
            </motion.div>
          </div>
        </motion.section>

        {/* --- CORE PRODUCTION PROJECTS --- */}
        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="text-lg font-semibold tracking-tight flex items-center gap-2 text-slate-200">
            <span className="text-blue-500 font-mono text-base">&gt;</span> Engineering Repositories
          </h2>
          
          <div className="grid gap-6">
            
            {/* Project 1: Financial Copilot */}
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-900/20 hover:border-slate-800/80 hover:bg-slate-900/40 hover:-translate-y-1 transition-all duration-300 group relative shadow-md hover:shadow-xl hover:shadow-blue-950/10">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <h3 className="text-base font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                    Financial Insights Copilot
                  </h3>
                  <p className="text-xs font-mono text-slate-500">An AI-Powered 10-K Analyzer Microservice</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 tracking-wide uppercase whitespace-nowrap">
                  RAG Architecture
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                Built an end-to-end intelligent extraction engine designed to digest unstructured SEC 10-K filings. Leveraged LangChain layers linked with a custom FAISS context retrieval pipeline to answer natural-language commands backed up by explicit source-citations and z-score anomaly filters.
              </p>

              {/* Custom Embedded Architecture Diagram */}
              <div className="mt-5 p-3 bg-slate-950/60 rounded-lg border border-slate-900/60 font-mono text-slate-500 overflow-x-auto scrollbar-none">
                <div className="flex items-center space-x-1.5 min-w-[620px] justify-between text-center text-[11px] tracking-tight">
                  <span className="flex items-center justify-center px-2.5 h-8 bg-slate-900 border border-slate-800 rounded text-slate-400 whitespace-nowrap">SEC Filing</span>
                  <span className="text-slate-700 font-sans select-none">→</span>
                  <span className="flex items-center justify-center px-2.5 h-8 bg-slate-900 border border-slate-800 rounded text-slate-400 whitespace-nowrap">Parser</span>
                  <span className="text-slate-700 font-sans select-none">→</span>
                  <span className="flex items-center justify-center px-2.5 h-8 bg-slate-900 border border-slate-800 rounded text-slate-400 whitespace-nowrap">Embeddings</span>
                  <span className="text-slate-700 font-sans select-none">→</span>
                  <span className="flex items-center justify-center px-3 h-8 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 font-semibold whitespace-nowrap shadow-sm shadow-blue-500/5">FAISS DB</span>
                  <span className="text-slate-700 font-sans select-none">→</span>
                  <span className="flex items-center justify-center px-2.5 h-8 bg-slate-900 border border-slate-800 rounded text-slate-400 whitespace-nowrap">LangChain</span>
                  <span className="text-slate-700 font-sans select-none">→</span>
                  <span className="flex items-center justify-center px-3 h-8 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 font-semibold whitespace-nowrap shadow-sm shadow-blue-500/5">Citation Layer</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400 hover:text-blue-400 transition-colors">FAISS</span>
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400 hover:text-blue-400 transition-colors">LangChain</span>
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400 hover:text-blue-400 transition-colors">FastAPI</span>
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400 hover:text-blue-400 transition-colors">Docker</span>
              </div>
            </div>

            {/* Project 2: MLOps Pipeline */}
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-900/20 hover:border-slate-800/80 hover:bg-slate-900/40 hover:-translate-y-1 transition-all duration-300 group relative shadow-md hover:shadow-xl hover:shadow-blue-950/10">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <h3 className="text-base font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                    Automated Demand Forecasting Pipeline
                  </h3>
                  <p className="text-xs font-mono text-slate-500">Continuous Integration & Lineage Production MLOps Engine</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 tracking-wide uppercase whitespace-nowrap">
                  Production MLOps
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                Architected an end-to-end self-correcting MLOps pipeline automating retraining and model registration triggers via GitHub Actions. Tracks full experimental lineage using DVC and MLflow, serving production-grade containerized XGBoost microservices monitored continuously by Evidently AI for data and concept drift telemetry.
              </p>

              {/* Custom Embedded MLOps Architecture Diagram */}
              <div className="mt-5 p-3 bg-slate-950/60 rounded-lg border border-slate-900/60 font-mono text-slate-500 overflow-x-auto scrollbar-none">
                <div className="flex items-center space-x-1.5 min-w-[620px] justify-between text-center text-[11px] tracking-tight">
                  <span className="flex items-center justify-center px-2.5 h-8 bg-slate-900 border border-slate-800 rounded text-slate-400 whitespace-nowrap">Data Ingestion</span>
                  <span className="text-slate-700 font-sans select-none">→</span>
                  <span className="flex items-center justify-center px-3 h-8 bg-purple-500/10 border border-purple-500/30 rounded text-purple-400 font-semibold whitespace-nowrap shadow-sm shadow-purple-500/5">DVC Lineage</span>
                  <span className="text-slate-700 font-sans select-none">→</span>
                  <span className="flex items-center justify-center px-2.5 h-8 bg-slate-900 border border-slate-800 rounded text-slate-400 whitespace-nowrap">GitHub Actions</span>
                  <span className="text-slate-700 font-sans select-none">→</span>
                  <span className="flex items-center justify-center px-2.5 h-8 bg-slate-900 border border-slate-800 rounded text-slate-400 whitespace-nowrap">MLflow Tracking</span>
                  <span className="text-slate-700 font-sans select-none">→</span>
                  <span className="flex items-center justify-center px-2.5 h-8 bg-slate-900 border border-slate-800 rounded text-slate-400 whitespace-nowrap">Docker API</span>
                  <span className="text-slate-700 font-sans select-none">→</span>
                  <span className="flex items-center justify-center px-3 h-8 bg-purple-500/10 border border-purple-500/30 rounded text-purple-400 font-semibold whitespace-nowrap shadow-sm shadow-purple-500/5">EvidentlyAI Drift</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400 hover:text-blue-400 transition-colors">MLflow</span>
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400 hover:text-blue-400 transition-colors">DVC</span>
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400 hover:text-blue-400 transition-colors">EvidentlyAI</span>
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400 hover:text-blue-400 transition-colors">GitHub Actions</span>
              </div>
            </div>

            {/* Project 3: DataShield */}
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-900/20 hover:border-slate-800/80 hover:bg-slate-900/40 hover:-translate-y-1 transition-all duration-300 group relative shadow-md hover:shadow-xl hover:shadow-blue-950/10">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <h3 className="text-base font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                    DataShield
                  </h3>
                  <p className="text-xs font-mono text-slate-500">Automated Sensitive Data Redaction Pipeline</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wide uppercase whitespace-nowrap">
                  Security
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                Designed an automated high-throughput privacy processing framework to intercept unstructured context payloads, programmatically stripping/masking PII configurations to safeguard backend training contexts against implicit data leakage vectors.
              </p>

              {/* Custom Embedded Security Architecture Diagram */}
              <div className="mt-5 p-3 bg-slate-950/60 rounded-lg border border-slate-900/60 font-mono text-slate-500 overflow-x-auto scrollbar-none">
                <div className="flex items-center space-x-1.5 min-w-[620px] justify-between text-center text-[11px] tracking-tight">
                  <span className="flex items-center justify-center px-2.5 h-8 bg-slate-900 border border-slate-800 rounded text-slate-400 whitespace-nowrap">Context Payload</span>
                  <span className="text-slate-700 font-sans select-none">→</span>
                  <span className="flex items-center justify-center px-2.5 h-8 bg-slate-900 border border-slate-800 rounded text-slate-400 whitespace-nowrap">Regex Pipeline</span>
                  <span className="text-slate-700 font-sans select-none">→</span>
                  <span className="flex items-center justify-center px-3 h-8 bg-emerald-500/10 border border-emerald-500/30 rounded text-emerald-400 font-semibold whitespace-nowrap shadow-sm shadow-emerald-500/5">Redaction Engine</span>
                  <span className="text-slate-700 font-sans select-none">→</span>
                  <span className="flex items-center justify-center px-2.5 h-8 bg-slate-900 border border-slate-800 rounded text-slate-400 whitespace-nowrap">Masking Layer</span>
                  <span className="text-slate-700 font-sans select-none">→</span>
                  <span className="flex items-center justify-center px-3 h-8 bg-emerald-500/10 border border-emerald-500/30 rounded text-emerald-400 font-semibold whitespace-nowrap shadow-sm shadow-emerald-500/5">Secure Payload</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400 hover:text-blue-400 transition-colors">Python</span>
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400 hover:text-blue-400 transition-colors">RegexPipeline</span>
                <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-900 text-slate-400 hover:text-blue-400 transition-colors">SecurityAutomation</span>
              </div>
            </div>

          </div>
        </motion.section>

        {/* --- WORK EXPERIENCE SECTION --- */}
        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="text-lg font-semibold tracking-tight flex items-center gap-2 text-slate-200">
            <span className="text-blue-500 font-mono text-base">&gt;</span> Industry Deployments
          </h2>
          
          <div className="relative border-l border-slate-800 pl-6 ml-2 space-y-8">
            {/* Pratinik Infotech */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-slate-800 border border-slate-700 group-hover:bg-blue-400 group-hover:border-blue-500/50 transition-all duration-300" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-base font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                    Pratinik Infotech
                  </h3>
                  <p className="text-xs font-mono text-blue-400/80">ML Engineer (Summer Intern) — Remote</p>
                </div>
                <span className="text-[11px] font-mono text-slate-500">June 2025 — Aug 2025</span>
              </div>
              
              <ul className="text-sm text-slate-400 mt-3 list-none space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-slate-600 font-mono select-none mt-0.5">▪</span>
                  <span>Developed an end-to-end NLP routing engine to dynamically cluster 78,312 unlabeled enterprise system tickets into 5 functional core routing metrics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600 font-mono select-none mt-0.5">▪</span>
                  <span>Engineered noise reduction logic extracting distinct POS structural tokens using NMF and TF-IDF matrix variations, manufacturing high-quality labeled sets from scratch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600 font-mono select-none mt-0.5">▪</span>
                  <span>Optimized classification targets via XGBoost, securing a 0.91 F1-score with execution times scaling cleanly down to ~6.5ms inference latency.</span>
                </li>
              </ul>
              
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
                <span className="bg-slate-950/60 px-2 py-0.5 rounded border border-slate-900/80 text-slate-400 hover:text-blue-400 transition-colors cursor-default">XGBoost</span>
                <span className="bg-slate-950/60 px-2 py-0.5 rounded border border-slate-900/80 text-slate-400 hover:text-blue-400 transition-colors cursor-default">NLP Pipelines</span>
                <span className="bg-slate-950/60 px-2 py-0.5 rounded border border-slate-900/80 text-slate-400 hover:text-blue-400 transition-colors cursor-default">NMF Tokenization</span>
                <span className="bg-slate-950/60 px-2 py-0.5 rounded border border-slate-900/80 text-slate-400 hover:text-blue-400 transition-colors cursor-default">Feature Engineering</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- CERTIFICATIONS SECTION --- */}
        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="text-lg font-semibold tracking-tight flex items-center gap-2 text-slate-200">
            <span className="text-blue-500 font-mono text-base">&gt;</span> Verified Certifications
          </h2>
          
          <div className="grid gap-3 font-mono text-xs sm:text-sm">
            
            {/* Cert 1: Google Gemini */}
            <div className="p-4 rounded-xl border border-slate-900 bg-slate-900/10 flex items-center gap-4 hover:border-slate-800 transition-colors group">
              <div className="flex items-center justify-center p-1.5 rounded-lg bg-blue-500/5 border border-blue-500/10 w-16 h-16 group-hover:border-blue-500/30 transition-colors shrink-0 overflow-hidden">
                <Image 
                  src="/google-associate.png" 
                  alt="Google Gemini Specialist" 
                  width={64}
                  height={64}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(59,130,246,0.15)] group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.3)] transition-all duration-300"
                />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-medium text-slate-200 text-sm">Gemini Enterprise Agent Development</span>
                  <span className="text-[10px] uppercase tracking-wide bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/10 font-bold">Certified Partner Specialist</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Issued by Google Cloud
                </p>
              </div>
            </div>

            {/* Cert 2: Azure AI Apps */}
            <div className="p-4 rounded-xl border border-slate-900 bg-slate-900/10 flex items-center gap-4 hover:border-slate-800 transition-colors group">
              <div className="flex items-center justify-center p-1.5 rounded-lg bg-cyan-500/5 border border-cyan-500/10 w-16 h-16 group-hover:border-cyan-500/30 transition-colors shrink-0 overflow-hidden">
                <Image 
                  src="/microsoft-associate.png" 
                  alt="Microsoft Certified Associate" 
                  width={64}
                  height={64}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(6,182,212,0.15)] group-hover:drop-shadow-[0_0_6px_rgba(6,182,212,0.3)] transition-all duration-300"
                />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-medium text-slate-200 text-sm">Microsoft Certified: Azure AI Apps and Agents Developer Associate</span>
                  <span className="text-[10px] uppercase tracking-wide bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/10 font-bold">AI-103</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Issued by Microsoft  
                </p>
              </div>
            </div>

            {/* Cert 3: Azure AI Cloud */}
            <div className="p-4 rounded-xl border border-slate-900 bg-slate-900/10 flex items-center gap-4 hover:border-slate-800 transition-colors group">
              <div className="flex items-center justify-center p-1.5 rounded-lg bg-cyan-500/5 border border-cyan-500/10 w-16 h-16 group-hover:border-cyan-500/30 transition-colors shrink-0 overflow-hidden">
                <Image 
                  src="/microsoft-associate.png" 
                  alt="Microsoft Certified Associate" 
                  width={64}
                  height={64}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(6,182,212,0.15)] group-hover:drop-shadow-[0_0_6px_rgba(6,182,212,0.3)] transition-all duration-300"
                />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-medium text-slate-200 text-sm">Microsoft Certified: Azure AI Cloud Developer Associate</span>
                  <span className="text-[10px] uppercase tracking-wide bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/10 font-bold">AI-200</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Issued by Microsoft  
                </p>
              </div>
            </div>

            {/* Cert 4: LLM Security Professional */}
            <div className="p-4 rounded-xl border border-slate-900 bg-slate-900/10 flex items-center gap-4 hover:border-slate-800 transition-colors group">
              <div className="flex items-center justify-center p-1.5 rounded-lg bg-red-500/5 border border-red-500/10 w-16 h-16 group-hover:border-red-500/30 transition-colors shrink-0 overflow-hidden">
                <Image 
                  src="/cllmsp-associate.png" 
                  alt="Certified LLM Security Professional" 
                  width={64}
                  height={64}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(239,68,68,0.15)] group-hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.3)] transition-all duration-300"
                />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-medium text-slate-200 text-sm">Certified LLM Security Professional</span>
                  <span className="text-[10px] uppercase tracking-wide bg-red-500/10 text-red-400 px-2 py-0.5 rounded border border-red-500/10 font-bold">Red Team Leaders</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Issued by Red Team Leaders
                </p>
              </div>
            </div>

            {/* Cert 5: Hugging Face Deep RL */}
            <div className="p-4 rounded-xl border border-slate-900 bg-slate-900/10 flex items-center gap-4 hover:border-slate-800 transition-colors group">
              <div className="flex items-center justify-center p-1.5 rounded-lg bg-amber-500/5 border border-amber-500/10 w-16 h-16 group-hover:border-amber-500/30 transition-colors shrink-0 overflow-hidden">
                <Image 
                  src="/hugging-face-associate.png" 
                  alt="Hugging Face Deep RL Certification" 
                  width={64}
                  height={64}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(245,158,11,0.15)] group-hover:drop-shadow-[0_0_6px_rgba(245,158,11,0.3)] transition-all duration-300"
                />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-medium text-slate-200 text-sm">Deep RL Certification</span>
                  <span className="text-[10px] uppercase tracking-wide bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/10 font-bold">Hugging Face</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Issued by Hugging Face 
                </p>
              </div>
            </div>
     {/* Cert 5: Airflow */}
            <div className="p-4 rounded-xl border border-slate-900 bg-slate-900/10 flex items-center gap-4 hover:border-slate-800 transition-colors group">
              <div className="flex items-center justify-center p-1.5 rounded-lg bg-amber-500/5 border border-amber-500/10 w-16 h-16 group-hover:border-amber-500/30 transition-colors shrink-0 overflow-hidden">
                <Image 
                  src="/apache-airflow.jpg" 
                  alt="Apache Airflow Certification" 
                  width={64}
                  height={64}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(245,158,11,0.15)] group-hover:drop-shadow-[0_0_6px_rgba(245,158,11,0.3)] transition-all duration-300"
                />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-medium text-slate-200 text-sm">Apache Airflow Certification</span>
                  <span className="text-[10px] uppercase tracking-wide bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/10 font-bold">Astronomer</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Issued by Astronomer
                </p>
              </div>
            </div>

          </div>
        </motion.section>

        {/* --- TECHNICAL SKILLS --- */}
        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="text-lg font-semibold tracking-tight flex items-center gap-2 text-slate-200">
            <span className="text-blue-500 font-mono text-base">&gt;</span> Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-mono">
            {/* Languages */}
            <div className="p-5 rounded-xl border border-slate-900 bg-slate-900/10 space-y-3 hover:border-slate-800 transition-colors duration-300">
              <div className="text-blue-400 font-semibold tracking-wider uppercase text-[11px]">Languages</div>
              <div className="text-slate-400 leading-relaxed">
                Python, SQL, Bash
              </div>
            </div>
            {/* Machine Learning */}
            <div className="p-5 rounded-xl border border-slate-900 bg-slate-900/10 space-y-3 hover:border-slate-800 transition-colors duration-300">
              <div className="text-emerald-400 font-semibold tracking-wider uppercase text-[11px]">Machine Learning</div>
              <div className="text-slate-400 leading-relaxed">
                PyTorch, TensorFlow, Scikit-Learn, Pandas, NumPy
              </div>
            </div>
            {/* Frameworks & Libraries */}
            <div className="p-5 rounded-xl border border-slate-900 bg-slate-900/10 space-y-3 hover:border-slate-800 transition-colors duration-300">
              <div className="text-purple-400 font-semibold tracking-wider uppercase text-[11px]">Frameworks & Libraries</div>
              <div className="text-slate-400 leading-relaxed">
                LangChain, LlamaIndex, FastAPI, FAISS, ChromaDB
              </div>
            </div>
            {/* Cloud & MLOps */}
            <div className="p-5 rounded-xl border border-slate-900 bg-slate-900/10 space-y-3 hover:border-slate-800 transition-colors duration-300">
              <div className="text-amber-400 font-semibold tracking-wider uppercase text-[11px]">Cloud & MLOps</div>
              <div className="text-slate-400 leading-relaxed">
                AWS (SageMaker, Bedrock), Azure ML Studio, Docker, Kubernetes, MLflow, DVC, Airflow, GitHub Actions
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- FOOTER --- */}
        <footer className="pt-12 border-t border-slate-900 text-center text-xs font-mono text-slate-600">
          <p>© {new Date().getFullYear()} // Engineered using Next.js , Tailwind CSS & AI with ❤️</p>
        </footer>

      </main>
    </div>
  );
}