import React, { useState } from 'react';
import { ItemCAT } from './CategorySelectBox.types';
import MenuItem from './MenuItem';
export default function CategorySelectBox() {
  const [itetMenuCat, setitetMenuCat] = useState<ItemCAT[]>([
    { id: 1, title: 'ALL', Isacive: true },
    { id: 2, title: 'UI', Isacive: false },
    { id: 3, title: 'UX', Isacive: false },
    { id: 4, title: 'Tailwindcss', Isacive: false },
    { id: 5, title: 'BUG', Isacive: false },
    { id: 6, title: 'Front end ', Isacive: false }
  ]);
  const selectActiveMenuItem = (id: number) => {
    setitetMenuCat((prev) => {
      console.log(prev);

      const selectedItem = prev.find((item) => item.id === id);
      if (!selectedItem) return prev; // اگر آیتم انتخابی یافت نشود، وضعیت قبلی را بازگردانید

      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, Isacive: true }; // تغییر وضعیت آیتم انتخاب شده به فعال
        } else {
          return { ...item, Isacive: false }; // آیتم‌های دیگر به غیرفعال
        }
      });
    });
  };

  return (
    <>
      <div className="bg-white w-[18dvw] h-[16dvh] rounded-md relative shadow-sm">
        <div className="h-full flex justify-center flex-col-reverse items-stretch ">
          <div className="flex flex-col h-[78%] justify-evenly items-stretch mr-[9px]  w-full ">
            <div className="flex w-[60%] justify-around">
              {itetMenuCat.slice(0, 3).map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  selectActiveMenuItem={selectActiveMenuItem}
                />
              ))}
            </div>
            <div className="flex w-[60%] justify-around">
              {itetMenuCat.slice(3, 5).map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  selectActiveMenuItem={selectActiveMenuItem}
                />
              ))}
            </div>
            <div className="flex w-[60%]">
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
