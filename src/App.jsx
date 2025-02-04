import { useState } from "react"


function App() {
 let [color,setColor] = useState('olive')

  return (
<div className="w-full h-screen duration-200"
style={{backgroundColor : color }}
>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
  <button
    onClick={()=>setColor("red")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor:"red"}}
      >Red</button>

<button
    onClick={()=>setColor("skyblue")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor:"skyblue"}}
      >Blue</button>

<button
     onClick={()=>setColor("green")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor:"green"}}
      >Green</button>

<button
     onClick={()=>setColor("pink")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor:"pink"}}
      >Pink</button>

<button
     onClick={()=>setColor("orange")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor:"Orange"}}
      >Orange</button>

<button
     onClick={()=>setColor("purple")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor:"purple"}}
      >purple</button>

<button
     onClick={()=>setColor("grey")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor:"grey"}}
      >Grey</button>
<button
     onClick={()=>setColor("lavender")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor:"lavender"}}
      >Lavender</button>
<button
     onClick={()=>setColor("brown")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor:"brown"}}
      >Brown</button>
<button
     onClick={()=>setColor("olive")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor:"olive"}}
      >Olive</button>
<button
     onClick={()=>setColor("teal")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor:"teal"}}
      >Teal</button>
    </div>
  </div>
</div>
  )
}
export default App 
