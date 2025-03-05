import React from "react";

export const SearchImages = ({title, handleSearchChange, handleSearchTitle}) => {
    return(
        <div>
            <input
            type="text"
            placeholder="Ingrese un título para buscar la imagen"
            value={title}
            onChange= {handleSearchChange}
            />
        </div>
    )
}

