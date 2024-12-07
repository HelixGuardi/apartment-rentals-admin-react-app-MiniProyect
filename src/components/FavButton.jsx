import { useState } from "react"

function FavButton() {
    const [isFavorited, setIsFavorited] = useState(false)
  
    const toggleFavorite = () => {
      setIsFavorited(!isFavorited)
    }
  
    return (
      <button 
        onClick={toggleFavorite} 
        className={`fav-button ${isFavorited ? "favorited" : ""}`}
      >
        {isFavorited ? "❤️" : "🤍"}
      </button>
    )
}
export default FavButton 
