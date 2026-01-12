import { Link } from "react-router-dom";
import { 
  Home, 
  LogIn, 
  UserPlus, 
  UserCheck, 
  FileUp, 
  ShieldAlert,
  Layers
} from "lucide-react";

function Navbar() {
  return (
    /* BACKGROUND: bg-slate-900 with backdrop-blur 
       This creates a premium semi-transparent dark feel.
    */
    <div className="navbar sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 px-6 md:px-10 text-white shadow-2xl">
      
      {/* Logo Section */}
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg transition-transform group-hover:rotate-12">
            <Layers size={20} className="text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter hover:text-primary transition-colors">
            MyApp
          </span>
        </Link>
      </div>

      {/* Menu Section */}
      <div className="flex-none">
        <ul className="menu menu-horizontal items-center gap-1 font-medium">
          
          <li>
            <Link to="/" className="hover:bg-slate-800 rounded-lg py-2 flex gap-2">
              <Home size={18} className="text-slate-400" />
              <span className="hidden md:inline">Home</span>
            </Link>
          </li>

          <li>
            <Link to="/login" className="hover:bg-slate-800 rounded-lg py-2 flex gap-2">
              <LogIn size={18} className="text-slate-400" />
              <span className="hidden md:inline">Login</span>
            </Link>
          </li>

          <li>
            <Link to="/register" className="hover:bg-slate-800 rounded-lg py-2 flex gap-2">
              <UserPlus size={18} className="text-slate-400" />
              <span className="hidden md:inline">Register</span>
            </Link>
          </li>

          <li>
            <Link to="/request-expert" className="hover:bg-slate-800 rounded-lg py-2 flex gap-2">
              <UserCheck size={18} className="text-slate-400" />
              <span className="hidden md:inline">Request Expert</span>
            </Link>
          </li>

          {/* Action Buttons */}
          <li className="ml-2">
            <Link 
              to="/upload-paper" 
              className="btn btn-sm btn-primary border-none rounded-full px-5 flex gap-2 shadow-lg shadow-primary/20 hover:scale-105"
            >
              <FileUp size={16} />
              Upload Paper
            </Link>
          </li>

          <li>
            <Link 
              to="/admin-approve" 
              className="btn btn-sm btn-outline border-slate-600 text-white hover:bg-slate-800 rounded-full px-5 flex gap-2 ml-1"
            >
              <ShieldAlert size={16} className="text-primary" />
              Admin Panel
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;