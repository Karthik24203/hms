import React, { useState } from "react";
import toast from "react-hot-toast";

const useDamageRep = () => {
  const [loading, setLoading] = useState();

  const handleDamageRep = async ({
    location,
    brief,
    description,
    permission_letter,
  }) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("location", location);
      formData.append("brief", brief);
      formData.append("description", description);
      formData.append("uploadedimg", permission_letter);

      const res = await fetch("/api/requests/damage", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      console.log(data);
      toast.success("Damage reported successfully", {
        position: "top-right",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      });
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleDamageRep };
};

export default useDamageRep;
