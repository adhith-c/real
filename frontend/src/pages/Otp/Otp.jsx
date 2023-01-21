import React, { useState } from "react";
import "./Otp.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../config/axios";
import { responsiveProperty } from "@mui/material/styles/cssUtils";

function Otp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [validate, setValidate] = useState({ status: false, error: "" });
  const changeOtp = (e) => {
    setOtp(e.target.value);
  };

  const otpCheck = () => {
    if (otp.length <= 5) {
      setValidate(() => ({
        status: false,
        error: "Otp must be 6 characters long",
      }));
    } else {
      setValidate(() => ({
        status: true,
        error: "",
      }));
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    otpCheck();
    console.log(otp);
    if (validate.status) {
      const response = await axios.post("/otpVerify", {
        otp,
        email: location.state.email,
      });
      console.log(response.data);
      if (response.data) {
        navigate("/login");
      } else {
        setValidate((prevState) => ({
          status: false,
          message: "Incorrect Otp",
        }));
      }
    }
    // else {
    //   console.log("otp error");
    // }
  };
  return (
    // <div className="h-screen bg-[url('../public/buildings.jpg')]  bg-opacity-25 bg-cover">
    <div className="h-screen bg-cover otpBg">
      <div className="w-full px-6 py-12 h-full  ">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-100">
          <div className=" md: w-2/5 rounded-r-3xl rounded-l-3xl ">
            <div className="mt-4">
              <h3 className="text-white-900 text-2xl text-center font-semibold ">
                OTP
              </h3>
              <div className="container mb-10  p-5 flex justify-center items-center flex-wrap">
                <form onSubmit={submitForm}>
                  <div className=" h-16">
                    <input
                      type="text"
                      value={otp}
                      onChange={changeOtp}
                      onBlur={otpCheck}
                      className="form-control block w-full px-1 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded"
                      placeholder="Enter The OTP"
                    />
                    {!validate.status && (
                      <p className="text-red-300 text-xs">{validate.error}</p>
                    )}
                  </div>

                  <div className=" mb-4 flex justify-center align-center">
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-orange-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-2/3"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light">
                      Verify
                    </button>
                  </div>
                  <div className=" mb-4">
                    <p className="text-white text-xs text-right font-normal">
                      Didnt Recieve an OTP?
                      <button className="bg-cyan-600 text-white font-medium">
                        Resend
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <form>
              <div className="mb-6"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
