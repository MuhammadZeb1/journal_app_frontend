import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authActions.jsx";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, LogIn, Chrome, AlertCircle, Loader2, Sparkles } from "lucide-react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState("");
  const [forgotError, setForgotError] = useState("");
  const [showForgotModal, setShowForgotModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form)).then((res) => {
      if (!res.error) {
        const token = res.payload.token;
        localStorage.setItem("token", token);
        navigate("/"); 
      }
    });
  };

  const handleForgotPassword = async () => {
    try {
      setForgotSuccess("");
      setForgotError("");
      const res = await axios.post("http://localhost:5000/api/auth/forgot-password", {
        email: forgotEmail
      });
      setForgotSuccess(res.data.message);
    } catch (err) {
      setForgotError(err.response?.data?.message || "Something went wrong");
    }
  };

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } }
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="flex min-h-screen bg-white selection:bg-blue-100 selection:text-blue-700">
      {/* Left Side: Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-900 via-indigo-950 to-black items-center justify-center p-12 relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-5%] right-[-5%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" 
        />
        <motion.div initial="hidden" animate="visible" variants={containerVars} className="max-w-md space-y-6 text-white relative z-10">
          <motion.div variants={itemVars}
          
          className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 
          text-xs font-bold uppercase rounded-full backdrop-blur-md">
            <Sparkles size={14} />
            <span>Welcome Back</span>
          </motion.div>
          <motion.h1 variants={itemVars} className="text-3xl font-black tracking-tighter leading-tight">
            PSYCHOLOGICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              
              JOURNAL.</span>
          </motion.h1>
          <motion.p variants={itemVars} className="text-lg text-slate-300 leading-relaxed">
            The central hub for academic research, peer reviews, and manuscript management. 
            Sign in to continue your research journey.
          </motion.p>
          <motion.div variants={itemVars} className="flex gap-4 pt-4">
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium">Peer Reviewed</span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium">Open Access</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">Login</h2>
            <p className="text-slate-500 font-medium">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div variants={itemVars} initial="hidden" animate="visible">
              <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors w-5 h-5" />
                <input
                  type="email"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                  placeholder="name@university.edu"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVars} initial="hidden" animate="visible">
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <button
                  type="button"
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-tighter"
                  onClick={() => setShowForgotModal(true)}
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors w-5 h-5" />
                <input
                  type="password"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                />
              </div>
            </motion.div>

            <AnimatePresence>
              {error && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                  className="flex items-center gap-2 p-4 bg-rose-50 text-rose-700 rounded-2xl text-sm border border-rose-100 font-bold">
                  <AlertCircle size={18} />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-2xl shadow-blue-200 transition-all disabled:opacity-50 mt-4"
              type="submit"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" size={24} /> : <LogIn size={24} />}
              {loading ? "Authenticating..." : "Login"}
            </motion.button>
          </form>

          {/* Forgot Password Modal */}
          <AnimatePresence>
            {showForgotModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="bg-white rounded-2xl p-8 w-full max-w-md relative"
                >
                  <h3 className="text-2xl font-bold mb-4">Reset Password</h3>
                  <p className="text-sm text-slate-600 mb-4">Enter your email to receive a password reset link.</p>
                  <input
                    type="email"
                    className="w-full mb-4 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="name@university.edu"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                  />
                  {forgotError && <p className="text-red-600 text-sm mb-2">{forgotError}</p>}
                  {forgotSuccess && <p className="text-green-600 text-sm mb-2">{forgotSuccess}</p>}
                  <div className="flex justify-end gap-3">
                    <button className="px-4 py-2 rounded-xl bg-gray-200 font-bold" onClick={() => setShowForgotModal(false)}>Cancel</button>
                    <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold" onClick={handleForgotPassword}>Send Link</button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <span className="bg-white px-4">Social Gateway</span>
            </div>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            type="button"
            className="w-full py-4 bg-white border-2 border-slate-100 hover:border-blue-100 text-slate-700 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:bg-slate-50"
            onClick={() => window.open("http://localhost:5000/api/auth/google", "_self")}
          >
            <Chrome size={20} className="text-red-500" />
            Continue with Google
          </motion.button>

          <p className="mt-10 text-center text-slate-600 font-medium">
            New to the platform? <Link to="/register" className="text-blue-600 font-black hover:text-blue-800 underline underline-offset-8 decoration-2 transition-all">Create Account</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
