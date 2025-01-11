import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className="flex h-screen w-full max-w-[1160px] py-12 mx-auto gap-y-12 gap-x-12 justify-between overflow-hidden">
      {/* Left Section */}
      <div className="w-full max-w-[450px] mx-auto text-white">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
          <span className="text-slate-100">{desc1}</span>
          <span className="text-blue-400 italic">{desc2}</span>
        </p>

        {/* Form (Signup or Login) */}
        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        {/* OR Divider */}
        
      </div>

      {/* Right Section - Image */}
      <div className="relative w-full max-w-[450px]">
        <img
          src={frame}
          alt="frame pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
};

export default Template;
