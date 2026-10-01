import "./Item.css"

export const Item = ({ name, image, author, children }) => {
    return (
        <div className="product-container">
            <article className="product-card">
                <div className="product-container">
                    <div>
                        <div>
                            <p><img className="product-image" title={name} src={image}></img></p>
                        </div>
                        <div>
                            <h4 className="title">{name}</h4>
                            <h5 className="author">{author}</h5>
                        </div>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </article>
        </div>  
    )
} 