import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import { FormEvent, useContext, useState } from 'react';
import { Alert, Container } from './styles';
import { api } from '../../../services/api';
import { ListBoxContext } from '../../../hooks/ListBoxContext';


interface NewListBoxProps {
  isOpen: boolean;
  onRequestClose: () => void
}

function NewListBoxModal({ isOpen, onRequestClose }: NewListBoxProps) {

  const { createListBox } = useContext(ListBoxContext)

  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [type, setType] = useState(false);

  function createBoxModal(event: FormEvent) {
    console.log({ title, color })

    if (!title) {
      setType(true)
      return
    }

    if (title) {
      setType(false)
    }
    event.preventDefault();
    createListBox({
      title,
      color
    })
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

        <Alert
          isActive={type === false}
          activeColor="gray"
        >Digite o título:</Alert>

        <input type="text" placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)} />


        <p id="color">Clique e selecione uma cor:</p>

        <input type="color" placeholder="Titulo"
          value={color}
          onChange={event => setColor(event.target.value)} />

        <button
          onClick={createBoxModal}
          type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  );
};

export default NewListBoxModal;
