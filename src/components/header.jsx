import { useState } from "react"

function Header(){

    const [isOpen , setOpen] = useState(false)

    const handleIsOpen =() =>{
        setOpen(true)
    }

    const handleIsClose =() =>{

        setOpen(false)
    }

    return <div>
<div className="waxadhan">

<button className="btn1"onClick={handleIsClose} style={{display:isOpen === false ? "block" : ""}} >On</button>

<button className="btn2"onClick={handleIsOpen} style={{display:isOpen === false? "block" : "" }} >Off</button>

<img src="on.gif" alt="" srcset="" onClick={handleIsClose} style={{display:isOpen === false ? "block" : "none"}}  />
<img src="off.gif" alt="" srcset="" onClick={handleIsOpen} style={{display:isOpen === true? "block" : "none" }} /> 

</div>

</div>

}

export default Header