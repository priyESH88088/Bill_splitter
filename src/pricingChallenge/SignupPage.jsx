import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage({ selectedPlan, setUserData }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    terms: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) return setError("Name is required");
    if (!form.email.includes("@")) return setError("Enter a valid email");
    if (form.password.length < 6) return setError("Password must be at least 6 characters");
    if (form.password !== form.confirm) return setError("Passwords do not match");
    if (!form.terms) return setError("You must accept the terms");

    setUserData({ name: form.name, email: form.email });
    navigate("/confirmation");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        Signup for {selectedPlan?.name || "a Plan"}
      </h1>
      {error && <p className="text-red-500">{error}</p>}
      <form className="flex flex-col gap-2 max-w-sm" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="border p-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2"
        />
        <input
          name="confirm"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          className="border p-2"
        />
        <label className="text-sm">
          <input type="checkbox" name="terms" onChange={handleChange} /> Accept Terms
        </label>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
