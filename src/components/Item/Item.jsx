import "./Item.css"

export const Item = ({ name, image, author }) => {
    return (
        <div className="product-container">
            <article className="generic-product-card">
                <div>
                    <p><img className="product-image" title={name} src={image}></img></p>
                    <h4 className="title">{name}</h4>
                    <h5 className="author">{author}</h5>
                </div>
            </article>
        </div>
        
    )
}
