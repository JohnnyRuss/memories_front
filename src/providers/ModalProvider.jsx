import { createContext, useContext, useState } from "react";
import { Modal } from "components/layouts";

const ModalContext = createContext({
  onOpenModal: ({ content, onOpen, onClose }) => {},
});

export default function ModalProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [modal, setModal] = useState({
    content: null,
    onClose: () => {},
  });

  function onOpenModal({
    content = null,
    onOpen = () => {},
    onClose = () => {},
  }) {
    setModal({
      content,
      onClose,
    });

    onOpen && onOpen();
    setOpenModal(true);
  }

  function onClose() {
    setOpenModal(false);
    modal.onClose();
  }

  return (
    <ModalContext.Provider value={{ onOpenModal }}>
      {children}
      <Modal open={openModal} onClose={onClose} content={modal.content} />
    </ModalContext.Provider>
  );
}

export const useModalContext = () => useContext(ModalContext);
