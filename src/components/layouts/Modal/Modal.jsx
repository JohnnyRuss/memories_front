import { createPortal } from "react-dom";
import { Modal as MuiModal, Box, Button } from "@mui/material";
import { Close } from "@mui/icons-material";

const contentMainWindowStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "70vw",
  minWidth: 270,
  maxHeight: "90vh",
  overflowY: "hidden",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  padding: "7px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width:500px)": {
    inset: 0,
    position: "fixed",
    transform: "none",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "0",
  },
};

const contentInnerWindowStyles = {
  maxHeight: "calc(90vh - 14px)",
  width: "100%",
  overflowY: "auto",

  "&::-webkit-scrollbar": {
    width: "11px",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "#111",
    borderRadius: " 1rem",
  },

  "&::-webkit-scrollbar-track": {
    background: "#999",
    borderRadius: "1rem",
  },
};

const CloseButtonStyles = {
  position: "absolute",
  top: "10px",
  right: "10px",
  display: "none",

  "@media (max-width:500px)": {
    display: "block",
  },
};

export default function Modal({ open = false, onClose, content, modalStyles }) {
  return createPortal(
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...contentMainWindowStyles, ...modalStyles }}>
        <Button sx={CloseButtonStyles} onClick={onClose}>
          <Close />
        </Button>
        <Box sx={contentInnerWindowStyles}>{content}</Box>
      </Box>
    </MuiModal>,
    document.getElementById("app_portal")
  );
}
