import { FC } from 'react';


const Loading: FC = ({}) => {
  return (
    <>
      <div
        className="bg-white opacity-45 w-full h-[9vh] rounded-md shadow-sm my-[1dvh] 
        animate-pulse"
      >
        <div className="py-5 px-4">
          <div className="flex justify-between flex-c">
            <div className="basis-[70%]">
              <h1 className="text-[17px] bg-gray-100 w-20 h-5 rounded-md"></h1>
              <p className="text-gray-500 text-[15px] "></p>
            </div>
            <div className="flex-col flex items-center justify-center">
              <div className=" bg-gray-100 w-20 h-10 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
