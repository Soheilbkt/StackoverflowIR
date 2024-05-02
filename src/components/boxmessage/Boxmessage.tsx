import { FC } from 'react';
import MenuItem from '../MenuItem';
import { ItemCAT } from '../../types/CategorySelectBox.types';
import iconss from './../../assets/icons/icons8-chat-50.png';
import { typefeed } from '../../types/Feedbac';

const Boxmessage: FC<typefeed> = ({
  catgory,
  detitls,
  title,
  comment
}) => {
  let tileMentitem: ItemCAT = {
    title: catgory || "All"
  };

  return (
    <>
      <div className="bg-white w-full h-fit rounded-md shadow-sm my-[1dvh] ">
        <div className="py-5 px-4">
          <div className="flex justify-between flex-c">
            <div className="basis-[70%] w-[70%]">
              <h1 className="text-[17px]">{title}</h1>
              <p className="text-gray-500 text-[15px] overflow-hidden">
                {detitls}
              </p>
              <MenuItem item={tileMentitem} />
            </div>
            <div className="flex-col flex items-center justify-center">
              <img src={iconss} alt="" width={25} height={25} />
              <span>{comment ? Object.values(comment).length : '0'}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Boxmessage;
