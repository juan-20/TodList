import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import { Container } from './styles';


interface NewListBoxProps {
  isOpen: boolean;
  onRequestClose: () => void
}

function NewListBoxModal({ isOpen, onRequestClose }: NewListBoxProps) {

  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');

  function Submit() {
    console.log({ title, color })
  }

  Modal.setAppElement('#root');
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">

      <Container>

        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <GrClose />
        </button>

        <h1>Cadastrar List box</h1>

        <input type="text" placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)} />

        <p>Clique e selecione uma cor:</p>

        <input type="color" placeholder="Titulo"
          value={color}
          onChange={event => setColor(event.target.value)} />

        <button
          onClick={Submit}
          type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  );
};

export default NewListBoxModal;
