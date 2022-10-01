import CallToAction from './CallToAction'
import '../styles/Welcome.css'

function Welcome() {
    const title = "Amazing Events"
    const buttonText = "enter!"
  
    return (
      <div className='Welcome-container'>
        <h1 className="Welcome-title">{title}</h1>
        <CallToAction linkTo='/events' buttonText={buttonText} radio='80'/>
      </div>
    );
}

export default Welcome