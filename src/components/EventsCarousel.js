import Carousel from './Carousel'

function EventsCarousel() {
    const items = [
        { url: "/logo192.png", title: "Recitalse" },
        { url: "/logo192.png", title: "Museos" },
        { url: "/logo192.png", title: "Fiesta de Disfraces" },
        { url: "/logo192.png", title: "Peliculas" },
        { url: "/logo192.png", title: "Ferias" },
        { url: "/logo192.png", title: "Museos" },
        { url: "/logo192.png", title: "Disfraces" },
        { url: "/logo192.png", title: "Cines" },
        { url: "/logo192.png", title: "Ferias" },
        { url: "/logo192.png", title: "Museos" },
        { url: "/logo192.png", title: "Disfraces" },
        { url: "/logo192.png", title: "Cines" },
    ]

    return (
        <Carousel data={items} range={3} />
    )
}

export default EventsCarousel