import React, { FC,  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../features/update';

const Addcoment: FC = () => {
  const [valueComment, setvalueComment] = useState<string>('');
  const data = useSelector((data: any) => data.data);

  const dispath = useDispatch<any>();

  const handlerChnagevalue = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setvalueComment(event.target.value);
  };

  return (
    <>
      <footer className="bg-white my-3 rounded-md shadow-sm">
        <div className="p-5 flex   flex-col">
          <span>ارسال پاسخ سوال</span>
          <textarea
            className="bg-[#f7f8fd] shadow-sm rounded-md p-2 my-4 h-[15vh]
         placeholder:text-gray-400 placeholder:text-sm outline-none focus:border-2
         duration-100 "
            placeholder="جواب خود را تایپ کنید(:"
            name=""
            id=""
            cols={10}
            rows={10}
            minLength={20}
            value={valueComment}
            onChange={handlerChnagevalue}
          ></textarea>
          <button
            className="py-[0.8vh] px-[1vw] text-sm bg-[#fa724a] rounded hoverbtn"
            onClick={async () => {
              valueComment.length > 50
                ? (setvalueComment(''),
                  dispath(
                    addComment([
                      [...data.feedSelcet.comment, valueComment],
                      data.seluserid
                    ])
                  ))
                : alert('حداقل باید 50 کاراکتر باشد');
            }}
          >
            پست کردن
          </button>
        </div>
      </footer>
    </>
  );
};

export default Addcoment;
