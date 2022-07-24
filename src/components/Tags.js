import React from "react";
import {tags} from "../contants";

const margin = {
    marginRight: '5px'
}

const Tag = props => {
    return (
        <span
            className="w3-tag w3-light-grey w3-small w3-margin-bottom"
            style={margin}>
            {props.name}
        </span>
    )
}

const Tags = () => {

    const tagsArray = tags.map(item => <Tag name={item}/>)

    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white">
                    <p>
                        { tagsArray }
                    </p>
                </div>
            </div>
        </>
    )
}

export default Tags;