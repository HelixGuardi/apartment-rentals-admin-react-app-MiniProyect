import { useState } from "react";


function ConfigDropdown(props) {

  const [isOpen, setIsOpen] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  // Alterna el estado del dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  // Alterna el estado de favorito
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    setIsOpen(false); // Cierra el dropdown después de seleccionar
  }



  return (
    <div className="fav-dropdown">
      {/* Botón principal */}
      <button onClick={toggleDropdown} className="fav-button">
        {isFavorited ? "❤️" : "🤍"}
      </button>

      {/* Opciones desplegables */}
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={toggleFavorite}>
            {isFavorited ? "Quitar de Favoritos" : "Agregar a Favoritos"}
          </li>
          <li >Editar</li>
          <li >Eliminar</li>
        </ul>
      )}
    </div>
  );
}

export default ConfigDropdown;