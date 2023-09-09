import { createContext, useContext, useState } from "react";
import Dialog from "components/layouts/Dialog/Dialog";

const DialogContext = createContext({
  onOpenDialog: ({ title, message, onClose, onConfirm }) => {},
});

export default function DialogProvider({ children }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialog, setDialog] = useState({
    title: "",
    message: "",
    onConfirm: () => {},
    onClose: () => {},
  });

  function onOpenDialog({
    title = "",
    message = "",
    onClose = () => {},
    onConfirm = () => {},
  }) {
    setDialog({
      title,
      message,
      onClose,
      onConfirm,
    });

    setOpenDialog(true);
  }

  function onClose() {
    setOpenDialog(false);
    dialog.onClose();
  }

  function onConfirm() {
    setOpenDialog(false);
    dialog.onConfirm();
  }

  return (
    <DialogContext.Provider value={{ onOpenDialog }}>
      {children}
      <Dialog
        open={openDialog}
        title={dialog.title}
        message={dialog.message}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    </DialogContext.Provider>
  );
}

export const useDialogContext = () => useContext(DialogContext);
