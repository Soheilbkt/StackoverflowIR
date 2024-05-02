import React, { useState } from 'react';

import { MenuProvider } from './components/context/MenuContext';

import { Route, Routes } from 'react-router-dom';

import { LayoutHome } from './pages/LayoutHome';
import { CommentPage } from './pages/CommentPage';
import Page_404 from './pages/404Page';
import Popup from './components/alrets/Popup';
import { createPortal } from 'react-dom';

const App: React.FC = () => {
  const [isAcivte,setisAcivte] = useState<boolean>(true)

       

  const Routess = (
    <Routes>
      <Route path='/' index={true}  element={<LayoutHome/>} />
      <Route path='*'   element={<Page_404/>} />
      <Route path='feedback-page/:idpost' element= {<CommentPage/>} />
    </Routes>
  )
  const IsShowmodal = () =>{
    setisAcivte(perv => !perv)

}


  return (
    <>
      <MenuProvider>
        <div className="flex w-full justify-center gap-5 max-sm:flex-col max-sm:gap-0 max-[850px]:flex-col max-[850px]:items-center">
         {Routess}
          
        </div>
      {
        isAcivte &&
        createPortal(<Popup isstatus={isAcivte} onchancge={IsShowmodal} /> , 
        document.querySelector('#modal')!
        )
      }
      </MenuProvider>

    </>
  );
};

export default App;
