import { useState } from "react";
import { Snackbar } from "@mui/material";

function Feedback({ message, severity = "info" }) {
  const [open, setOpen] = useState(true);

  return (
    <Snackbar
      open={open}
      autoHideDuration={1000}
      onClose={() => setOpen(false)}
      message={message}
      severity={severity}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    />
  );
}

export default Feedback;
