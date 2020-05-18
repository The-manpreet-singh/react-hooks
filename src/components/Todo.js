import React, { useState } from 'react';

const Todo = props => {

      const [todoName, setTodoName] = useState('');

      const inputChangeHandler = event => {
          setTodoName(event.target.value);
      };

     return (
         <React.Fragment>
             <input 
               type="text" 
               placeholder="Todo" 
               onChange={inputChangeHandler} 
               value={todoName} />
             <button type="button">ADD</button>
             <ul />
         </React.Fragment>
     ) 
};

export default Todo;