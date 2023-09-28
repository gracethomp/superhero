import { ReactNode } from "react";
import { createPortal } from "react-dom";
import './Modal.css';

interface ModalProps {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: (...args: any[]) => void;
}

export function Modal({
  children,
  isOpen = true,
  onClose,
}: ModalProps) {
  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return createPortal(
    <div
      className={
        isOpen
          ? "visible-modal"
          : "invisible-modal"
      }
      onClick={handleBackdropClick}
    >
      <div className={`modal-content`}>
        {children}
      </div>
    </div>,
    document.body
  );
}
