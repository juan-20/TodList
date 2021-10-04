import { useContext, useState } from 'react';
import { GoPlus } from 'react-icons/go';
import TaskBox from '../../components/taskBox';
import { ListBoxContext } from '../../hooks/ListBoxContext';
import { CreateTask, Wrapper, ListBox, CreateListBox } from './styles';

interface KanbanPageFunctionProps {
  onOpenNewTaskModal: () => void;
  onOpenNewListBoxModal: () => void;
}

function KanbanPage({ onOpenNewTaskModal, onOpenNewListBoxModal }: KanbanPageFunctionProps) {

  const { listBox } = useContext(ListBoxContext)

  const [type, setType] = useState('#fff');

  const style = { color: "#fff", fontSize: "1.5rem", stroke: "#fff" }

  return (
    <Wrapper>
      <div className="header">
        <h1>KanbanPage</h1>

        <CreateListBox onClick={onOpenNewListBoxModal}>


          <GoPlus style={style} />
          <p>Adicionar outra Lista</p>
        </CreateListBox>

      </div>

      <div className="list">
        {listBox.map(listBoxs => (
          <ListBox
            NewColor={listBoxs.color}
            key={listBoxs.id}>
            {/* title must be dinamic and also color */}
            <div className="list-box-content" >
              <h1>{listBoxs.title}</h1>

              {console.log(listBoxs.color)}

              <TaskBox name={listBoxs.tasks} idCollumn={listBox} />
            </div>

            <CreateTask onClick={onOpenNewTaskModal}>

              <GoPlus style={style} />

              <p>Adiconar Cartão</p>

            </CreateTask>

          </ListBox>
        ))}
      </div>
    </Wrapper>
  );
};

export default KanbanPage;
