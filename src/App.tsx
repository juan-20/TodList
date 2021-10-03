import { useEffect, useState } from "react";
import { GlobalStyle } from './global';
import NewTaskModal from "./components/Modal/newTaskModal";
import KanbanPage from "./pages/KanbanPage";
import NewListBoxModal from "./components/Modal/NewListBoxModal";
import { ListBoxProvider } from "./hooks/ListBoxContext";
import { TasksContext, TasksProvider } from "./hooks/TaskContext";
import { api } from "./services/api";

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
      <TasksProvider>
        <GlobalStyle />
        {/* passando a função para poder abrir o popup  */}
        <KanbanPage
          onOpenNewTaskModal={handleOpenNewTaskModal}
          onOpenNewListBoxModal={handleOpenNewListBoxModal} />

        <NewTaskModal
          // fazer com que o id passado aqui seja o que simboliza o listbox que o botão foi clicado
          //  olha aqui juan do futuro: https://stackoverflow.com/questions/33682774/how-to-access-the-key-property-from-a-reactjs-component
          idOfTheListBox={4}
          isOpen={isNewTaskModalOpen}
          onRequestClose={handleCloseNewTaskModal} />

        <NewListBoxModal
          isOpen={isNewListBoxModalOpen}
          onRequestClose={handleCloseNewListBoxModal} />

      </TasksProvider>
    </ListBoxProvider>
  );
}

export default App;
