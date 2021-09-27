import ListBox from '../../components/listBox';
import { Container } from './styles';

interface KanbanPageProps {
  onOpenNewTaskModal: () => void;
}


function KanbanPage({ onOpenNewTaskModal }: KanbanPageProps) {
  return (
    <Container>
      <h1>KanbanPage</h1>

      <ListBox onOpenNewTaskModalInListBox={onOpenNewTaskModal} />

    </Container>
  );
};

export default KanbanPage;
