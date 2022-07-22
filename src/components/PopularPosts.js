import React from "react";
import {popularPosts} from "../contants";

const PopularPosts = () => {

    const popularPostsArray = popularPosts.map(item => (
        <li className="w3-padding-16">
            <img
                src={item.src}
                alt={item.alt}
                className={item.classNameImg}
                style={item.style}
            />
            <span className="w3-large">{item.title}</span>
            <br/>
            <span>{item.text}</span>
        </li>
    ))

    return (

        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {popularPostsArray}
                </ul>
            </div>
            <hr/>
        </>
    )
}

export default PopularPosts;