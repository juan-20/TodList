import { ReactNode, useContext, useState } from 'react';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import { Container } from './styles';
import { TasksContext } from '../../../hooks/TaskContext';
import { ListBoxContext } from '../../../hooks/ListBoxContext';

interface NewTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void,
}

function NewTaskModal({ isOpen, onRequestClose }: NewTaskModalProps) {

  const { CreateTask } = useContext(TasksContext)

  const { listBox } = useContext(ListBoxContext)

  const [title, setTitle] = useState('');
  const [collumn, setCollumn] = useState(0);


  function CreateNewTask() {

    let id = document.getElementById('id')

    console.log({
      title, collumn,
    })

    CreateTask({
      title, collumn
    })

  }

  interface ListBox {
    id: number,
    color: string,
    title: string
    tasks: Task[],

  }

  interface Task {
    id: number;
    title: string;
    collumn: string;
  }


  Modal.setAppElement('#root');

  let idCollumn: ListBox[] = listBox;

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

        <h1>Cadastrar nova task</h1>

        <div className="content">
          <input type="text" placeholder="Titulo"
            value={title}
            onChange={event => setTitle(event.target.value)} />

          <select
            onChange={(e) => {
              const selectedList = e.target.value;
              setCollumn(parseFloat(selectedList))
            }}
            id="id" className="select" name="Selecionar outra lista">
            {idCollumn.map(idCollumns => (
              <option key={idCollumns.id} value={idCollumns.id}>{idCollumns.title}</option>
            ))}
          </select>

          <button
            onClick={CreateNewTask}
            type="submit">
            Cadastrar
          </button>
        </div>

      </Container>

    </Modal>

  );
};

export default NewTaskModal;
