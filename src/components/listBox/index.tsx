import { GoPlus } from 'react-icons/go';
import TaskBox from '../taskBox';
import { Container, CreateTask } from './styles';

interface ListBoxProps {
  onOpenNewTaskModalInListBox: () => void;
}


function ListBox({ onOpenNewTaskModalInListBox }: ListBoxProps) {
  return (
    <Container>

      {/* title must be dinamic and also color */}
      <h1> To do </h1>

      <TaskBox />
      <TaskBox />

      <CreateTask onClick={onOpenNewTaskModalInListBox}>

        <GoPlus />
        <p>Adicionar outro cartão</p>

      </CreateTask>

    </Container>
  );
};

export default ListBox;
