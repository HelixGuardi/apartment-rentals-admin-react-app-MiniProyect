import { useState } from "react";

function AddRent(props) {
    //traigo el estado del listado de todos los alquileres de App.jsx a AddRent.jsx
    const everyCard = props.everyCard
    const setEveryCard = props.setEveryCard

    //listado de todas las variables utilizadas como valores para el formulario (estado inicial)
    //en el formulario los estados se actualizarán con el valor providenciado
    const [titleName, setTitleName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [cityName, setCityName] = useState("");
    const [countryName, setCountryName] = useState("");
    const [hostName, setHostName] = useState("");
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");
    const [houseRules, setHouseRules] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [accommodatesNum, setAccommodatesNum] = useState(0);
    const [bathRooms, setBathRooms] = useState(0);
    const [bedRooms, setBedRooms] = useState(0);
    const [bedsNum, setBedsNum] = useState(0);
    const [price, setPrice] = useState(0);
    const [cleaningFee, setCleaningFee] = useState(0);

    //listado de funciones para la gestión de cambio de valores en el formulario
    const handleTitleNameInput = (event) => setTitleName(event.target.value);
    const handleImageUrl = (event) => setImageUrl(event.target.value);
    const handleCityInput = (event) => setCityName(event.target.value);
    const handleCountryInput = (event) => setCountryName(event.target.value);
    const handleHostNameInput = (event) => setHostName(event.target.value);
    const handleRatingInput = (event) => setRating(event.target.value);
    const handleDescriptionInput = (event) => setDescription(event.target.value);
    const handleHouseRulesInput = (event) => setHouseRules(event.target.value);
    const handlePropertyTypeInput = (event) => setPropertyType(event.target.value);
    const handleAccommodatesInput = (event) => setAccommodatesNum(event.target.value);
    const handleBathRoomsInput = (event) => setBathRooms(event.target.value);
    const handleBedRoomsInput = (event) => setBedRooms(event.target.value);
    const handleBedsNumInput = (event) => setBedsNum(event.target.value);
    const handlePriceInput = (event) => setPrice(event.target.value);
    const handleCleaningFeeInput = (event) => setCleaningFee(event.target.value);

    // función para la gestión del Submit del formulario
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // console.log("submit");
        let max = 1000000;
        let min = 1000;
        let id = Math.floor(Math.random() * (max - min)) + min;

        // const newRent = {imageUrl, bathRooms, bedRooms, bedsNum, price, cleaningFee};
        // console.log(newRent);
        const newRent = {
            id: `${id}`,
            name: titleName,
            city: cityName,
            country: countryName,
            host_name: hostName,
            review_scores_rating: rating,
            description: description,
            house_rules: houseRules,
            property_type: propertyType,
            accommodates: accommodatesNum,
            bathrooms: bathRooms,
            bedrooms: bedRooms,
            beds: bedsNum,
            price: price,
            cleaning_fee: cleaningFee
        }

        const newRentArr = [...everyCard, newRent];
        setEveryCard(newRentArr);

        // console.log(newRent);

        // devolvemos los estados a sus valores iniciales
        setTitleName("");
        setImageUrl("");
        setCityName("");
        setCountryName("");
        setHostName("");
        setRating(0);
        setDescription("");
        setHouseRules("");
        setPropertyType("");
        setAccommodatesNum(0);
        setBathRooms(0);
        setBedRooms(0);
        setBedsNum(0);
        setPrice(0);
        setCleaningFee(0);
    }

    const randomNumId = () => {
        return Math.floor(Math.random() * (9999999999 - 1111111111)) + 1111111111;
    }

    // return de toda la estructura para el nuevo objeto (el nuevo alquiler) que se va a crear
    return(
        <div id="add-rent-container" className="main-container">
            <form onSubmit={handleFormSubmit}>
                <span>Agrega un Alquiler</span>
                <div id="main-form-info">
                    <label>
                        Titulo:
                        <input name="titulo" type="text" placeholder="Escribe el Titulo aqui" value={titleName} onChange={handleTitleNameInput}/>
                    </label>

                    <label>
                        Image:
                        <input name="image" type="url" placeholder="URL de la Imagen aqui" value={imageUrl} onChange={handleImageUrl}/>
                    </label>

                    <label>
                        Ciudad:
                        <input name="city" type="text" placeholder="Ciudad" value={cityName} onChange={handleCityInput}/>
                    </label>

                    <label>
                        País:
                        <input name="country" type="text" placeholder="País" value={countryName} onChange={handleCountryInput}/>
                    </label>

                    <label>
                        Host Name:
                        <input name="hostName" type="text" placeholder="Nombre del Host" value={hostName} onChange={handleHostNameInput}/>
                    </label>

                    <label>
                        Rating:
                        <input name="review-score-rating" type="text" placeholder="Rating" value={rating} onChange={handleRatingInput}/>
                    </label>
                </div>

                <hr />

                <div className="text-description-container">
                    <label>
                        Descripción: <br />
                        <input name="description" type="text" placeholder="Descripción" value={description} onChange={handleDescriptionInput}/>
                    </label>
                </div>

                <div className="text-description-container">
                    <label>
                        Normas de la casa:
                        <input name="house-rules" type="text" placeholder="Normas" value={houseRules} onChange={handleHouseRulesInput}/>
                    </label>
                </div>

                <hr />

                <div className="data-property-container">
                    <label>
                        Tipo de Propiedad:
                        <select name="property-type" value={propertyType} onChange={handlePropertyTypeInput}>
                            <option value="">--- NONE ---</option>
                            <option value="Apartament">Apartament</option>
                            <option value="House">House</option>
                        </select>
                    </label>

                    <label>
                        Acomodaciones:
                        <input name="accommodates" type="number" minLength={1} maxLength={2} min={1} max={20} value={accommodatesNum} onChange={handleAccommodatesInput} />
                    </label>

                    <label>
                        Baños:
                        <input name="bathrooms" type="number" minLength={1} maxLength={2} min={1} max={20} value={bathRooms} onChange={handleBathRoomsInput}/>
                    </label>

                    <label>
                        Quartos:
                        <input name="bedrooms" type="number" minLength={1} maxLength={2} min={1} max={20} value={bedRooms} onChange={handleBedRoomsInput}/>
                    </label>

                    <label>
                        Camas:
                        <input name="beds" type="number" minLength={1} maxLength={2} min={1} max={20} value={bedsNum} onChange={handleBedsNumInput} />
                    </label>
                </div>


                <div className="data-property-container">
                    <label>
                        Price: €
                        <input name="price" type="number" minLength={1} value={price} onChange={handlePriceInput} />
                    </label>
                    <label>
                        Cleaning Fee: €
                        <input name="cleaning-fee" type="number" minLength={1} value={cleaningFee} onChange={handleCleaningFeeInput} />
                    </label>
                </div>

                <button id="add-rent-btn" type="submit">Agregar Alquiler</button>
            </form>
        </div>
    )
}

export default AddRent;

// Importante arreglar el problema de la "key" / ID, para conseguir agregar nuevas gestiones de alquiler sin que se rompa el código
