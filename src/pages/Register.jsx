import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authActions.jsx";
import { useNavigate, Link } from "react-router-dom";
import { 
  User, 
  Mail, 
  Lock, 
  UserPlus, 
  Chrome, 
  AlertCircle, 
  Loader2, 
  CheckCircle2 
} from "lucide-react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form)).then((res) => {
      if (!res.error) navigate("/login");
    });
  };

  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Left Side: Branding/Info (Hidden on small screens) */}
      <div className="hidden lg:flex lg:w-1/2 bg-secondary items-center justify-center p-12 text-secondary-content relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

        <div className="max-w-md space-y-8 relative z-10">
          <div className="badge badge-accent p-3 font-bold uppercase tracking-widest">Join the Community</div>
          <h1 className="text-5xl font-black leading-tight">Begin your research journey.</h1>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 text-accent" />
              <div>
                <h3 className="font-bold text-xl">Submit Manuscripts</h3>
                <p className="opacity-80">Easy file management and status tracking for all your papers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 text-accent" />
              <div>
                <h3 className="font-bold text-xl">Expert Peer Review</h3>
                <p className="opacity-80">Connect with qualified experts in your field of study.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="card w-full max-w-md bg-base-100 shadow-2xl p-10 border border-base-300">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Create Account</h2>
            <p className="text-base-content/60">Fill in your details to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div className="form-control">
              <label className="label font-semibold">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full pl-10 focus:input-secondary"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="form-control">
              <label className="label font-semibold">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 w-5 h-5" />
                <input
                  type="email"
                  placeholder="name@university.edu"
                  className="input input-bordered w-full pl-10 focus:input-secondary"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label font-semibold">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 w-5 h-5" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full pl-10 focus:input-secondary"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="alert alert-error py-2 text-sm mt-2">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <button
              className="btn btn-secondary w-full gap-2 mt-6 shadow-lg shadow-secondary/20"
              type="submit"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <UserPlus size={20} />}
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <div className="divider text-xs uppercase opacity-40 my-8">Or register with</div>

          {/* Google Register */}
          <button
            type="button"
            className="btn btn-outline w-full gap-2 hover:bg-error hover:border-error group transition-all"
            onClick={() => window.open("http://localhost:5000/api/auth/google", "_self")}
          >
            <Chrome size={20} className="group-hover:rotate-12 transition-transform" />
            Sign up with Google
          </button>

          <p className="mt-8 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-secondary font-bold hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}