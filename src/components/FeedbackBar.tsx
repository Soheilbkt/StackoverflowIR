import  { useState } from 'react';
import icons from './../assets/icons/icons8-search-50.png';
import { createPortal } from 'react-dom';
import { Modals } from './alrets/Modals';
import { setvalueserach } from '../features/getData';
import { useDispatch } from 'react-redux';

export default function FeedbackBar() {
  const dispatch = useDispatch();
  const [isshowModal, setisshowModal] = useState<boolean>(false);

  const clichandelModal = () => {
    setisshowModal((perv) => !perv);
  };
  const ChngeinpuVal = (value: string) => {
    dispatch(setvalueserach(value));
  };

  return (
    <>
      <nav className="w-full h-[8vh] max-md:h-[10vh] rounded-md  bg-[#373e68] max-sm:rounded-none">
        <div className="p-[2vh]">
          <div className="flex justify-between flex-row-reverse">
            <div
              className="flex  bg-white rounded-md w-2/5 relative 
                        max-md:w-fit max-sm:w-fit max-sm:mx-4 "
            >
              <input
                type="text"
                name=""
                id=""
                onChange={(event) => {
                  ChngeinpuVal(event.target.value);
                }}
                className="rounded outline-none placeholder:text-[12px] px-3  py-1
                              text-gray-600 text-sm translate-x-[-13px]
                              
                               "
                placeholder="اسمشو بگو پیدا کنم؟؟؟"
              />

              <img
                src={icons}
                className="w-[1.15rem] absolute bottom-[5px] right-1 "
              />
            </div>
            <button
              onClick={clichandelModal}
              className="py-[2px] px-[7px] text-sm bg-[#fa724a]
                         rounded hoverbtn"
            >
              {' '}
              سوال جدید+
            </button>
          </div>
        </div>
      </nav>
      {isshowModal &&
        createPortal(
          <Modals clicShow={clichandelModal} />,
          document.querySelector('#modal')!
        )}
    </>
  );
}
