import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
     await axios.post("http://localhost:8080/reset-password", {
        token,
        newPassword,
      });
      toast.success("Password reset successful");
      
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Invalid or expired link");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
      <form onSubmit={handleReset} className="flex flex-col gap-3 w-80">
        <input
          type="password"
          placeholder="Enter new password"
          className="border p-2 rounded"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
