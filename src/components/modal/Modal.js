import { Dialog } from "@mui/material";
import React from "react";

const Modal = ({ handleClose, open, children }) => {
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        {children}
      </Dialog>
    </>
  );
};

export default Modal;
