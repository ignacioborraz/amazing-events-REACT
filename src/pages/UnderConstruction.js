import CallToAction from '../components/CallToAction'

function UnderConstruction() {
    let buttonText = 'go back'
    return (
        <>
            <h4 className='L-text'>not found or under construction's page!</h4>
            <CallToAction linkTo='/' buttonText={buttonText} radio='120'/>            
        </>
    )
}

export default UnderConstruction