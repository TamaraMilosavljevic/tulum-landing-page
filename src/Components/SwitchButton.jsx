import {useState} from 'react';


export const SwitchButton = ({label}) => {


  
  return (
    <div>
      <button className="w-64 h-10 p-4 rounded-3xl box-border text-base fill-primary opacity-40">
        {label}
      </button>
    </div>
  )
}
