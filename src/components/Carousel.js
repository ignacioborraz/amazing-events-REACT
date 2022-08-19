function Carousel(props) {
    const range = props.range
    const start = 0
    const end = start + range
    const items = props.data

    const itemView = (item) => (
        <div className="item">
            <img src={item.url} />
            <p>{item.title}</p>
        </div>
    )

    return (
        <div>
            <div className="slide">
                {items.slice(start, end).map(itemView)}
            </div>
        </div>
    )
}

export default Carousel