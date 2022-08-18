import Footer from '../components/Footer';
import '../styles/WelcomePage.css'

function WelcomePage() {
    const title = "Eventos espectaculares"
    const buttonText = "entrar"
  
    return (
      <>
        <div className="App-container">
          <h1 className="App-title">{title}</h1>
          <button className="App-button">{ buttonText.toUpperCase() }</button>
        </div>
        <Footer />
      </>
    );
}

export default WelcomePage