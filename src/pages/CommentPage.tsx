import React, {
  FC,

  useEffect,
  useLayoutEffect,
  useState,
  Suspense
} from 'react';
import {useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { typefeed } from '../types/Feedbac';
import { fetchTodos, selectFeed, setValueUserid } from '../features/getData';

const NavbarCom = React.lazy(() => import('../components/navcoment/NavbarCom'));
const Boxmessage = React.lazy(
  () => import('../components/boxmessage/Boxmessage')
);
const ContainerCom = React.lazy(
  () => import('../components/comment/ContainerCom')
);
const Addcoment = React.lazy(
  () => import('../components/comment/addcoment/Addcoment')
);
const Loading = React.lazy(() => import('../components/LodingStc/loding'));

export const CommentPage: FC = () => {
  const [Feeditem, setFeeditem] = useState<[] | {}>([]);
  const { idpost } = useParams();
  const numberPart = idpost?.match(/-(\d+)/);
  const data = useSelector((state: any) => state.data);
  let [isSetData, setisSetData] = useState<boolean>(false);
  const dispath = useDispatch();

  console.log(isSetData);

  const foundItem: any = Object.values(data.data).find((item: any) => {
    if (numberPart) {
      
      return item.id == numberPart[1];
    }
  });

  const itemFind = Object.entries(data.data).find((item:any): any => {
    if (item[1].id == foundItem.id) {
      console.log(item[0]);

      return item[0];
    }
  });

  console.log(itemFind);

  useEffect(() => {
    if (data.data && foundItem) {
      dispath(selectFeed(foundItem));
      console.log(foundItem);
      //
    }
    if (data.data && itemFind) {
      console.log(itemFind[0]);
      dispath(setValueUserid(itemFind[0]));
    }

    setFeeditem(foundItem);

    setisSetData(true);
  }, [data, setFeeditem]);

  console.log(Feeditem);

  useLayoutEffect(() => {
    dispath(fetchTodos());
  }, []);

  return (
    <>
      <div className="w-full justify-center items-center flex">
        <div className="p-2 w-1/2 mt-[7vh] max-lg:w-4/5">
          <Suspense fallback={<Loading />}>
            <NavbarCom />
            {foundItem ? (
              [foundItem].map((item: typefeed) => {
                console.log(item);
                return (
                  <a href={`/feedback-page/feed-${item.id}`}>
                    <Boxmessage {...item} />
                  </a>
                );
              })
            ) : (
              <Loading />
            )}
            <ContainerCom />
            <Addcoment />
          </Suspense>
        </div>
      </div>
    </>
  );
};
