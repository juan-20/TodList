import { useContext } from 'react';
import { GoPlus } from 'react-icons/go';
import { ListBoxContext } from '../../hooks/ListBoxContext';
import TaskBox from '../taskBox';
import { Container, CreateTask } from './styles';

interface ListBoxProps {
  onOpenNewTaskModalInListBox: () => void;
}


function ListBox({ onOpenNewTaskModalInListBox }: ListBoxProps) {

  const { listBox } = useContext(ListBoxContext)

  console.log(listBox)

  let i = 0;

  return (
    <Container>

      {/* title must be dinamic and also color */}
      {listBox.map(listBoxs => (
        <div key={listBoxs.id}>
          <h1>{listBoxs.title}</h1>


          <TaskBox name={listBoxs.tasks} />
        </div>
      ))}

      <CreateTask onClick={onOpenNewTaskModalInListBox}>

        <GoPlus />

        <p>Adiconar Cartão</p>

      </CreateTask>

    </Container>
  );
};

export default ListBox;
