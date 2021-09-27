import { ReactNode } from 'react';
import Modal from 'react-modal'

interface NewTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

function NewTaskModal({ isOpen, onRequestClose }: NewTaskModalProps) {

  Modal.setAppElement('#root');
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">

    </Modal>
  );
};

export default NewTaskModal;
