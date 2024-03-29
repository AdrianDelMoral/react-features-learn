//* Importación de estilos CSS de este componente
import './CoreConcepts.css'

//! Seguir el mismo orden en las props, igual que van a recibir,
//! si en el otro lado estuviese title primero, se pondria primero
export default function CoreConcepts({imagePath, title, description}){ 
  return(
    <div>
      <img src={imagePath} alt={`Imágen ${title}`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    )
}