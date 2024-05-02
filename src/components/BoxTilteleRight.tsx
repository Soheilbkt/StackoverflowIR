
import { useMenu } from './context/MenuContext';

export default function BoxTilteleRight() {
  const isActive = useMenu();

  return (
    <>
      <div
        className="bg-[#ff5722ad] w-[18dvw] h-[16dvh] rounded-md relative
    max-sm:w-full max-sm:rounded-none"
      >
        <div className=" h-full flex flex-col-reverse items-stretch justify-between p-[15px] max-sm:flex-row max-sm:items-center">
          <div>
            <h1> ایستک اورفلو:) </h1>
            <h3>سوال بپرس؟؟</h3>
          </div>
          <ul
            className="hidden max-sm:block"
            onClick={() => isActive.toggleMenu()}
          >
            <li className="w-11 h-1 bg-black mt-1"></li>
            <li className="w-11 h-1 bg-black mt-1"></li>
            <li className="w-11 h-1 bg-black mt-1"></li>
          </ul>
        </div>
      </div>
    </>
  );
}
