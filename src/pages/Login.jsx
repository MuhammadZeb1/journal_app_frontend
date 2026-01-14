import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authActions.jsx";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, LogIn, Chrome, AlertCircle, Loader2 } from "lucide-react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form)).then((res) => {
      if (!res.error) {
        // ✅ Extract token and user from response payload
        const token = res.payload.token;
       
        localStorage.setItem("token", token);
        // Save role for Navbar

        navigate("/"); // redirect after login
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Left Side: Visual/Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary items-center justify-center p-12 text-primary-content">
        <div className="max-w-md space-y-6">
          <h1 className="text-5xl font-black tracking-tight">Welcome to PubliSync.</h1>
          <p className="text-lg opacity-80 leading-relaxed">
            The central hub for academic research, peer reviews, and manuscript management. 
            Sign in to continue your research journey.
          </p>
          <div className="flex gap-4">
            <div className="badge badge-outline p-4">Peer Reviewed</div>
            <div className="badge badge-outline p-4">Open Access</div>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="card w-full max-w-md bg-base-100 shadow-2xl p-10 border border-base-300">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-2">Login</h2>
            <p className="text-base-content/60">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="form-control">
              <label className="label font-semibold">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 w-5 h-5" />
                <input
                  type="email"
                  placeholder="name@university.edu"
                  className="input input-bordered w-full pl-10 focus:input-primary"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="form-control">
              <div className="flex justify-between items-center">
                <label className="label font-semibold">Password</label>
                <a href="#" className="label-text-alt link link-hover text-primary">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 w-5 h-5" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full pl-10 focus:input-primary"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Error Alert */}
            {error && (
              <div className="alert alert-error py-2 text-sm">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <button
              className="btn btn-primary w-full gap-2 mt-4 shadow-lg shadow-primary/20"
              type="submit"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <LogIn size={20} />}
              {loading ? "Verifying..." : "Login"}
            </button>
          </form>

          <div className="divider text-xs uppercase opacity-40 my-8">Or continue with</div>

          {/* Google Login */}
          <button
            type="button"
            className="btn btn-outline w-full gap-2 hover:bg-error hover:border-error"
            onClick={() => window.open("http://localhost:5000/api/auth/google", "_self")}
          >
            <Chrome size={20} />
            Login with Google
          </button>

          <p className="mt-8 text-center text-sm text-base-content/60">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary font-bold hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
