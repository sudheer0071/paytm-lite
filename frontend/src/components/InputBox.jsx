import { useState } from "react"

export function InputBox({placeholder, label, onChange, password, value, empty}){     
  console.log("label: "+empty);   
  return <div> 
      <div className="text-md font-medium text-left py-2">
        {label}
      </div>
      <input onChange={onChange} value={value} className={`${empty?'error':''} w-full px-2 border rounded font-medium border-slate-200 py-1 bg-white border-1`} type={password?'password':"text"} placeholder={placeholder} />
  </div>
}