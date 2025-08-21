import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  const plan = new URLSearchParams(useLocation().search).get("plan");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email.includes("@") || pass.length < 6 || pass !== confirm) {
      return setError("Please check your inputs");
    }
    navigate("/confirmation", { state: { name, email, plan } });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xs mx-auto p-4 flex flex-col gap-3 border rounded shadow-sm mt-6"
    >
      <h2 className="text-xl font-bold">Signup for {plan}</h2>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <input
        placeholder="Full Name"
        className="border p-2 rounded"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        className="border p-2 rounded"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
        onChange={(e) => setPass(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="border p-2 rounded"
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
        Signup
      </button>
    </form>
  );
}
