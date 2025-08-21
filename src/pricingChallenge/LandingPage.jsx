import { useNavigate } from "react-router-dom";

function LandingPage({ setSelectedPlan }) {
  const navigate = useNavigate();

  const plans = [
    { name: "Basic", price: "$10/mo", features: ["Feature 1", "Feature 2"] },
    { name: "Standard", price: "$20/mo", features: ["Feature 1", "Feature 2"], recommended: true },
    { name: "Premium", price: "$30/mo", features: ["Feature 1", "Feature 2"] },
  ];

  const choosePlan = (plan) => {
    setSelectedPlan(plan);
    navigate("/signup");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Choose a Plan</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`border p-4 rounded-lg ${plan.recommended ? "border-blue-500" : ""}`}
          >
            <h2 className="font-semibold">{plan.name}</h2>
            <p>{plan.price}</p>
            <ul className="text-sm">
              {plan.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => choosePlan(plan)}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
