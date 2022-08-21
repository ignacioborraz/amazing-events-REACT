export default function CallToAction(props) {
    let linkTo = props.linkTo
    let buttonText = props.buttonText
  return (
    <a href={linkTo} className="Welcome-button">{ buttonText.toUpperCase() }</a>
  )
}
