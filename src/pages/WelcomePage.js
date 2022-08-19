import Footer from '../components/Footer';
import '../styles/WelcomePage.css'

function WelcomePage() {
    const title = "Eventos espectaculares"
    const buttonText = "entrar"
  
    return (
      <>
        <div className="App-container">
          <h1 className="App-title">{title}</h1>
          <a href="#" className="App-button">{ buttonText.toUpperCase() }</a>
        </div>
        <Footer />
      </>
    );
}

export default WelcomePage