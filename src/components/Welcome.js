import '../styles/Welcome.css'

function Welcome() {
    const title = "Amazing Events"
    const buttonText = "enter!"
  
    return (
      <div className='Welcome-container'>
        <h1 className="Welcome-title">{title}</h1>
        <a href="#" className="Welcome-button">{ buttonText.toUpperCase() }</a>
      </div>
    );
}

export default Welcome