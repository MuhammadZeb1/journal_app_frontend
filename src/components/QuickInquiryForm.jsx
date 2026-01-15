import { useState } from "react";
import { Send } from "lucide-react";

export default function QuickInquiryForm() {
  const [form, setForm] = useState({
    name: "",
    message: "",
    email: "zebafridiuu@gmail.com", // always your email
  });

  const [loading, setLoading] = useState(false);

  // handle input changes
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // send email on submit
  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/email/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, message: form.message }),
      });

      const data = await res.json();
      alert(data.message); // show success message
      setForm({ name: "", message: "", email: "zebafridiuu@gmail.com" }); // reset form
    } catch (err) {
      alert("Failed to send inquiry");
      console.error(err);
    }

    setLoading(false);
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
        <input
          type="email"
          name="email"
          value={form.email}
          readOnly
          className="border p-3 rounded-lg w-full bg-gray-100"
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
