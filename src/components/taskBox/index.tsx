
import { motion } from 'framer-motion';
import Select from 'react-select';
import { Container } from './styles';

interface Task {
  id: number;
  title: string;
  collumn: string;
}

interface ListBox {
  id: number,
  title: string
}

interface props {
  name: Task[];
  idCollumn: ListBox[];
}


function TaskBox({ name, idCollumn }: props) {

  return (
    <Container >

      {name != undefined ?
        name.map(name => (
          <motion.div className="task" key={name.id}
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
            <div className="task-content">
              <h1>{name.title}</h1>


              <div className="tag">
                <select name="Selecionar outra lista">
                  {idCollumn.map(idCollumn => (
                    <option key={idCollumn.id} value={idCollumn.id}>{idCollumn.title}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        ))
        : <p>Nenhuma Task criada :/</p>
      }




    </Container>
  );
};

export default TaskBox;
