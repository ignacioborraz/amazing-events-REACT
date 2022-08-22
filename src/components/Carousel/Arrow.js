import '../../styles/Arrow.css'

function Arrow(props) {
    if (!props.icon) {
        throw new Error('Se requiere un string para la propiedad icon')
    }

    if (!props.click) {
        throw new Error('Se requiere una funcion para la propiedad click')
    }

    return (
        <button className="Arrow-button" onClick={props.click}>
            {props.icon}
        </button>
    )
}

export default Arrow