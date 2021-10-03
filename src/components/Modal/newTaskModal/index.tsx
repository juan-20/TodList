import { ReactNode, useContext, useState } from 'react';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import { Alert } from '../NewListBoxModal/styles';
import { TasksContext } from '../../../hooks/TaskContext';

interface NewTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void
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

    createTask({
      title, collumn
    })

  }

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


      <input type="text" placeholder="Titulo"
        value={title}
        onChange={event => setTitle(event.target.value)} />

      <input type="text" placeholder="Titulo"
        value={collumn}
        onChange={event => setCollumn(event.target.value)} />

      <button
        onClick={CreateNewTask}
        type="submit">
        Cadastrar
      </button>


    </Modal>

  );
};

export default NewTaskModal;
