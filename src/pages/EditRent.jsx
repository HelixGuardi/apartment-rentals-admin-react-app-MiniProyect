import { useState } from "react";
import { useParams } from "react-router-dom";

function AddRent(props) {
    //traigo el estado del listado de todos los alquileres de App.jsx a AddRent.jsx
    const everyCard = props.everyCard
    const setEveryCard = props.setEveryCard
    
    const dynamicParams = useParams()

    let foundRent = everyCard.find((eachCard) => {
        return eachCard.id === dynamicParams.id

    })
        console.log(foundRent);
    //listado de todas las variables utilizadas como valores para el formulario (estado inicial)
    //en el formulario los estados se actualizarán con el valor providenciado
    const [titleName, setTitleName] = useState(foundRent.name);
    const [imageUrl, setImageUrl] = useState("");
    const [cityName, setCityName] = useState(foundRent.city);
    const [countryName, setCountryName] = useState(foundRent.country);
    const [hostName, setHostName] = useState(foundRent.host_name);
    const [rating, setRating] = useState(foundRent.review_scores_rating);
    const [description, setDescription] = useState(foundRent.description);
    const [houseRules, setHouseRules] = useState(foundRent.house_rules);
    const [propertyType, setPropertyType] = useState(foundRent.property_type);
    const [accommodatesNum, setAccommodatesNum] = useState(foundRent.accommodates);
    const [bathRooms, setBathRooms] = useState(foundRent.bathrooms);
    const [bedRooms, setBedRooms] = useState(foundRent.bedrooms);
    const [bedsNum, setBedsNum] = useState(foundRent.beds);
    const [price, setPrice] = useState(foundRent.price);
    const [cleaningFee, setCleaningFee] = useState(foundRent.cleaning_fee);
    const [id, setId] = useState(foundRent.id)
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
        foundRent.name = titleName;
        foundRent.city = cityName;
        foundRent.country = countryName;
        foundRent.host_name = hostName;
        foundRent.review_scores_rating = rating;
        foundRent.description = description;
        foundRent.house_rules = houseRules;
        foundRent.property_type = propertyType;
        foundRent.accommodates = accommodatesNum;
        foundRent.bathrooms = bathRooms;
        foundRent.bedrooms = bedRooms;
        foundRent.beds = bedsNum;
        foundRent.price = price;
        foundRent.cleaning_fee = cleaningFee;

        console.log(foundRent);
    }


    // return de toda la estructura para el nuevo objeto (el nuevo alquiler) que se va a crear
    return(
        <div id="add-rent-container" className="main-container">
            <form onSubmit={handleFormSubmit}>
                <span>Editar un Alquiler</span>
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
