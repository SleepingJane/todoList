import React from 'react';
import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";

const App: React.FunctionComponent = () => {
   return (
      <>
         <Navbar />
         <div className="container">
            <h1>Мой список дел</h1>
            <TodoForm />
         </div>
      </>
   );
}

export default App;
