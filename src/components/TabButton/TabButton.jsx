import './TabButton.css';

export default function TabButton({ children, onClick }) {

  return (
    <li>
      {/* Se ejecutará handleClick cuando se pulse, 
          no cuando el navegador lea la linea de código
          si tuviese parentesis handleClick() se llamaria nada más leer la linea
      */}
      <button onClick={onClick}>{ children }</button>
    </li>
  )
}