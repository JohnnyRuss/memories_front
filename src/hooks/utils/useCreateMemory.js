import { useModalContext } from "providers/ModalProvider";
import { MemoryForm } from "components/layouts";

export default function useCreateMemory() {
  const { onOpenModal, onClose } = useModalContext();

  function onOpenCreateMemoryModal() {
    onOpenModal({
      content: <MemoryForm onDone={() => onClose()} />,
      modalStyles: { width: "500px" },
    });
  }

  return { onOpenCreateMemoryModal };
}
