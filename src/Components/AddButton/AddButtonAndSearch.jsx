import React, { use, useState } from "react";
import { InputImages } from "../InputImages/InputImages";
import { randomImage } from "../Images/Images";
import { SearchImages } from "../SearchImages/SearchImages";

export const AddButtonAndSearch = () => {
    const[image, setImage] = useState("");
    const[title, setTitle] = useState("");
    const[imgs, setImgs] = useState([])
    const[imagenFiltrada, setImagenesFiltradas] = useState([])

    const handleChange = (event) => {
        setImage(event.target.value);
    }

    const handleAddImage = () =>{
        if(image.trim() === "") return;
        var num = Math.random(10000);
        let rmImg = randomImage(num);
        imgs.forEach(img => {
            if(img.title == image){
                return;
            }
        })
        imgs.push({
            title: image,
            src: rmImg
        });
        setImage("");
    }

    const handleSearch = (event) =>{
        setTitle(event.target.value)
        const value = event.target.value;
        const filters = imgs.filter(imgs => imgs.title == value);
        setImagenesFiltradas(filters);
    }

    return(
        <div>
            <h2>
                Image Randomizer
            </h2>
            <InputImages
            image = {image}
            onImageChange={handleChange}
            onAddImage={handleAddImage}
            />
            <h3>
                Image List:
            </h3>
            <div className="DivImagenesGlobal">
                {imgs.map((img, index) => (
                    <div  key={index}>
                    <div className="DivImagenes">
                    <><p>{img.title}</p>{img.src}</>
                    </div>
                    </div>
                ))}
            </div>
            <div>
                <SearchImages
                image = {title}
                handleSearchChange={handleSearch}
                />   
            </div>
            <div>
            {imagenFiltrada.map((img,index) => (<div key={index}><p>La imagen buscada fue: {img.title}</p>{img.src}</div>))}                
            </div>
        </div>
    );  
}