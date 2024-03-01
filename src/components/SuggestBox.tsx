import React, { useEffect, useState } from 'react';

export default function SuggestBox() {
    let [ItemsInp,setItemsInp] = useState([
        {id:1,title:"جدیدترین",isactive:true},
        {id:2,title:"قدیمی ترین",isactive:false},
        {id:3,title:"باحال ترین",isactive:false},
        {id:4,title:"چرت ترین",isactive:false},
    ]) 
    const changeradio= (id:number) =>{
            setItemsInp(perv =>{
                let findItem = ItemsInp.find(item => item.id == id)
                if (!findItem) return perv; // اگر آیتم انتخابی یافت نشود، وضعیت قبلی را بازگردانید

                return perv.map((item) => {
                  if (item.id === id) {
                    return { ...item, isactive: true }; // تغییر وضعیت آیتم انتخاب شده به فعال
                  } else {
                    return { ...item, isactive: false }; // آیتم‌های دیگر به غیرفعال
                  }
                });
              });
              
              
             
            }
          useEffect(() =>{
            console.log(ItemsInp);
            
          },[ItemsInp])  
  return (
    <>
      <div className="bg-white w-[18dvw] h-[16dvh] rounded-md relative shadow-sm">
        <div className="h-full flex justify-center flex-col-reverse items-stretch">
          <fieldset className='p-[6px]'>

            <div>
                {
                    ItemsInp.map(item =>(
                        <>
                        <div>
                        <input

                            id="draft"
                            className="peer/draft"
                            type="radio"
                            name="status"
                            
                            onChange={(event) => changeradio(item.id)}
                            checked={item.isactive} />
                            <label htmlFor="draft" className="peer-checked/draft:text-sky-500">
                                {item.title}
                            </label>
                            </div>
                            
                            </>
                    ))
                }
           
            </div>
         
            
          
          </fieldset>
        </div>
      </div>
    </>
  );
}
