import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import Boxmessage from './Boxmessage';
import { fetchTodos} from '../../features/getData';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../LodingStc/loding';


export const ContainerBoxmessage: React.FC = () => {
  const dispatch = useDispatch();
  const [dataFeed, setDataFeed] = useState<any[]>([]);

  useLayoutEffect(() => {
    dispatch(fetchTodos());
  
  }, []);

  const data = useSelector((state: any) => state.data);

  useEffect(() => {
    setDataFeed(Object.values(data.data));
  }, [data]);
  useEffect(() => {
    setDataFeed((perv) => {
      let newFiltervalue = perv.filter((item) => {
        if (data.selectedCat == 'ALL') {
          return item;
        } else {
          return item.catgory == data.selectedCat;
        }
      });


      return newFiltervalue;
    });
  }, [data.selectedCat]);
  useEffect(() => {
    setDataFeed((perv) => {
     

      let searchdata = perv.filter((item) => {
        if (String(item.title).startsWith(data.valueserach)) {
          return item;
        }
      });

      return searchdata;
    });
  }, [data.valueserach]);

  return (
    <>
      <Suspense fallback={<h1>hi</h1>}>
        <section className="flex flex-col flex-bas mt-[1vh] max-sm:p-5">
          {dataFeed.length > 0 ? (
            dataFeed.map((item) => {
              return (
                <a key={item.id} href={`feedback-page/feed-${item.id}`}>
                  <Boxmessage {...item} />
                </a>
              );
            })
          ) : (
            <div className="flex flex-col">
              {!data.loading ? (
                <h1 className="text-4xl text-center capitalize">not found</h1>
              ) : (
                <>
                  <Loading />
                  <Loading />
                </>
              )}
            </div>
          )}
        </section>
      </Suspense>
    </>
  );
};
