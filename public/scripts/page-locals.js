// create map
const map = L.map('mapid').setView([-3.0759354, -59.9901379], 11)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
})
.addTo(map)


// create icon
const icon = L.icon({
    iconUrl: "/images/oxygen-tank.svg",
    iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [170, 2]
    })

    function addMarker({id, name, lat, lng}) {

        // create popup overlay
        const popup = L.popup({
            closeButton: false,
            className: 'map-popup',
            minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/local?id=${id}"><img src="/images/arrow-white.svg" > </a>`)


    // create and add marker
    L
    .marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.locals span')

orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)    
})
