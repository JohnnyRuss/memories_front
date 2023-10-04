import { createContext, useContext, useState } from "react";
import { Modal } from "components/layouts";

const ModalContext = createContext({
  onClose: () => {},
  onOpenModal: ({ content, onOpen, onClose, modalStyles }) => {},
});

export default function ModalProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [modal, setModal] = useState({
    content: null,
    onClose: () => {},
    modalStyles: {},
  });

  function onOpenModal({
    content = null,
    onOpen = () => {},
    onClose = () => {},
    modalStyles = {},
  }) {
    setModal({
      content,
      onClose,
      modalStyles,
    });

    onOpen && onOpen();
    setOpenModal(true);
  }

  function onClose() {
    setOpenModal(false);
    modal.onClose();
  }

  return (
    <ModalContext.Provider value={{ onOpenModal, onClose }}>
      {children}
      <Modal
        open={openModal}
        onClose={onClose}
        content={modal.content}
        modalStyles={modal.modalStyles}
      />
    </ModalContext.Provider>
  );
}

export const useModalContext = () => useContext(ModalContext);
