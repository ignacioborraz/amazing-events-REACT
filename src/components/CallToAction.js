import {Link as LinkRouter} from 'react-router-dom'

export default function CallToAction(props) {
    let linkTo = props.linkTo
    let buttonText = props.buttonText.toUpperCase()
    let className = `Welcome-button Welcome-Radio-${props.radio}`
  return (
    <LinkRouter to={linkTo} className={className}>{buttonText}</LinkRouter>
  )
}
