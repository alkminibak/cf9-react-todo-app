import Button from "../../shared/ui/Button.tsx";
import type {TodoFormProps} from "./types.ts";

const TodoForm = ({inputRef}: TodoFormProps) => {
   return (
      <>
         {/*<form className="flex gap-4 mb-4" onSubmit={}>*/}
         <form className="flex gap-4 mb-4">
            <input
               type="text"
               ref={inputRef}
               className="flex-1 border p-2 rounded"
               placeholder="New task..."
            />
            <Button label="Add"/>
         </form>
      </>
   )
}
export default TodoForm;