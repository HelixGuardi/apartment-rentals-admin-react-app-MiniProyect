function AddRent() {

    return(
        <div id="add-rent-container" className="main-container">
            <form>
                <span>Agrega un Alquiler</span>
                <div id="main-form-info">
                    <label>
                        Titulo:
                        <input name="titulo" type="text" placeholder="Escribe el Titulo aqui" />
                    </label>

                    <label>
                        Image:
                        <input name="image" type="url" placeholder="URL de la Imagen aqui"/>
                    </label>

                    <label>
                        Ciudad:
                        <input name="city" type="text" placeholder="Ciudad"/>
                    </label>

                    <label>
                        País:
                        <input name="country" type="text" placeholder="País" />
                    </label>

                    <label>
                        Host Name:
                        <input name="hostName" type="text" placeholder="Nombre del Host" />
                    </label>

                    <label>
                        Rating:
                        <input name="review-score-rating" type="text" placeholder="Rating" />
                    </label>
                </div>

                <hr />

                <div className="text-description-container">
                    <label>
                        Descripción: <br />
                        <input name="description" type="text" placeholder="Descripción"/>
                    </label>
                </div>

                <div className="text-description-container">
                    <label>
                        Normas de la casa:
                        <input name="house-rules" type="text" placeholder="Normas"/>
                    </label>
                </div>

                <hr />

                <div className="data-property-container">
                    <label>
                        Tipo de Propiedad:
                        <select name="property-type">
                            <option value="">--- NONE ---</option>
                            <option value="Apartament">Apartament</option>
                            <option value="House">House</option>
                        </select>
                    </label>

                    <label>
                        Acomodaciones:
                        <input name="accommodates" type="number" minLength={1} maxLength={2} min={1} max={20} />
                    </label>

                    <label>
                        Baños:
                        <input name="bathrooms" type="number" minLength={1} maxLength={2} min={1} max={20} />
                    </label>

                    <label>
                        Quartos:
                        <input name="bedrooms" type="number" minLength={1} maxLength={2} min={1} max={20} />
                    </label>

                    <label>
                        Camas:
                        <input name="beds" type="number" minLength={1} maxLength={2} min={1} max={20} />
                    </label>
                </div>


                <div className="data-property-container">
                    <label>
                        Price:
                        <input name="price" type="number" minLength={1}/>
                    </label>
                    <label>
                        Cleaning Fee:
                        <input name="cleaning-fee" type="number" minLength={1} />
                    </label>
                </div>

                <button id="add-rent-btn" type="submit">Agregar Alquiler</button>
            </form>
        </div>
    )
}

export default AddRent;