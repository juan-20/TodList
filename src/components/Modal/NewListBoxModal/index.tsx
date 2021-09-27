import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';


interface NewListBoxProps {
  isOpen: boolean;
  onRequestClose: () => void
}

function NewListBoxModal({ isOpen, onRequestClose }: NewListBoxProps) {

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

      <h1>Cadastrar List box</h1>

    </Modal>
  );
};

export default NewListBoxModal;
