import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 overflow-hidden">
      {/* Navbar (Optional but recommended for modern look) */}
      <nav className="navbar px-6 py-4 max-w-7xl mx-auto bg-transparent relative z-10">
        <div className="flex-1">
          <span className="text-2xl font-black tracking-tighter text-primary">XEOS.</span>
        </div>
        <div className="flex-none gap-4">
          <Link to="/login" className="btn btn-ghost btn-sm px-6">Login</Link>
          <Link to="/register" className="btn btn-primary btn-sm px-6 rounded-full shadow-lg shadow-primary/20">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative pt-20 pb-32 px-6">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 animate-bounce">
            <Zap size={14} />
            <span>Introducing Xeos 2.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
            Publish your research <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              with confidence.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-base-content/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            The all-in-one platform for authors, reviewers, and publishers. 
            Streamline your manuscript submission and peer-review process in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register" className="btn btn-primary btn-lg px-10 rounded-full gap-2 group">
              Get Started for Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="btn btn-outline btn-lg px-10 rounded-full">
              Learn More
            </Link>
          </div>

          {/* Trust Badges / Stats */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-base-200 rounded-2xl mb-4">
                <ShieldCheck className="text-primary" />
              </div>
              <h3 className="font-bold">Secure Storage</h3>
              <p className="text-sm opacity-60">GridFS encrypted file handling</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-base-200 rounded-2xl mb-4">
                <BookOpen className="text-secondary" />
              </div>
              <h3 className="font-bold">Expert Review</h3>
              <p className="text-sm opacity-60">Vetted academic professionals</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-base-200 rounded-2xl mb-4">
                <Zap className="text-accent" />
              </div>
              <h3 className="font-bold">Fast Approval</h3>
              <p className="text-sm opacity-60">Reduced time-to-publication</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Minimal */}
      <footer className="text-center py-10 opacity-40 text-sm">
        © 2026 Xeos Research Portal. Built for the future of Science.
      </footer>
    </div>
  );
}