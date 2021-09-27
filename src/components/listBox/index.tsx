import TaskBox from '../taskBox';
import { Container, CreateTask } from './styles';
import { GoPlus } from 'react-icons/go'

function ListBox() {
  return (
    <Container>

      {/* title must be dinamic and also color */}
      <h1> To do </h1>

      <TaskBox />
      <TaskBox />

      <CreateTask>

        <GoPlus />
        <p>Adicionar outro cartão</p>

      </CreateTask>

    </Container>
  );
};

export default ListBox;
