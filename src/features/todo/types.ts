export type Todo = {
   id: number;
   text: string;
   completed: boolean;
}

export type TodoFormProps = {
   // onAdd
   inputRef: React.RefObject<HTMLInputElement | null>;
}