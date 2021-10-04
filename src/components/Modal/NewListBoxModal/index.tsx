import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import { FormEvent, useContext, useState } from 'react';
import { AlertText, AlertColor, Container } from './styles';
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
  const [handleColor, setHandleColor] = useState(false);

  function createBoxModal(event: FormEvent) {
    console.log({ title, color })

    // const getData = async () => {
    //   const res = await axios.get('https://localhost:3000/api/listBox')
    //   console.log(res)
    // }
    // getData();

    if (!title) {
      setType(true)
      return
    }

    if (!color) {
      setHandleColor(true)
      return
    }
    event.preventDefault();
    createListBox({
      title,
      color,
      tasks: []
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

        <AlertText
          isActive={type === false}
          activeColor="gray"
        >Digite a cor:</AlertText>

        <input type="text" placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)} />


        <AlertColor
          isActive={handleColor === false}
          activeColor="gray"
        >Digite o título:</AlertColor>

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
