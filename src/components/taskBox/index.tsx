import { Container } from './styles';


function TaskBox() {
  return (
    <Container>
      <div className="task">
        <div className="task-content">
          <h1>Titulo da task</h1>

          <div className="tag">
            <p>Tag 1</p>
          </div>
        </div>
      </div>

    </Container>
  );
};

export default TaskBox;
