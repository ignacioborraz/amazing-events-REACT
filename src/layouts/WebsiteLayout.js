import Header from '../components/Header' 
import Footer from '../components/Footer' 

function WebsiteLayout(props) {
    return (
        <div>
            <Header />
            { props.children }
            <Footer />
        </div>
    )
}

export default WebsiteLayout