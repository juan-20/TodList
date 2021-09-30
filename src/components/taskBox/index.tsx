
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
