import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Headset, UserCheck, Send } from "lucide-react";
import QuickInquiryForm from "../components/QuickInquiryForm";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-primary/20">
      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* HEADER SECTION */}
        <motion.div 
          className="text-center mb-20"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">Contact the Editorial Office</h1>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Have questions regarding manuscript submission, the peer-review process, or technical support? Our team is here to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* 1. PRINCIPAL EDITORIAL CONTACT */}
          <motion.div 
            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6 text-primary">
              <UserCheck size={24} />
              <h2 className="text-xl font-bold font-serif">Principal Contact</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-400 mb-1">Editor-in-Chief</p>
                <p className="font-bold text-lg">Anatoliy L. Zhuravlev</p>
              </div>

              <div className="space-y-3">
                <a href="tel:+74956835810" className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors">
                  <Phone size={18} />
                  <span>+7 (495) 683-58-10</span>
                </a>
                <a href="mailto:zhuravlev@psychologicaljournal.org" className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors">
                  <Mail size={18} />
                  <span className="break-all">
                    {/* associateeditor@psychologicaljournal.org */}
                    zhuravlev@psychologicaljournal.org
                    </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* 2. HEAD OF EDITORIAL & OFFICE */}
          <motion.div 
            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6 text-primary">
              <MapPin size={24} />
              <h2 className="text-xl font-bold font-serif">Editorial Office</h2>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-400 mb-1">Head of Editorial</p>
                <p className="font-bold text-lg">Safonova Marina Andreevna</p>
              </div>

              <div className="space-y-3 text-slate-600">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-1" />
                  <p>+7 (495) 683-58-10<br/>+7 (916) 929-82-71</p>
                </div>
                <div className="flex items-start gap-3 pt-2 border-t border-slate-50">
                  <MapPin size={18} className="mt-1" />
                  <p className="text-sm leading-relaxed">
                    129366, Moscow, I-366,<br />
                    Yaroslavskaya st., 13
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. PLATFORM SUPPORT */}
          <motion.div 
            className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl shadow-slate-200"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6 text-primary">
              <Headset size={24} />
              <h2 className="text-xl font-bold font-serif">Support Contact</h2>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-400 mb-1">Technical Issues</p>
                <p className="font-bold text-lg">RCSI Journals' Platform Support</p>
              </div>
          

              <a href="mailto:associateeditor@psychologicaljournal.org" className="flex items-center gap-3 text-slate-300  transition-colors pt-4 border-t border-slate-800">
                <Mail size={18} />
                <span className="break-all text-sm">
                  associateeditor@psychologicaljournal.org
                  </span>
              </a>

              <div className="mt-8 p-4 bg-slate-800 rounded-lg text-xs text-slate-400 leading-relaxed">
                Contact support for issues regarding account access, file uploads, or manuscript tracking.
              </div>
            </div>
          </motion.div>

        </div>

        {/* QUICK MESSAGE FORM (Optional Add-on) */}
        {/* <motion.section 
          className="mt-24 max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-3xl shadow-sm">
            <h2 className="text-3xl font-serif mb-8 text-center">Quick Inquiry</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="input input-bordered w-full bg-slate-50 border-none rounded-xl" />
              <input type="email" placeholder="Email Address" className="input input-bordered w-full bg-slate-50 border-none rounded-xl" />
              <div className="md:col-span-2">
                <textarea className="textarea textarea-bordered w-full bg-slate-50 border-none rounded-xl h-32" placeholder="How can we help you?"></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button className="btn btn-primary px-10 rounded-xl gap-2 shadow-lg shadow-primary/20">
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.section> */}
        <QuickInquiryForm/>

      </main>

      {/* MINIMAL FOOTER REUSE */}
      <footer className="py-10 border-t border-slate-50 text-center text-slate-400 text-xs">
        © 2026 International Journal of Psychological Studies. Editorial Coordination Center.
      </footer>
    </div>
  );
}