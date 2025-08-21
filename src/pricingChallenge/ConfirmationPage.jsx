import { useLocation, useNavigate } from "react-router-dom";

export default function ConfirmationPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p className="text-center mt-6">No signup data</p>;

  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold mb-3">✅ Signup Successful</h2>
      <p className="mb-1">Plan: <b>{state.plan}</b></p>
      <p className="mb-1">Name: {state.name}</p>
      <p className="mb-1">Email: {state.email}</p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Home
      </button>
    </div>
  );
}
