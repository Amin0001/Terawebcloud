// utils/authy.js

import axios from "axios";

const authyApiKey = process.env.TWILIO_AUTHY_API_KEY;

export const sendOTP = async (phoneNumber, countryCode) => {
  try {
    const response = await axios.post(
      "https://api.authy.com/protected/json/sms",
      {
        api_key: authyApiKey,
        phone_number: phoneNumber,
        country_code: countryCode,
        via: "sms",
      }
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const verifyOTP = async (phoneNumber, countryCode, otp) => {
  try {
    const response = await axios.get(
      `https://api.authy.com/protected/json/verify/${otp}/via/sms`,
      {
        params: {
          api_key: authyApiKey,
          phone_number: phoneNumber,
          country_code: countryCode,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
