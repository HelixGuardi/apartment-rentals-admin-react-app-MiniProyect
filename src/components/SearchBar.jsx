import MagnifyingGlass from "../assets/magnifying-glass-icon-removebg.png"

function SearchBar() {

    return(
        <div className="search-bar-container">
          <img
            id="magnifying-glass"
            src={MagnifyingGlass}
            alt="magnifying-glass"
          />
        <form className="form" action="/search">
          <input
            id="input-text-bar"
            type="text"
            style={{paddingLeft: '10px'}}
            placeholder="Tu alquiler, en un clic"
          />
          <button id="search-button">Search</button>
        </form>
      </div>
    )
}

export default SearchBar;