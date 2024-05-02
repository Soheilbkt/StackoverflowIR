
export  type replayfeed = Pick<typefeed,"name"|"detitls">

export  interface typefeed{
    name?: string,
    id?:number,
    catgory?:string,
    title?:string,
    detitls?:string
    comment?:string[]
  
}
