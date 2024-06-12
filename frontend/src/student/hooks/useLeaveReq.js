import { useState } from "react";
import toast from "react-hot-toast";

const useLeavReq = () => {
  const [loading, setLoading] = useState(false);

  const HandleLeaveReq = async ({
    room_number,
    subject,
    body,
    permission_letter,
  }) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("room_number", room_number);
      formData.append("subject", subject);
      formData.append("body", body);
      formData.append("permission_letter", permission_letter);

      const res = await fetch("/api/requests/leave", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      console.log(data);
      toast.success("Leave request submitted successfully", {
        position: "top-right",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        // className: "custom-toast",
      });
    } finally {
      setLoading(false);
    }
  };

  return { loading, HandleLeaveReq };
};

export default useLeavReq;
