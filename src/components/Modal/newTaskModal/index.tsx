import { ReactNode } from 'react';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';

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

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <GrClose />
      </button>

      <h1>Cadastrar Task</h1>

    </Modal>
  );
};

export default NewTaskModal;
