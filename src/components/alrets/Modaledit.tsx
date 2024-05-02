import React, { FC, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { typefeed } from '../../types/Feedbac';
import { updateTodo } from '../../features/update';
import { useParams } from 'react-router-dom';

interface ModalsProps {
  clicShow(isactive: boolean): void;
}

export const Modaledit: FC<ModalsProps> = ({ clicShow }) => {
  const { idpost } = useParams();
  const numberPart = idpost?.match(/-(\d+)/);
  const data = useSelector((state: any) => state.data);
  const dispath = useDispatch<any>();
  const [inputs, setInputs] = useState<typefeed>({
    name: '',
    catgory: '',
    comment: [],
    detitls: '',
    id: 0,
    title: '',

  });

  const foundItem: any = Object.values(data.data).find((item: any) => {
    if (numberPart) {
      return item.id == numberPart[1];
    }
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  useEffect(() => {
    setInputs(foundItem)
  }, [data.data]);

  return (
    <>
      <div className="bg-[#01010178] w-full h-full fixed top-0">
        <div
          id="crud-modal"
          aria-hidden="true"
          className=" overflow-y-auto 
overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  سوال جدید
                </h3>
                <button
                  type="button"
                  onClick={() => clicShow(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crud-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      موضوع{' '}
                      {inputs.title ? (
                        ' '
                      ) : (
                        <span className="text-xs text-red-500 absolute translate-y-[-1px]">
                          اجباری
                        </span>
                      )}
                    </label>
                    <input
                      type="text"
                      required
                      name="title"
                      id="name"
                      value={inputs.title}
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="موضوع رو بنویس"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      نام
                      {inputs.name ? (
                        ' '
                      ) : (
                        <span className="text-xs text-red-500 absolute translate-y-[-1px]">
                          اجباری
                        </span>
                      )}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={inputs.name}
                      onChange={handleInputChange}
                      id="price"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="مثلا سهیل"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      دسته بندی
                    </label>
                    <select
                      id="catgory"
                      onChange={handleInputChange}
                      value={inputs.catgory}
                      name="catgory"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option selected={true}>اتخاب دسته</option>
                      <option value="UI">UI</option>
                      <option value="UX">UX</option>
                      <option value="BUG">BUG</option>
                      <option value="TS">Tailwindcss </option>
                      <option value="FR">Front end</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      توضیحات
                      {inputs.detitls ? (
                        ' '
                      ) : (
                        <span className="text-xs text-red-500 absolute translate-y-[-1px]">
                          اجباری
                        </span>
                      )}
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      maxLength={50}
                      name="detitls"
                      value={inputs.detitls}
                      onChange={handleInputChange}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="در حد 60-70 کاراکتر بنویس"
                    ></textarea>
                  </div>
                </div>
                <div className="items-center flex flex-wrap justify-between text-red-500">
                  <button
                    type="button"
                    onClick={() => {
                      if (
                        inputs.name &&
                        inputs.catgory &&
                        inputs.title &&
                        inputs.detitls
                      ) {
                        clicShow(false);
                      } else {
                        alert('کل فیلد ها اجباریه');
                      }

                      dispath(updateTodo([inputs, data.seluserid]));
                    }}
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="me-1 -ms-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    ارسال
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
