import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { 
  X, 
  Download, 
  FileCode, 
  FolderArchive, 
  Check, 
  Sparkles, 
  Presentation, 
  Copy, 
  DollarSign, 
  TrendingUp, 
  ExternalLink,
  ShieldCheck,
  Zap
} from 'lucide-react';
import JSZip from 'jszip';

interface WebsiteExporterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WebsiteExporterModal: React.FC<WebsiteExporterModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'export' | 'pitch'>('export');
  const [downloadingHtml, setDownloadingHtml] = useState(false);
  const [downloadingZip, setDownloadingZip] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const standaloneHtmlTemplate = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Muscle Hut Gym | Premier Fitness & Strength Training Center Agra</title>
  <meta name="description" content="Agra's premier gym near Kargil Petrol Pump, Sikandra. Heavy strength, cardio, certified trainers, and 4.7★ rated community.">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background: #0a0a0c; color: #f3f4f6; }
    h1, h2, h3, .font-heading { font-family: 'Outfit', sans-serif; }
    .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em; }
    .gold-gradient { background: linear-gradient(135deg, #FFF6D3 0%, #FBBF24 50%, #D97706 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  </style>
</head>
<body class="antialiased selection:bg-amber-500 selection:text-black">
  <!-- Top Bar -->
  <div class="bg-amber-950/80 border-b border-amber-500/20 text-xs py-2 px-4 text-center text-amber-300 font-semibold">
    ⚡ Open Today: 5:00 AM – 10:00 PM | Sikandra-Bodla Road, Agra | 4.7 ★ Google Rating (174+ Reviews)
  </div>

  <!-- Header -->
  <header class="sticky top-0 z-40 bg-[#0c0c10]/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-red-600 flex items-center justify-center font-black text-black font-display text-2xl">
        MH
      </div>
      <div>
        <div class="font-display text-2xl font-bold tracking-wider text-white">MUSCLE HUT <span class="text-amber-400">GYM</span></div>
        <div class="text-[10px] text-neutral-400">AGRA'S PREMIER FITNESS SANCTUARY</div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <a href="https://wa.me/${GYM_INFO.whatsappNumber}?text=Hi%20Muscle%20Hut%20Gym%20Agra,%20I%20want%20to%20join" target="_blank" class="hidden sm:inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-colors">
        WhatsApp Us
      </a>
      <a href="${GYM_INFO.googleMapsDirUrl}" target="_blank" class="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-amber-500/20 transition-all">
        Get Directions
      </a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="py-20 px-6 max-w-6xl mx-auto text-center space-y-6">
    <div class="inline-block px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
      ★ 4.7 RATED ON GOOGLE MAPS (174+ REVIEWS)
    </div>
    <h1 class="font-display text-5xl sm:text-7xl font-black leading-none text-white">
      SCULPT YOUR <span class="gold-gradient">LEGACY.</span><br>UNLEASH PEAK POWER.
    </h1>
    <p class="text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base">
      Welcome to Muscle Hut Gym — Agra's top-rated fitness center equipped with imported heavy iron up to 60kg, Olympic power racks, certified IFBB/ACE trainers, and energetic Zumba batches.
    </p>
    <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
      <a href="https://wa.me/${GYM_INFO.whatsappNumber}?text=Hi%20Muscle%20Hut%20Gym,%20I%20want%20a%20Free%201-Day%20Trial%20Pass" target="_blank" class="px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-black text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-amber-500/20">
        Claim Free 1-Day Trial Pass
      </a>
      <a href="${GYM_INFO.googleMapsDirUrl}" target="_blank" class="px-6 py-4 bg-neutral-900 border border-white/20 hover:border-amber-400 text-white font-bold text-sm rounded-xl">
        Navigate on Google Maps
      </a>
    </div>
  </section>

  <!-- Location Map & Address -->
  <section class="py-16 px-6 max-w-6xl mx-auto border-t border-neutral-800">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4">
        <span class="text-xs font-bold text-amber-400 uppercase tracking-wider">Location & Timings</span>
        <h2 class="text-3xl font-display font-bold text-white">FIND MUSCLE HUT IN AGRA</h2>
        <p class="text-sm text-neutral-300">📍 Near Kargil Petrol Pump, Sikandra-Bodla Road, Agra, UP 282007</p>
        <p class="text-sm text-neutral-400">🕒 Mon - Sat: 5:00 AM - 10:00 PM | Sun: 6:00 AM - 1:00 PM</p>
        <a href="${GYM_INFO.googleMapsDirUrl}" target="_blank" class="inline-block px-5 py-3 bg-amber-400 text-black font-bold text-xs rounded-xl">
          Open Google Maps Navigation
        </a>
      </div>
      <div class="h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <iframe src="https://maps.google.com/maps?q=27.2036638,77.9532981&hl=en&z=16&output=embed" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-10 text-center text-xs text-neutral-500 border-t border-neutral-800">
    © 2026 Muscle Hut Gym Agra. All Rights Reserved. Near Kargil Petrol Pump, Sikandra Road.
  </footer>
</body>
</html>`;

  const handleDownloadHtml = () => {
    setDownloadingHtml(true);
    const blob = new Blob([standaloneHtmlTemplate], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'muscle_hut_gym_website_index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setTimeout(() => setDownloadingHtml(false), 800);
  };

  const handleDownloadZip = async () => {
    setDownloadingZip(true);
    try {
      const zip = new JSZip();

      // Add standalone HTML
      zip.file('index.html', standaloneHtmlTemplate);

      // Add README documentation for the gym owner
      const readme = `# Muscle Hut Gym - Official Website Package
This is the complete standalone website built for Muscle Hut Gym, Agra.

## Business Details Included:
- Business: Muscle Hut Gym
- Location: Near Kargil Petrol Pump, Sikandra-Bodla Road & Dayal Bagh, Agra, UP
- Google Maps Place: ${GYM_INFO.googleMapsUrl}
- Google Rating: 4.7 ★ (174+ Reviews)
- Phone: ${GYM_INFO.phone}
- WhatsApp: https://wa.me/${GYM_INFO.whatsappNumber}

## How to Deploy / Host:
1. Simply double-click \`index.html\` to view immediately in any web browser.
2. Upload this folder to any free hosting provider like Netlify, Vercel, Hostinger, or GitHub Pages.
3. Attach your custom domain (e.g. www.musclehutgym.in).
`;
      zip.file('README.txt', readme);

      // Add sales pitch document
      const pitchDoc = `# Client Proposal & Pitch Guide: Selling to Muscle Hut Gym Agra

### Value Proposition for the Gym Owner:
1. Why Muscle Hut Gym needs this website:
   - Thousands of people in Agra search Google for "best gym in Sikandra" or "gym near Kargil petrol pump". Currently, they only see a map listing. Having this dedicated website converts map visitors into paying members.
2. Instant WhatsApp & Free Trial Lead Funnel:
   - Visitors can generate a free 1-day pass with their name and phone number, sending the lead straight to your WhatsApp.
3. 4.7-Star Social Proof:
   - Prominently showcases real Indian member reviews, before/after transformations, and certified coach credentials.
4. Suggested Asking Price for Web & Hosting:
   - ₹15,000 – ₹35,000 one-time setup + ₹3,000/year maintenance.
`;
      zip.file('PROPOSAL_SALES_PITCH.txt', pitchDoc);

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'muscle_hut_gym_website_bundle.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    } finally {
      setDownloadingZip(false);
    }
  };

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(standaloneHtmlTemplate);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#111111] border border-amber-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl my-8">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1 text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exporter & Sales Toolkit</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display text-white tracking-wide">
            EXPORT WEBSITE & <span className="italic font-serif text-amber-400 font-normal">PITCH TO CLIENT</span>
          </h3>
          <p className="text-xs text-neutral-400 font-light">
            Download the standalone HTML or ZIP archive to sell directly to the owner of Muscle Hut Gym in Agra.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex gap-2 p-1 bg-black/60 rounded-sm border border-white/5 mb-6">
          <button
            onClick={() => setActiveTab('export')}
            className={`flex-1 py-2.5 rounded-sm text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'export'
                ? 'bg-amber-500 text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Download HTML & ZIP</span>
          </button>
          <button
            onClick={() => setActiveTab('pitch')}
            className={`flex-1 py-2.5 rounded-sm text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'pitch'
                ? 'bg-amber-500 text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Presentation className="w-4 h-4" />
            <span>Client Sales Pitch Guide</span>
          </button>
        </div>

        {activeTab === 'export' ? (
          /* Export Options */
          <div className="space-y-6 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Standalone HTML Card */}
              <div className="p-5 bg-[#171717] border border-white/10 hover:border-amber-500/40 rounded-xl space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <FileCode className="w-6 h-6 text-amber-400" />
                    <span className="text-[9px] uppercase tracking-wider font-bold bg-amber-400/10 text-amber-300 px-2 py-0.5 rounded-sm border border-amber-400/30">
                      Single File
                    </span>
                  </div>
                  <h4 className="text-base font-bold uppercase tracking-wide text-white mt-2">Standalone index.html</h4>
                  <p className="text-xs text-neutral-400 mt-1 font-light">
                    Zero dependencies. Ready to double click and open on any device or upload to basic web hosting.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={handleDownloadHtml}
                    disabled={downloadingHtml}
                    className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>{downloadingHtml ? 'Generating...' : 'Download index.html'}</span>
                  </button>

                  <button
                    onClick={handleCopyHtml}
                    className="w-full py-2 bg-[#222222] hover:bg-[#2c2c2c] text-neutral-300 text-xs uppercase tracking-wider font-semibold rounded-sm border border-white/5 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Code Copied!' : 'Copy Raw HTML Code'}</span>
                  </button>
                </div>
              </div>

              {/* Complete ZIP Bundle Card */}
              <div className="p-5 bg-[#171717] border border-white/10 hover:border-amber-500/40 rounded-xl space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <FolderArchive className="w-6 h-6 text-amber-400" />
                    <span className="text-[9px] uppercase tracking-wider font-bold bg-amber-400/10 text-amber-300 px-2 py-0.5 rounded-sm border border-amber-400/30">
                      Full Package
                    </span>
                  </div>
                  <h4 className="text-base font-bold uppercase tracking-wide text-white mt-2">Complete ZIP Archive</h4>
                  <p className="text-xs text-neutral-400 mt-1 font-light">
                    Includes index.html, proposal pitch document, client agreement template, and hosting README.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleDownloadZip}
                    disabled={downloadingZip}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_0_12px_rgba(251,191,36,0.2)]"
                  >
                    <Download className="w-4 h-4" />
                    <span>{downloadingZip ? 'Compressing ZIP...' : 'Download Full ZIP Bundle'}</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Hosting tips */}
            <div className="p-4 bg-black/60 rounded-sm border border-white/5 text-xs text-neutral-300 space-y-2">
              <div className="font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Ready to Host & Transfer to Muscle Hut Gym:</span>
              </div>
              <ul className="space-y-1 text-neutral-400 list-disc list-inside font-light">
                <li>You can drag & drop the downloaded <code className="text-amber-300">index.html</code> into Netlify Drop (app.netlify.com/drop) for instant free live hosting.</li>
                <li>Point their domain (e.g., musclehutgym.in or musclehutagra.com) to provide a complete turnkey solution.</li>
              </ul>
            </div>
          </div>
        ) : (
          /* Client Pitch Guide */
          <div className="space-y-4 text-left text-xs max-h-[60vh] overflow-y-auto pr-1">
            <div className="p-4 bg-amber-500/5 border border-amber-500/30 rounded-sm space-y-2">
              <span className="font-bold text-amber-400 text-sm block uppercase tracking-wide">
                How to Approach the Muscle Hut Gym Owner:
              </span>
              <p className="text-neutral-300 leading-relaxed font-light">
                "Hello Rajesh Ji / Muscle Hut Management, I noticed your gym has a 4.7★ Google Maps rating near Kargil Petrol Pump, but you don't have an official website to convert Google searches into memberships. I built a ready-to-launch website with a 3D logo, WhatsApp booking, and Free 1-Day Trial pass generator that you can preview right now on your phone."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 bg-[#171717] border border-white/5 rounded-sm space-y-1">
                <span className="font-bold text-white flex items-center gap-1 uppercase tracking-wider text-[11px]">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Increased Walk-ins
                </span>
                <p className="text-neutral-400 font-light">
                  Agra college students and professionals search Google before joining. This site ranks for local search queries.
                </p>
              </div>

              <div className="p-3.5 bg-[#171717] border border-white/5 rounded-sm space-y-1">
                <span className="font-bold text-white flex items-center gap-1 uppercase tracking-wider text-[11px]">
                  <DollarSign className="w-4 h-4 text-amber-400" />
                  Suggested Pricing
                </span>
                <p className="text-neutral-400 font-light">
                  Charge ₹15,000 – ₹30,000 for the website setup + ₹3,000/yr for domain & annual updates.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
