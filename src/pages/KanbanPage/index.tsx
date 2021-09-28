import { GoPlus } from 'react-icons/go';
import ListBox from '../../components/listBox';
import { Container, CreateTask } from './styles';

interface KanbanPageFunctionProps {
  onOpenNewTaskModal: () => void;
  onOpenNewListBoxModal: () => void;
}


function KanbanPage({ onOpenNewTaskModal, onOpenNewListBoxModal }: KanbanPageFunctionProps) {
  return (
    <>
      <Container>
        <h1>KanbanPage</h1>

        <CreateTask onClick={onOpenNewListBoxModal}>

          <GoPlus />
          <p>Adicionar outro cartão</p>

        </CreateTask>

      </Container>


      <ListBox onOpenNewTaskModalInListBox={onOpenNewTaskModal} />
    </>
  );
};

export default KanbanPage;
