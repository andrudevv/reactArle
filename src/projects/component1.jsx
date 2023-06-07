import React from 'react'
import AdminPage from './adminPage';
import LoginForm from './loginForm';




function Content() {
    const isLogguedIn = false;
    
    let content;
    // valor.isLogguedIn ?  content = <AdminPage/> : content = <LoginForm/> ;
    if (isLogguedIn) {
      content = <AdminPage/>
    }else{
      content = <LoginForm/>
    }
    
  return (
    <>
    <div>
    {content}
    </div>
    </>
  )
  
}


export default Content