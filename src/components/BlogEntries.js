import React from "react";
import {posts} from "../contants";

const BlogEntries = () => {

    const postsArray = posts.map(item => (
        <>
        <div className="w3-card-4 w3-margin w3-white">
            <img src={item.blockImgSrc} alt={item.blockImgSrc} style={item.blockImgStyle} />
            <div className="w3-container">
                <h3>
                    <b>{item.title}</b>
                </h3>
                <h5>
                    Title description, <span className="w3-opacity">{item.date}</span>
                </h5>
            </div>
            <div className="w3-container">
                <p>
                    {item.blockText}
                </p>
                <div className="w3-row">
                    <div className="w3-col m8 s12">
                        <p>
                            <button className="w3-button w3-padding-large w3-white w3-border">
                                <b>READ MORE »</b>
                            </button>
                        </p>
                    </div>
                    <div className="w3-col m4 w3-hide-small">
                        <p>
            <span className="w3-padding-large w3-right">
              <b>Comments &nbsp;</b> <span className={item.classCountComments}>{item.countComments}</span>
            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    <hr/>
    </>
    ))

    return (
        <div className="w3-col l8 s12">
            {postsArray}
        </div>


    )
}

export default BlogEntries;