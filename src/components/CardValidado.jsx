import "./card.css"

export const CardValidado = () => {

  const twitter ="https://icongr.am/entypo/twitter.svg?size=30&color=currentColor"
  const instagram = "https://icongr.am/entypo/instagram.svg?size=30&color=currentColor"
  const beta = "https://icongr.am/clarity/beta.svg?size=30&color=currentColor"


  return (
  <div className="card-container ">
      <div>
      <img   className="animate__animated animate__fadeInDown"
             src="https://res.cloudinary.com/pinkker/image/upload/v1672958329/logo_3_dpnmw7.png"
             alt="pinkker" />
      </div>
    <div className="card card-5 animate__animated animate__fadeInDown ">
        <div className="container-main">
        <h2>Gracias por sumarte a PinkkerTV.</h2>
       <p className="parrafo-card">Primera plataforma de streaming de America Latina</p>
       
        </div>
       <ul>
        <li><a href="https://www.instagram.com/pinkker.tv/" target="_blank" ><img src={instagram} alt="instagram" /></a></li>
        <li><a href="https://twitter.com/search?q=pinkkertv&src=typed_query&f=live" target="_blank" ><img src={twitter} alt="twitter" /></a></li>
        <li><a href="https://pinkker.tv/" target="_blank" ><img src={beta} alt="beta" /></a></li>
       </ul>
       <div className="fecha">
          <p cla>Fecha de lanzamiento : <b>??/??/23</b> </p>  
      </div>
        
    </div>

  </div>
  )
}
