import EventsCarousel from '../components/EventsCarousel'
import Welcome from '../components/Welcome'
import WebsiteLayout from '../layouts/WebsiteLayout'

function HomePage() {
    return (
        <WebsiteLayout>
            <Welcome />
            <EventsCarousel />
        </WebsiteLayout>
    )
}

export default HomePage