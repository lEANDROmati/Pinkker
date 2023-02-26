import "./app.css"
import { CardValidado } from "./components/CardValidado"
import { useValidacionFormulario } from "./hook/useValidacionFormulario"


function App() {
 const {valido ,search,handleChange, handleSubmit} =useValidacionFormulario()
  
  console.log(valido)
  return (
    <>
     {
      (!valido) 
      ? <main className="animate__animated animate__fadeIn">
      <section className="container">
          <div className="container-img">  
            <img
             className="animate__animated animate__fadeInDown" 
             src="https://res.cloudinary.com/pinkker/image/upload/v1672958329/logo_3_dpnmw7.png"
             alt="pinkker" />
          </div>
         <form onSubmit={handleSubmit}>
           <input 
             type="text" 
             name="email" 
             placeholder="pinkker@gmail.com"
             className={search ? "error" : ""}
             
             onChange={handleChange}
             />
           <button>Continuar</button>
           <span>Deja tu mail acá para recibir noticias de Pinkker! y obtener beneficios en el lanzamiento.</span>
         </form>
      
       
      </section>
      <footer className="footer"><a href="https://github.com/lEANDROmati" target="_blank" className="textFooter" >Leando Rios</a></footer>
     
    </main>

      :<CardValidado/>
     }
    </>
  )
}

export default App
