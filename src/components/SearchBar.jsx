import MagnifyingGlass from "../assets/magnifying-glass-icon-removebg.png"

function SearchBar() {

    return(
        <div className="search-bar-container">
        <form className="form" action="/search">
          <img
            id="magnifying-glass"
            src={MagnifyingGlass}
            alt="magnifying-glass"
          />
          <input
            id="input-text-bar"
            type="text"
            placeholder="   Tu alquiler, en un clic"
          />
          <button id="search-button">Search</button>
        </form>
      </div>
    )
}

export default SearchBar;