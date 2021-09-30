
import { motion } from 'framer-motion';
import { Container } from './styles';



function TaskBox() {


  return (
    <Container >
      <motion.div
        drag
        dragElastic={0.7}
        whileDrag={{ scale: 1.2 }}
        dragMomentum={false}
        onDrag={
          (event, info) => console.log(info.point.x, info.point.y)
        }
        onDragEnd={
          (event, info) => console.log('Salva dentro da nova listBox')
        }
      >
        <div className="task">
          <div className="task-content">
            <h1>Titulo da task</h1>

            <div className="tag">
              <p>Tag 1</p>
            </div>
          </div>
        </div>

      </motion.div>
    </Container>
  );
};

export default TaskBox;
