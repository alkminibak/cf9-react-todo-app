import type {TodoStatsProps} from "../types.ts";

const TodoStats = ({todos} : TodoStatsProps) => {

   const total = todos.length;
   const completed = todos.filter(t => t.completed).length;
   const active = total - completed;

   return (
      <>
         {total > 0 && (
            <div className="flex justify-between border-t pt-2 mt-2 text-cf-gray">
               <span>Total: {total}</span>
               <span>Active: {active}</span>
               <span>Completed: {completed}</span>
            </div>
         )}
      </>
   )
}
export default TodoStats;