import { type } from "os";
import { createContext, ReactNode, useEffect, useState } from "react";
import ListBox from "../components/listBox";
import { api } from "../services/api";

// gambiarra pra ele aceitar a tipagem
export const ListBoxContext = createContext<ListBoxContextData>({} as ListBoxContextData);

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

interface ListBoxProviderProps {
    children: ReactNode;
}

interface ListBoxContextData {
    listBox: ListBox[];
    createListBox: (listBox: ListBoxInput) => void;
}

type ListBoxInput = Omit<ListBox, 'id'>

export function ListBoxProvider({ children }: ListBoxProviderProps) {
    const [listBox, setListBox] = useState<ListBox[]>([]);

    useEffect(() => {
        api.get('listBox')
            .then(response => setListBox(response.data.listBox))
    }, [])

    function createListBox(listBox: ListBoxInput) {

        api.post('/listBox', listBox)
    }

    return (
        <ListBoxContext.Provider value={{ listBox, createListBox }}>
            {children}
        </ListBoxContext.Provider>
    )
}