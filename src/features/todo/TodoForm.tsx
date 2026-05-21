import Button from "../../shared/ui/Button.tsx";
import type {TodoFormProps} from "./types.ts";
import {useState} from "react";

const TodoForm = ({onAdd, inputRef}: TodoFormProps) => {
   const [text, setText] = useState("");

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
   }

  const handleSubmit = (e: React.SubmitEvent) => {
     e.preventDefault();
      if (text.trim() !== "") {
        onAdd(text);
        setText("");
     }
  }

   return (
      <>
         <form className="flex gap-4 mb-4" onSubmit={handleSubmit}>
            <input
               type="text"
               ref={inputRef}
               value={text}
               onChange={handleChange}
               className="flex-1 border p-2 rounded"
               placeholder="New task..."
            />
            <Button label="Add"/>
         </form>
      </>
   )
}
export default TodoForm;