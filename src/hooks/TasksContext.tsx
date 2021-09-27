import { createContext } from "react";


export const TasksContext = createContext;

interface Task {
    id: number,
    title: string,
    tag: string,
}

interface ListBox {
    id: number,
    color: string,
    title: string
}