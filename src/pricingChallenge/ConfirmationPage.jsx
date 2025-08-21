import { useNavigate } from "react-router-dom";

function ConfirmationPage({ selectedPlan, userData }) {
  const navigate = useNavigate();

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">✅ Signup Successful!</h1>
      <p className="mb-2">Thank you, {userData?.name}</p>
      <p className="mb-2">Email: {userData?.email}</p>
      <p className="mb-4">
        You chose the <strong>{selectedPlan?.name}</strong> plan (
        {selectedPlan?.price})
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go Back to Home
      </button>
    </div>
  );
}

export default ConfirmationPage;

