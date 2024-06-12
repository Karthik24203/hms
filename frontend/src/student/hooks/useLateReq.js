import React, { useState } from "react";

import toast from "react-hot-toast";

const useLateReq = () => {
  const [loading, setLoading] = useState(false);

  const HandleLateReq = async ({
    room_number,
    subject,
    reason,
    permission_letter,
  }) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("room_number", room_number);
      formData.append("subject", subject);
      formData.append("reason", reason);
      formData.append("permission_letter", permission_letter);

      const res = await fetch("/api/requests/late", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      console.log(data);
      toast.success("Late request submitted successfully", {
        position: "top-right",
      });
    } catch (error) {
      toast.error("Failed to send leave request", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return { loading, HandleLateReq };
};

export default useLateReq;
