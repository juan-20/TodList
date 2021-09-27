import { useState } from "react";
import { GlobalStyle } from './global';
import NewTaskModal from "./components/newTaskModal";
import KanbanPage from "./pages/KanbanPage";

function App() {

  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false)
  }

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true);
    console.log('abriu')
  }

  return (
    <>
      <GlobalStyle />
      {/* passando a função para poder abrir o popup  */}
      <KanbanPage onOpenNewTaskModal={handleOpenNewTaskModal} />

      <NewTaskModal
        isOpen={isNewTaskModalOpen}
        onRequestClose={handleCloseNewTaskModal} />
    </>
  );
}

export default App;
