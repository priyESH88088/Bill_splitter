import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./LandingPage";
import SignupPage from "./SignupPage";
import ConfirmationPage from "./ConfirmationPage";

function Main() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [userData, setUserData] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage setSelectedPlan={setSelectedPlan} />} />
        <Route path="/signup" element={<SignupPage selectedPlan={selectedPlan} setUserData={setUserData} />} />
        <Route path="/confirmation" element={<ConfirmationPage selectedPlan={selectedPlan} userData={userData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
