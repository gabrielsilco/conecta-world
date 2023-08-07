const mapSvg = document.getElementById('map-svg');

mapSvg.addEventListener('click', event => {
    const countryId = event.target.id
    event.target.classList.toggle('highlighted')
})