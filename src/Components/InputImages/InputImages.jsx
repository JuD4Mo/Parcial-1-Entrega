import React from "react";

export const InputImages = ({image, onImageChange, onAddImage}) => {
    return(
        <div>
            <input
            type="text"
            placeholder="Ingrese un título para la imagen"
            value={image}
            onChange={onImageChange}
            />
            <button onClick={onAddImage}> Add image</button>
        </div>
    )
}

