import React from 'react'

const Blog = () => {
  return (
    <div className="flex flex-col pb-14 bg-slate-50">
    <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
      <div className="shrink-0 max-w-full bg-slate-50 h-[35px] w-[307px]" />
      <div className="shrink-0 max-w-full bg-slate-50 h-[35px] w-[307px]" />
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad29b60ec8e0ab915b214db0358328e8ac5b55de2a298006b94afed1d45fa1bb?apiKey=f417b8c00fe14582a1a201b8017683ae&"
      className="self-center mt-4 aspect-[33.33] max-w-[1111px] w-[1111px] max-md:max-w-full"
    />
  </div>
  )
}

export default Blog