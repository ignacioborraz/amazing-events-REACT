import Header from '../components/Header' 
import Footer from '../components/Footer'
import '../styles/Layouts.css'

function WebsiteLayout(props) {
    return (
        <div className="L-container">
            <Header />
            { props.children }
            <Footer />
        </div>
    )
}

export default WebsiteLayout