import { ReactNode, useContext, useState } from 'react';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import { Alert, Container } from '../NewListBoxModal/styles';
import { TasksContext } from '../../../hooks/TaskContext';
import { ListBoxContext } from '../../../hooks/ListBoxContext';

interface NewTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void,
}

function NewTaskModal({ isOpen, onRequestClose }: NewTaskModalProps) {

  const { createTask } = useContext(TasksContext)

  const [title, setTitle] = useState('');
  const [collumn, setCollumn] = useState('');
  const [type, setType] = useState(false);


  function CreateNewTask() {

    console.log({
      title, collumn
    })

    // createTask({
    //   title, collumn
    // })

  }



  Modal.setAppElement('#root');
  const { listBox } = useContext(ListBoxContext)

  let idCollumn = listBox;

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

        <h1>Cadastrar task</h1>


        <input type="text" placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)} />

        <select name="Selecionar outra lista">
          {idCollumn.map(idCollumn => (
            <option key={idCollumn.id} value={idCollumn.id}>{idCollumn.title}</option>
          ))}
        </select>

        <button
          onClick={CreateNewTask}
          type="submit">
          Cadastrar
        </button>

      </Container>

    </Modal>

  );
};

export default NewTaskModal;
