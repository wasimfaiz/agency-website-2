"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#F4F6F8] pt-[20vh] pb-[10vh]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#007BFF]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center px-4 text-center w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-sm font-semibold text-[#0A2540]/70 mb-8 border border-[#0A2540]/5"
        >
          <span className="w-2 h-2 rounded-full bg-[#007BFF] animate-pulse" />
          Setzet Enterprise Suite is now available
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,7vw,6.5rem)] font-extrabold leading-[1.05] tracking-tighter text-[#0A2540]"
        >
          Run your entire business from <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#0A2540] drop-shadow-sm">
            one powerful platform.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg text-[#0A2540]/70 md:text-xl font-medium leading-relaxed"
        >
          Stop juggling messy spreadsheets and paying for a dozen different tools. Manage your HR, sales, inventory, and operations from a single, easy-to-use dashboard.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
           className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <Link href="#contact" className="w-full sm:w-auto px-8 py-4 bg-[#0A2540] text-white rounded-full font-bold text-sm tracking-wide hover:bg-[#0A2540]/80 transition-all shadow-[0_8px_30px_rgba(10,37,64,0.12)] hover:shadow-[0_8px_30px_rgba(10,37,64,0.2)] transform hover:-translate-y-0.5">
             Start for free
          </Link>
          <Link href="#features" className="w-full sm:w-auto px-8 py-4 bg-white text-[#0A2540] border border-[#0A2540]/10 rounded-full font-bold text-sm tracking-wide hover:bg-[#F4F6F8] hover:border-[#0A2540]/20 transition-all shadow-sm">
             Explore features
          </Link>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="mt-6 text-sm text-[#0A2540]/40 font-medium"
        >
          No credit card required. 14-day free trial.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-24 w-[95vw] max-w-5xl mx-auto"
      >
        <div className="rounded-2xl border border-[#0A2540]/10 bg-white shadow-2xl overflow-hidden ring-1 ring-[#0A2540]/5">
            <div className="h-12 w-full border-b border-[#0A2540]/5 bg-[#F4F6F8] flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm" />
            </div>
            
            <div className="p-6 md:p-8 bg-white flex flex-col gap-6">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="bg-[#F4F6F8] p-6 rounded-2xl border border-[#0A2540]/5 shadow-sm hover:border-[#007BFF]/20 transition-colors">
                   <div className="text-xs text-[#0A2540]/50 font-bold uppercase tracking-widest mb-2">Total Revenue</div>
                   <div className="text-3xl font-extrabold text-[#0A2540] tracking-tight">$124,590</div>
                   <div className="text-xs font-bold text-[#0A2540] bg-white border border-[#0A2540]/10 inline-block px-2 py-1 rounded-md mt-3">↑ 14.2% vs last month</div>
                 </div>
                 <div className="bg-[#F4F6F8] p-6 rounded-2xl border border-[#0A2540]/5 shadow-sm hover:border-[#007BFF]/20 transition-colors">
                   <div className="text-xs text-[#0A2540]/50 font-bold uppercase tracking-widest mb-2">Active Projects</div>
                   <div className="text-3xl font-extrabold text-[#0A2540] tracking-tight">32</div>
                   <div className="text-xs font-bold text-[#0A2540] bg-white border border-[#0A2540]/10 inline-block px-2 py-1 rounded-md mt-3">↑ 5.4% vs last month</div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-[#0A2540]/5 shadow-md border-t-4 border-t-[#007BFF]">
                   <div className="text-xs text-[#0A2540]/50 font-bold uppercase tracking-widest mb-2">New Leads</div>
                   <div className="text-3xl font-extrabold text-[#0A2540] tracking-tight">128</div>
                   <div className="text-xs font-bold text-[#007BFF] bg-[#007BFF]/10 inline-block px-2 py-1 rounded-md mt-3">12 highly qualified</div>
                 </div>
               </div>
               
               <div className="bg-[#F4F6F8] p-6 md:p-8 rounded-2xl border border-[#0A2540]/5 h-72 flex items-end gap-2 relative">
                  <div className="absolute top-6 left-6 flex flex-col">
                     <span className="text-lg font-bold text-[#0A2540]">Revenue Growth</span>
                     <span className="text-xs text-[#0A2540]/50 font-medium">Monthly recurring revenue (MRR)</span>
                  </div>
                  {[30, 45, 40, 60, 55, 75, 70, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#0A2540]/10 rounded-t-md hover:bg-[#007BFF] transition-colors relative group" style={{ height: `${h}%` }}>
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0A2540] text-white text-xs py-1.5 px-2.5 rounded shadow-lg transition-opacity font-bold whitespace-nowrap">${h}k</div>
                    </div>
                  ))}
               </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="py-12 border-b border-[#0A2540]/5 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs font-bold text-[#0A2540]/40 mb-8 uppercase tracking-[0.2em]">Trusted by innovative teams worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale pointer-events-none select-none text-[#0A2540]">
           <span className="text-2xl font-bold font-serif">Acme Corp</span>
           <span className="text-2xl font-black tracking-tighter">STARTUP.IO</span>
           <span className="text-2xl font-bold italic">GlobalTech</span>
           <span className="text-2xl font-black tracking-tight">NEXUS</span>
           <span className="text-2xl font-bold font-mono">OrbitSystem</span>
        </div>
      </div>
    </section>
  );
}

