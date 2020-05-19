import React, { useContext } from 'react';
import AuthContext from '../auth-context';

const Header = props => {

    const header= useContext(AuthContext);

     return (
       <header>
        { header.status ?
             <button onClick={props.onLoadTodos}>Todo List</button>
             : null }   
     
         <button onClick={props.onLoadAuth}>Auth</button>
       </header> 
     );  
};

export default Header;