export type Todo = {
   id: number;
   text: string;
   completed: boolean;
}

export type TodoFormProps = {
   onAdd: (text: string) => void;
   inputRef: React.RefObject<HTMLInputElement | null>;
}

export type TodoListProps = {
   todos: Todo[];
   onToggle: (id: number) => void;
   onEdit: (id: number, newText: string) => void;
   onDelete: (id: number) => void;
}

export type TodoStatsProps = {
   todos: Todo[];
}