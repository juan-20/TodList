
import { motion } from 'framer-motion';
import { title } from 'process';
import { Container } from './styles';

interface Task {
  id: number;
  title: string;
  collumn: string;
}
interface props {
  name: Task[];
}


function TaskBox({ name }: props) {
  console.log(name, 'eita')


  return (
    <Container >

      {name.map(name => (
        <div className="task">
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
            <div key={name.id} className="task-content">
              <h1>{name.title}</h1>

              <div className="tag">
                <p>hehe</p>
              </div>
            </div>
          </motion.div>
        </div>
      ))}


    </Container>
  );
};

export default TaskBox;
