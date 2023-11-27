// pages/index.js

import { useState } from "react";
import { sendOTP, verifyOTP } from "../utils/authy";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [otp, setOTP] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);

  const handleSendOTP = async () => {
    try {
      const result = await sendOTP(phoneNumber, countryCode);
      console.log("OTP Sent:", result);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const result = await verifyOTP(phoneNumber, countryCode, otp);
      console.log("OTP Verified:", result);
      setVerificationResult(result);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setVerificationResult(error);
    }
  };

  return (
    <div>
      <h1>Twilio Authy Integration</h1>
      <label>
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <label>
        Country Code:
        <input
          type="text"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSendOTP}>Send OTP</button>
      <br />
      <label>
        OTP:
        <input
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleVerifyOTP}>Verify OTP</button>
      <br />
      <div>
        <h2>Verification Result:</h2>
        <pre>{JSON.stringify(verificationResult, null, 2)}</pre>
      </div>
    </div>
  );
}
