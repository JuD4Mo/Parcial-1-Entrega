import React from "react";

export function randomImage(rand){
    return <img src = {`https://picsum.photos/200/300?random = ${rand}`}/>
}