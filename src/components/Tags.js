import React, {useState} from "react";
import {tags} from "../contants";

const margin = {
    marginRight: '5px'
}

const Tag = props => {

    const [selectTag, setSelectTag] = useState(false)

    return (

        <span
            onClick={() => setSelectTag(!selectTag)}
            className={selectTag ? "w3-tag w3-black w3-margin-bottom" : "w3-tag w3-light-grey w3-small w3-margin-bottom"}
            style={margin}>
            {props.name}
        </span>

    )
}


const Tags = () => {

    const tagsArray = tags.map((item, i) => <Tag name={item} tabindex={i}/>)

    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white">
                    <p>
                        {tagsArray}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Tags;