import  { FC, useState } from 'react';
import { ItemCAT } from '../types/CategorySelectBox.types';
import MenuItem from './MenuItem';

import { useMenu } from './context/MenuContext'




export  const  CategorySelectBox:FC = () => {


  const [itetMenuCat, setitetMenuCat] = useState<ItemCAT[]>([
    { id: 1, title: 'ALL', Isacive: true },
    { id: 2, title: 'UI', Isacive: false },
    { id: 3, title: 'UX', Isacive: false },
    { id: 4, title: 'Tailwindcss', Isacive: false },
    { id: 5, title: 'BUG', Isacive: false },
    { id: 6, title: 'Front end ', Isacive: false }
  ]);
  
  let IsaciveMenu = useMenu()

  const selectActiveMenuItem = (id: number) => {
    
    setitetMenuCat((prev) => {
  

      const selectedItem = prev.find((item) => item.id === id);
      if (!selectedItem) return prev;

      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, Isacive: true }; 
        } else {
          return { ...item, Isacive: false }; 
        }
      });
    });
  };
  
  


  return (
    <>
      <div className={`bg-white w-[18dvw] h-[16dvh] rounded-md relative shadow-sm 
      max-sm:w-full   ${IsaciveMenu.isActive ? "max-sm:block" : "max-sm:hidden"}
       max-md:w-[40%] `}>
        <div className="h-full flex justify-center flex-col-reverse items-stretch ">
          <div className="flex flex-col h-[78%] max-md:w-full justify-evenly items-stretch mr-[9px]  w-full max-md:h-[120px]  ">
            <div className="flex w-[60%] max-md:w-full justify-around">
              {itetMenuCat.slice(0, 3).map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  selectActiveMenuItem={selectActiveMenuItem}
                />
              ))}
            </div>
            <div className="flex w-[60%] max-md:w-full justify-around">
              {itetMenuCat.slice(3, 5).map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  selectActiveMenuItem={selectActiveMenuItem}
                />
              ))}
            </div>
            <div className="flex w-[60%] max-md:w-full max-sm:justify-center max-[840px]:justify-center">
              {itetMenuCat.slice(itetMenuCat.length - 1).map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  selectActiveMenuItem={selectActiveMenuItem}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
