import { Component } from "react";

export const Item = (props) => {
    const {item} = props;
    const {src} = item;
   
    return(
        <img src = {src} className = "imgg"/>
    );
};
