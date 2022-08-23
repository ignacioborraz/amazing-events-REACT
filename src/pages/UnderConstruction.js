import WebsiteLayout from '../layouts/WebsiteLayout'
import CallToAction from '../components/CallToAction'

function UnderConstruction() {
    return (
        <>
        <CallToAction linkTo='/' buttonText='404'/>
        <h4 className='L-text'>not found or under construction's page!</h4>
        <a href='#' className='L-link'>go back</a>
        </>
    )
}

export default UnderConstruction