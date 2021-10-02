import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api';

export const TasksContext = createContext<TasksContextData>({} as TasksContextData);

// parou em 10 min
interface Task {
    id: number;
    title: string;
    type: string;
    category: string;
    createdAt: string;
}

// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }
// ou:  (pode usar pick pra selecionar os campos que você quer)
type TaskInput = Omit<Task, 'id' | 'createdAt'>

// deixa ele ter conteudo dentro dele
interface TasksProviderProps {
    children: ReactNode;
}

interface TasksContextData {
    tasks: Task[];
    createTask: (task: TaskInput) => void;
}

export function TasksProvider({ children }: TasksProviderProps) {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        api.get('tasks')
            .then(response => setTasks(response.data.tasks))
    }, [])

    function createTask(task: TaskInput) {

        api.post('/tasks', task)
    }

    return (
        <TasksContext.Provider value={{ tasks, createTask }}>
            {children}
        </TasksContext.Provider>
    )
}
