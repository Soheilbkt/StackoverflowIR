
import BoxTilteleRight from '../components/BoxTilteleRight';
import { CategorySelectBox } from '../components/CategorySelectBox';
import SuggestBox from '../components/SuggestBox';
import FeedbackBar from '../components/FeedbackBar';
import { ContainerBoxmessage } from '../components/boxmessage/ContainerBoxmessage';

export const LayoutHome = () => {
  return (
    <>
      <aside
        className="flex h-[53vh] max-sm:h-auto flex-col justify-around max-sm:justify-normal max-[850px]:flex-row max-[850px]:items-center 
      max-[850px]:h-[25vh] max-[850px]:gap-5  max-sm:w-full max-md:gap-5  
      max-md:w-3/4 max-sm:flex-col max-sm:gap-0"
      >
        <BoxTilteleRight />
        <CategorySelectBox />
        <SuggestBox />
      </aside>
      <main
        className="w-[50%] m-2 flex  flex-col h-[85vh] max-sm:w-full
      max-sm:m-0 max-md:w-3/4"
      >
        <FeedbackBar />
        <ContainerBoxmessage />
      </main>
    </>
  );
};
