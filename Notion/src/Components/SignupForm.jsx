import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    console.log(accountData);

    navigate("/dashboard");
  }

  return (
    <div className="max-w-lg mx-auto bg-richblack-900 p-6 rounded-lg shadow-lg h-sc">
      <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max mb-6">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-yellow-200 text-richblack-900"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-yellow-200 text-richblack-900"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4 mb-6">
          <label className="w-full">
            <p className="text-sm text-richblack-5 mb-1">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstName}
              name="firstName"
              className="bg-richblack-800 text-black rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </label>

          <label className="w-full">
            <p className="text-sm text-richblack-5 mb-1">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              name="lastName"
              className="bg-richblack-800 text-black rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </label>
        </div>

        <label className="w-full mb-6">
          <p className="text-sm text-richblack-5 mb-1">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={formData.email}
            onChange={changeHandler}
            className="bg-richblack-800 text-black rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            name="email"
          />
        </label>

        <div className="flex gap-x-4 mb-6">
          <label className="w-full relative">
            <p className="text-sm text-richblack-5 mb-1">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showCreatePass ? "text" : "password"}
              required
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              name="password"
              className="bg-richblack-800 text-black rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <span
              onClick={() => setShowCreatePass(!showCreatePass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-sm text-richblack-5 mb-1">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showConfirmPass ? "text" : "password"}
              required
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
              name="confirmPassword"
              className="bg-richblack-800 text-black rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-yellow-200 py-3 px-5 rounded-lg font-medium text-richblack-900 w-full hover:bg-yellow-300 transition-colors duration-300">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
