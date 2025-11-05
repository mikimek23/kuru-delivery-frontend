import React from 'react'

export const Card = ({number, title}) => {
  return (
    <div>
<div
  class="cursor-pointer transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4"
>
  <div>
    <span class="font-bold text-purple-300">{number}</span>
    <p class="line-clamp-3">
        {title}
    </p>
  </div>
</div>

    </div>
  )
}
