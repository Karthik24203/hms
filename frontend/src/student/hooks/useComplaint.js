import React, { useState } from "react";
import toast from "react-hot-toast";

const useComplaint = () => {
  const [loading, setLoading] = useState();

  const handleComplaint = async ({ room_number, brief, complaint }) => {
    setLoading(true);
    try {
      const res = await fetch("/api/requests/complaint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ room_number, brief, complaint }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      console.log(data);
    } catch (error) {
      toast.error("Failed to send the complaint request");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, handleComplaint };
};

export default useComplaint;
