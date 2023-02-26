import { useState } from "react"


export const useValidacionFormulario = () => {
 const [email , setEmail] = useState("")
 const [valido , setValido] =useState(false)
 const [search , setSearch] = useState(false)
    
    const handleSubmit = (event)=>{
      event.preventDefault()
      const regEx =   /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/  ;
       
      if(regEx.test(email)){
        setValido(true)
       }else{
         setValido(false)
       }
   
   
   
   
       event.target.email.value = ""
     
    }
    
    const handleChange =(event)=>{
      const inputValue = event.target.value;
      setEmail(inputValue)

      const regEx =   /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/  ;
      if(regEx.test(email)){
       setSearch(false)
       }else{
        setSearch(true)
       }
     
    }
    console.log(search)
  

  return {email ,search , valido , handleChange ,handleSubmit}
}
