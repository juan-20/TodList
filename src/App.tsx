import { useState } from "react";
import { GlobalStyle } from './global';
import NewTaskModal from "./components/Modal/newTaskModal";
import KanbanPage from "./pages/KanbanPage";
import NewListBoxModal from "./components/Modal/NewListBoxModal";
import { ListBoxProvider } from "./hooks/ListBoxContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {

  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isNewListBoxModalOpen, setIsNewListBoxModalOpen] = useState(false);

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true);
    console.log('abriu');
  }


  function handleOpenNewListBoxModal() {
    setIsNewListBoxModalOpen(true);
    console.log('abriu o do list box');
  }

  function handleCloseNewListBoxModal() {
    setIsNewListBoxModalOpen(false);
  }


  return (
    <ListBoxProvider>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyle />
        {/* passando a função para poder abrir o popup  */}
        <KanbanPage
          onOpenNewTaskModal={handleOpenNewTaskModal}
          onOpenNewListBoxModal={handleOpenNewListBoxModal} />

        <NewTaskModal
          isOpen={isNewTaskModalOpen}
          onRequestClose={handleCloseNewTaskModal} />

        <NewListBoxModal
          isOpen={isNewListBoxModalOpen}
          onRequestClose={handleCloseNewListBoxModal} />
      </DndProvider>
    </ListBoxProvider>
  );
}

export default App;