function FeatureListSection() {
  const content = [
    {
      title: "Close deals faster with Visual Pipelines.",
      desc: "Get a bird's-eye view of your entire sales process. Drag and drop leads across stages, identify bottlenecks instantly, and forecast revenue with pinpoint accuracy. Everything you need is on one screen.",
      metrics: "3x faster pipeline reviews",
      imageAlign: "right",
    },
    {
      title: "Automate your operational busywork.",
      desc: "Stop doing things manually. Set up rules that automatically send HR updates, invoice school fees, or update CRM lead statuses when actions are taken. Let the software work for you.",
      metrics: "Save 15+ hours a week",
      imageAlign: "left",
    },
    {
      title: "Real-time analytics that actually make sense.",
      desc: "No more guessing. Generate beautiful, easy-to-read reports with one click. Understand where your best leads come from, how your team is performing, and precisely where your business is heading.",
      metrics: "100% data clarity",
      imageAlign: "right",
    }
  ];

  return (
    <section id="features" className="py-32 bg-[#F4F6F8] overflow-hidden border-b border-[#0A2540]/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-32">
         {content.map((item, idx) => (
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               key={idx} 
               className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${item.imageAlign === 'left' ? 'md:flex-row-reverse' : ''}`}
            >
               <div className="flex-1 space-y-6">
                 <h2 className="text-3xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.15]">{item.title}</h2>
                 <p className="text-lg lg:text-xl text-[#0A2540]/70 leading-relaxed font-medium">{item.desc}</p>
                 <div className="inline-flex mt-4 px-4 py-2 rounded-full bg-[#007BFF]/10 text-[#007BFF] font-bold text-sm tracking-wide border border-[#007BFF]/20">
                   {item.metrics}
                 </div>
               </div>
               
               <div className="flex-1 w-full bg-white rounded-3xl p-8 border border-[#0A2540]/10 shadow-[0_8px_30px_rgba(10,37,64,0.04)] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#007BFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {idx === 0 && (
                     <div className="flex flex-col gap-4 relative z-10 py-6">
                        <motion.div whileHover={{ scale: 1.02 }} className="h-12 w-full bg-[#F4F6F8] rounded-xl flex items-center px-4 justify-between border border-[#0A2540]/5 transition-transform">
                           <div className="w-1/3 h-3 bg-[#0A2540]/10 rounded-full" />
                           <div className="px-3 py-1 bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold rounded-md">Won</div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="h-12 w-[90%] bg-[#F4F6F8] rounded-xl flex items-center px-4 justify-between border border-[#0A2540]/5 translate-x-4 transition-transform">
                           <div className="w-1/2 h-3 bg-[#0A2540]/10 rounded-full" />
                           <div className="px-3 py-1 bg-[#007BFF]/10 text-[#007BFF] text-[10px] font-bold rounded-md">Proposal</div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="h-12 w-[95%] bg-[#F4F6F8] rounded-xl flex items-center px-4 justify-between border border-[#0A2540]/5 transition-transform">
                           <div className="w-2/5 h-3 bg-[#0A2540]/10 rounded-full" />
                           <div className="px-3 py-1 bg-[#f59e0b]/10 text-[#f59e0b] text-[10px] font-bold rounded-md">Discovery</div>
                        </motion.div>
                     </div>
                  )}

                  {idx === 1 && (
                     <div className="flex items-center justify-center gap-4 relative z-10 py-12">
                        <div className="w-16 h-16 rounded-full bg-[#007BFF]/10 flex items-center justify-center text-[#007BFF] text-2xl">⚡</div>
                        <div className="w-10 h-0.5 bg-[#0A2540]/10" />
                        <div className="w-16 h-16 rounded-2xl bg-[#F4F6F8] flex items-center justify-center text-[#0A2540] border border-[#0A2540]/10 p-3 group-hover:scale-110 transition-transform duration-300">
                           <div className="w-full h-full border-2 border-dashed border-[#0A2540]/20 rounded-lg flex items-center justify-center text-[#0A2540]/40">+</div>
                        </div>
                        <div className="w-10 h-0.5 bg-[#0A2540]/10" />
                        <div className="w-16 h-16 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981] text-2xl">✓</div>
                     </div>
                  )}

                  {idx === 2 && (
                     <div className="flex items-end gap-3 h-56 relative z-10 px-4 pt-10">
                        {[40, 70, 45, 90, 65, 100].map((h, i) => (
                           <motion.div 
                              initial={{ height: 0 }}
                              whileInView={{ height: `${h}%` }}
                              transition={{ duration: 0.8, delay: i * 0.1 }}
                              key={i} 
                              className="flex-1 bg-[#0A2540]/10 rounded-t-md hover:bg-[#007BFF] transition-colors"
                           />
                        ))}
                     </div>
                  )}
               </div>
            </motion.div>
         ))}
      </div>
    </section>
  );
}

function BentoFeatures() {
   return (
      <section className="bg-white py-32 border-b border-[#0A2540]/5">
         <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A2540] mb-6">Everything you need to scale.</h2>
               <p className="text-lg md:text-xl text-[#0A2540]/60 max-w-2xl mx-auto font-medium">We abstracted away the complexity so your team can focus on what they do best: building relationships and closing deals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr md:auto-rows-[300px]">
               <div className="col-span-1 md:col-span-2 bg-[#F4F6F8] rounded-[2rem] p-10 border border-[#0A2540]/5 shadow-sm hover:border-[#007BFF]/20 transition-colors">
                  <div className="text-2xl font-bold text-[#0A2540] mb-3">Team Collaboration</div>
                  <p className="text-[#0A2540]/60 font-medium text-lg max-w-md w-full">Mention teammates, leave internal notes on leads, and assign tasks across departments seamlessly.</p>
                  <div className="mt-10 flex -space-x-4">
                     {['#0A2540', '#007BFF', '#28a745', '#17a2b8', '#6610f2'].map((color, i) => (
                        <div key={i} className="w-14 h-14 rounded-full border-4 border-[#F4F6F8] flex items-center justify-center text-white font-bold text-sm shadow-sm" style={{ backgroundColor: color }}>
                           {['JD', 'AM', 'SW', 'KT', 'MR'][i]}
                        </div>
                     ))}
                  </div>
               </div>

               <div className="col-span-1 bg-[#F4F6F8] rounded-[2rem] p-10 border border-[#0A2540]/5 shadow-sm hover:border-[#007BFF]/20 transition-colors flex flex-col justify-between">
                  <div>
                     <div className="text-2xl font-bold text-[#0A2540] mb-3">Bank-Grade Security</div>
                     <p className="text-[#0A2540]/60 font-medium leading-relaxed">Your data is fully encrypted at rest and in transit.</p>
                  </div>
                  <div className="text-5xl mt-6 md:mt-0 opacity-80">🔒</div>
               </div>

               <div className="col-span-1 bg-[#0A2540] text-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgba(10,37,64,0.12)] flex flex-col justify-between overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#007BFF]/30 rounded-full blur-3xl group-hover:bg-[#007BFF]/50 transition-colors" />
                  <div className="relative z-10">
                     <div className="text-2xl font-bold text-white mb-3">Blazing Fast</div>
                     <p className="text-white/70 font-medium leading-relaxed">Built on modern architecture. Experience sub-50ms load times globally.</p>
                  </div>
                  <div className="text-5xl mt-6 md:mt-0 relative z-10">⚡</div>
               </div>

               <div className="col-span-1 md:col-span-2 bg-[#F4F6F8] rounded-[2rem] p-10 border border-[#0A2540]/5 shadow-sm hover:border-[#007BFF]/20 transition-colors">
                  <div className="text-2xl font-bold text-[#0A2540] mb-3">API & Integrations</div>
                  <p className="text-[#0A2540]/60 font-medium text-lg max-w-lg">Connect your favorite tools instantly. Seamlessly push and pull data via our robust, well-documented REST API.</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                     {['Zapier', 'Slack', 'Gmail', 'Stripe', 'Twilio', 'Mailchimp'].map(tool => (
                        <span key={tool} className="px-5 py-2.5 bg-white border border-[#0A2540]/10 rounded-xl text-sm font-bold text-[#0A2540] shadow-sm tracking-wide">{tool}</span>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}


function BottomCta() {
  return (
    <section className="py-32 bg-[#F4F6F8] text-center relative overflow-hidden">
       <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,123,255,0.08)_0%,transparent_70%)] pointer-events-none" />
       
       <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-[clamp(3.5rem,7vw,5.5rem)] font-extrabold tracking-tighter text-[#0A2540] mb-8 leading-[1.05]">
             Convert higher. <br/> Grow faster.
          </h2>
          <p className="text-xl text-[#0A2540]/70 font-medium mb-12 max-w-2xl mx-auto">
             Join thousands of modern teams scaling their business predictably with the Setzet Enterprise Suite.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="#contact" className="px-10 py-5 bg-[#007BFF] text-white rounded-full font-bold text-lg hover:scale-105 hover:bg-[#0056b3] transition-all shadow-[0_8px_20px_rgba(0,123,255,0.3)]">
               Start your free trial
             </Link>
             <Link href="#sales" className="px-10 py-5 bg-white border border-[#0A2540]/10 text-[#0A2540] rounded-full font-bold text-lg hover:bg-gray-50 hover:border-[#0A2540]/20 transition-all shadow-sm">
               Contact Sales
             </Link>
          </div>
       </div>
    </section>
  );
}

function ProductSuiteSection() {
  const products = [
    { name: "Setzet HRMS", desc: "Automate payroll, track attendance, and simplify talent management.", icon: "👥", badge: "Most Popular" },
    { name: "School Management", desc: "Digital classrooms, fee tracking, and seamless parent-teacher portals.", icon: "🏫" },
    { name: "Sales & CRM", desc: "Visual pipelines, automated follow-ups, and bank-grade data security.", icon: "📈", badge: "Updated" },
    { name: "Inventory Pro", desc: "Real-time stock tracking, purchase orders, and multi-warehouse sync.", icon: "📦" }
  ];

  return (
    <section className="py-32 bg-white relative z-10 border-b border-[#0A2540]/5">
       <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] mb-4 tracking-tight">Our Enterprise Suite</h2>
             <p className="text-lg text-[#0A2540]/60 max-w-2xl mx-auto font-medium">Purpose-built software systems designed to run your entire organization from a single pane of glass.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {products.map((p, i) => (
                <div key={i} className="bg-[#F4F6F8] rounded-2xl p-6 border border-[#0A2540]/5 hover:border-[#007BFF]/30 hover:shadow-[0_8px_30px_rgba(10,37,64,0.08)] hover:-translate-y-1 transition-all group flex flex-col">
                   <div className="flex justify-between items-start mb-6">
                      <div className="text-4xl bg-white w-14 h-14 flex items-center justify-center rounded-xl shadow-sm border border-[#0A2540]/5 group-hover:scale-110 transition-transform">{p.icon}</div>
                      {p.badge && <span className="text-[10px] font-bold uppercase tracking-wider bg-[#007BFF]/10 text-[#007BFF] px-2 py-1 rounded-md">{p.badge}</span>}
                   </div>
                   <h3 className="text-xl font-bold text-[#0A2540] mb-3">{p.name}</h3>
                   <p className="text-[#0A2540]/70 text-sm font-medium leading-relaxed flex-1">{p.desc}</p>
                   <Link href="#contact" className="inline-flex items-center gap-2 mt-6 text-[#007BFF] font-bold text-sm hover:underline">
                      Explore {p.name} →
                   </Link>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}

export default function ProductShowcase() {
  return (
    <main className="bg-[#FCFCFC] min-h-screen text-[#0A2540] selection:bg-[#007BFF]/20 selection:text-[#0A2540] font-sans">
      <Navbar forceDarkAtTop />
      <HeroSection />
      <SocialProof />
      <ProductSuiteSection />
      <FeatureListSection />
      <BentoFeatures />
      <BottomCta />
      <div className="bg-[#FCFCFC]">
        <Footer />
      </div>
    </main>
  );
}
