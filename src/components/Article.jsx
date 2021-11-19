import React from 'react'
import articleApi from '../API/articleApi'

const Article = () => {

    return (
        <>
            {articleApi.map((curElem) => {
                const { id, image, imageAlt, author, title, para } = curElem;
                return (
                    <div key={id} className="articleCard" >
                        <img src={image} alt={imageAlt} />
                        <div className="articleInfo">
                            <p>{author}</p>
                            <h2>{title}</h2>
                            <h4>{para}</h4>
                        </div>
                    </div>
                )

            })}

        </>


    )
}

export default Article