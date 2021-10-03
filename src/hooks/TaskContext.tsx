import axios from 'axios';
import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api';

export const TasksContext = createContext<TasksContextData>({} as TasksContextData);


interface Task {
    id: number;
    title: string;
    collumn: string;
}

type TaskInput = Omit<Task, 'id'>

// deixa ele ter conteudo dentro dele
interface TasksProviderProps {
    children: ReactNode;
}

interface TasksContextData {
    tasks: Task[];
    createTask: (task: TaskInput) => void;
}

interface ListBox {
    id: string,
    color: string,
    title: string,
    task: [
        id: number,
        title: string,
        collumn: string,
    ]
}

export function TasksProvider({ children }: TasksProviderProps) {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        api.get('listBox')
            .then(response => setTasks(response.data.tasks))
    }, [])

    function createTask(task: TaskInput) {

        const getData = async () => {
            const res = await axios.get('https://localhost:3000/api/listBox')
            console.log(res)
            // id que será enviado pelo componente que será o collumn
            let id = 4;
            let i = 0
            while (res.data.listBoxs[i] !== id) {
                i++;
            }

            // o i vai ter a posição do array que vou salvar a task

        }
        getData();
        // api.get('/listBox'), listbox.id
        // api.post('/listBox', task)
    }

    return (
        <TasksContext.Provider value={{ tasks, createTask }}>
            {children}
        </TasksContext.Provider>
    )
}
