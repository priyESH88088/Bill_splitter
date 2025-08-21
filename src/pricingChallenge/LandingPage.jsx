import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const plans = ["Basic", "Standard", "Premium"];

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-6">Pricing Plans</h1>

      <div className="flex flex-wrap justify-center gap-4">
        {plans.map((plan) => (
          <div
            key={plan}
            className="border rounded p-4 w-40 shadow-sm"
          >
            <h3 className="font-semibold">{plan}</h3>
            <p className="text-gray-600">
              {plan === "Basic" ? "$9" : plan === "Standard" ? "$19" : "$29"}/mo
            </p>
            <button
              onClick={() => navigate(`/signup?plan=${plan}`)}
              className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Choose
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
