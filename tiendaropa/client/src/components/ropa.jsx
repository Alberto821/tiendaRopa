

function Ropas({ropas}) {
    return(
       <div>
           <div className ="container">
               <h1 className="cd">{ropas.vestido}</h1>
                <img src={"img/" + ropas.img} style="margin:5px; max-height:200px; max-width:200px;" alt=""/>
                <p className="txt">{ropas.descripcion}</p>
                <h2 className ="bb">{ropas.precio}</h2>
                <h2 className ="bb">{ropas.cantidad}</h2>
                <a className ="bb" onclick="agotado(ropas.cantidad)"></a>
                
            </div>
       </div>)
}
export default Ropas;
