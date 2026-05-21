export type Todo = {
   id: number;
   text: string;
   completed: boolean;
}

export type TodoFormProps = {
   onAdd: (text: string) => void;
   inputRef: React.RefObject<HTMLInputElement | null>;
}