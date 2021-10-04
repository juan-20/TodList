import { motion, Variants } from 'framer-motion';
import { Container } from './styles';
import { GrNext } from 'react-icons/gr';
import womanReading from '../../assets/woman.svg'
import check from '../../assets/check-mark.png'
import laptop from '../../assets/laptop.png'
import memo from '../../assets/memo.png'
import rocket from '../../assets/rocket.png'

function Landing() {


  const style = { color: "#fff", fontSize: "1.5rem", stroke: "#fff" }

  const upanddown: Variants = {
    initial: {
      y: 0,
    },
    animate: {
      y: [30, 0, 30],
      transition: {
        duration: 1.6,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const bottle: Variants = {
    initial: {
      y: -800,
    },
    animate: {
      y: [20, 0, 20],
      transition: {
        duration: 1.6,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <Container>
      <motion.div id="landing">
        <motion.img variants={upanddown}
          initial="initial" animate="animate"
          drag
          dragElastic={0.7}
          whileDrag={{ scale: 1.2 }}
          className="float-icon" src={check} alt="" />

        <motion.img variants={bottle}
          initial="initial" animate="animate"
          drag
          dragElastic={0.7}
          whileDrag={{ scale: 1.2 }}
          className="float-icon rocket" src={rocket} alt="" />

        <aside>
          <img src={womanReading} alt="Ilustração simbolizando perguntas e respostas" />
          <strong>Organize suas tarefas diárias</strong>
        </aside>

        <motion.img variants={upanddown}
          initial="initial" animate="animate"
          drag
          dragElastic={0.7}
          whileDrag={{ scale: 1.2 }}
          className="float-icon" src={laptop} alt="" />

        <main>
          {/* <p> Quadro Kanban para organizar seu dia-a-dia </p> */}
          <button>
            <GrNext style={style} />
          </button>

        </main>
        <motion.img variants={bottle}
          initial="initial" animate="animate"
          drag
          dragElastic={0.7}
          whileDrag={{ scale: 1.2 }}
          className="float-icon memo" src={memo} alt="" />
      </motion.div>
    </Container >
  );
};

export default Landing;
