import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "react-hot-toast";
import API from "../api/authApi";

export default function QuickInquiryForm() {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await API.post("/email/inquiry", {
        name: form.name,
        message: form.message,
      });

      toast.success(data.message || "Message sent successfully ✅");

      setForm({ name: "", message: "" });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to send message ❌"
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Quick Inquiry</h2>

      <form onSubmit={handleSend} className="grid gap-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="border p-3 rounded-lg w-full"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="border p-3 rounded-lg w-full h-32"
        />

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          <Send size={18} />
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
