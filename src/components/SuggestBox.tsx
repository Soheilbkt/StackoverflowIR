import  { useEffect, useState } from 'react';
import { useMenu } from './context/MenuContext';

export default function SuggestBox() {
  let [ItemsInp, setItemsInp] = useState([
    { id: 1, Namesel: 'new', title: 'جدیدترین', isactive: true },
    { id: 2, Namesel: 'old', title: 'قدیمی ترین', isactive: false },
    { id: 3, Namesel: 'pro', title: 'باحال ترین', isactive: false },
    { id: 4, Namesel: 'chert', title: 'چرت ترین', isactive: false }
  ]);
  let IsaciveMenu = useMenu();

  const changeradio = (id: number) => {
    setItemsInp((perv) => {
      let findItem = ItemsInp.find((item) => item.id == id);
      if (!findItem) return perv; // اگر آیتم انتخابی یافت نشود، وضعیت قبلی را بازگردانید

      return perv.map((item) => {
        if (item.id === id) {
          return { ...item, isactive: true }; // تغییر وضعیت آیتم انتخاب شده به فعال
        } else {
          return { ...item, isactive: false }; // آیتم‌های دیگر به غیرفعال
        }
      });
    });
  };
  useEffect(() => {
    console.log(ItemsInp);
  }, [ItemsInp]);
  return (
    <>
      <div
        className={`bg-white max-sm:w-full w-[18dvw] h-[16dvh] rounded-md relative shadow-sm duration-150 ${
          IsaciveMenu.isActive ? 'max-sm:block' : 'max-sm:hidden'
        }`}
      >
        <div className="h-full flex justify-center flex-col-reverse items-stretch">
          <fieldset className="p-[6px]">
            <div className="max-sm:flex justify-around">
              {ItemsInp.map((item) => (
                <>
                  <div>
                    <input
                      id="draft"
                      className="peer/draft"
                      type="radio"
                      name="status"
                      onChange={() => {
                        changeradio(item.id);
                      }}
                      checked={item.isactive}
                    />
                    <label
                      htmlFor="draft"
                      className="peer-checked/draft:text-sky-500"
                    >
                      {item.title}
                    </label>
                  </div>
                </>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
}
