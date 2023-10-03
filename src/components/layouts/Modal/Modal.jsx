import { createPortal } from "react-dom";
import { Modal as MuiModal, Box } from "@mui/material";

const contentMainWindowStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
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

export default function Modal({ open, onClose, content }) {
  return createPortal(
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={contentMainWindowStyles}>
        <Box sx={contentInnerWindowStyles}>{content}</Box>
      </Box>
    </MuiModal>,
    document.getElementById("app_portal")
  );
}
