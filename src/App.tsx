import Layout from "./shared/layout/Layout.tsx";
import {TodoApp} from "./features/todo";

function App() {

  return (
    <>
       <Layout>
          <TodoApp/>
       </Layout>
    </>
  )
}

export default App
