import  { FC } from 'react';
import { ItemCAT } from '../types/CategorySelectBox.types';
import { setSelectedCat } from '../features/getData';
import { useDispatch } from 'react-redux';
type MenuItemProp = {
  item: ItemCAT;
  selectActiveMenuItem?(num?: number): void;
};
const MenuItem: FC<MenuItemProp> = ({ item, selectActiveMenuItem }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => {
          selectActiveMenuItem && selectActiveMenuItem(item.id);
          dispatch(setSelectedCat(item.title));
        }}
        className={`${
          item.Isacive ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
        } 
                text-sm  rounded-[5px] 
                ${
                  item.Isacive ? 'w-[fit]' : 'w-fit'
                } py-[7px] px-[6px] flex items-center justify-center h-[21px]
                max-sm:px-5`}
      >
        <span className="text-[12px]">{item.title}</span>
      </div>
    </>
  );
};
export default MenuItem;
