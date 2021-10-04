import axios from 'axios';
import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api';

export const TasksContext = createContext<TasksContextData>({} as TasksContextData);


interface Task {
    id: number;
    title: string;
    collumn: number;
}

type TaskInput = Omit<Task, 'id'>

// deixa ele ter conteudo dentro dele
interface TasksProviderProps {
    children: ReactNode;
}

interface TasksContextData {
    tasks: Task[];
    CreateTask: (task: TaskInput) => void;
}

interface ListBox {
    id: string,
    color: string,
    title: string,
    tasks: [
        id: number,
        title: string,
        collumn: string,
    ]
}

export function TasksProvider({ children }: TasksProviderProps) {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [listBox, setListBox] = useState<ListBox[]>([]);

    useEffect(() => {
        api.get('listBox')
            .then(response => setTasks(response.data.listBoxs))
    }, [])
    useEffect(() => {
        api.get('listBox')
            .then(response => setListBox(response.data.listBoxs))
    }, [])

    async function CreateTask(taskInput: TaskInput) {
        let id: number = taskInput.collumn
        console.log(listBox[id].tasks)
        console.log(listBox)
        console.log(listBox[id].tasks.length)

        // @ts-ignore
        listBox[id].tasks.push(taskInput)



        // @ts-ignore
        const res = await api.post('/listBox', listBox[id].tasks)
        console.log(res)

        const { task } = res.data

        setTasks([
            // @ts-ignore 
            ...listBox[id].tasks, taskInput
        ])

        console.log(tasks)

        // api.get('/listBox'), listbox.id
        // api.post('/listBox', task)
    }

    return (
        <TasksContext.Provider value={{ tasks, CreateTask }}>
            {children}
        </TasksContext.Provider>
    )
}
