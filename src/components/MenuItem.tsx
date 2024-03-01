import React from 'react';
import { ItemCAT } from './CategorySelectBox.types';

type MenuItemProp = {
  item: ItemCAT;
  selectActiveMenuItem(num: number): void;
};
export default function MenuItem({ item, selectActiveMenuItem }: MenuItemProp) {
  return (
    <>
      <div
        onClick={() => selectActiveMenuItem(item.id)}
        className={`${
          item.Isacive ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
        } 
                text-sm  rounded-[5px] 
                ${
                  item.Isacive ? 'w-[fit]' : 'w-fit'
                } py-[7px] px-[6px] flex items-center justify-center h-[21px]`}
      >
        <span className="text-[12px]">{item.title}</span>
      </div>
    </>
  );
}
