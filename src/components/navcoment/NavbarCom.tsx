import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Modaledit } from '../alrets/Modaledit';

const NavbarCom: React.FC = () => {
  const [isactiveModal, setisactiveModal] = useState<boolean>(false);

  const ToggleShowmodal = () => {
    setisactiveModal((perv) => !perv);
  };
  return (
    <>
      <nav className="flex justify-between w-full items-center">
        <button
          className="py-[0.8vh] px-[1vw] text-sm bg-[#fa724a]
                         rounded hoverbtn"
          onClick={ToggleShowmodal}
        >
          ویرایش سوال
        </button>
        <div>
          <span>
            <Link to={'../'}>بازگشت</Link>
          </span>
        </div>
      </nav>
    
      {isactiveModal &&
        createPortal(
          <Modaledit clicShow={ToggleShowmodal} />,
          document.querySelector('#modal')!
        )}
    </>
  );
};

export default NavbarCom;
