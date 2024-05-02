import React from 'react';
import ViteSvg from '../../../public/vite.svg';
import { useSelector } from 'react-redux';
import { typefeed } from '../../types/Feedbac';
const ContainerCom: React.FC = () => {
  const data: typefeed = useSelector((data: any) => data.data.feedSelcet);

  return (
    <>
      <section className=" h-full bg-white rounded-md shadow-sm">
        <div className="p-4">
          <span className="text-">{data.comment?.length} سوال</span>
          <div className="p-3">
            {data &&
              data.comment?.map((item) => (
                <div
                  key={item}
                  className="border-b-[.5px] border-b-gray-100 my-4 p-1"
                >
                  <div className="flex flex-row-reverse justify-between ">
                    <div className="flex flex-row-reverse w-[30%] justify-between">
                      <img
                        src={ViteSvg}
                        alt=""
                        className="bg-blue-500 w-[35px] h-[35px]
                   rounded-full p-1"
                      />
                      <div className="flex flex-col items-end">
                        <span>Soheil</span>
                        <span className="text-sm text-gray-500">soheilbt@</span>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-end text-gray-500 w-[90%] text-sm ">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ContainerCom;
