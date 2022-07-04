function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 123 456 789'

    const address = document.createElement('p')
    address.textContent = '🏠 Palo Alto 28, California , USA'

    const location = document.createElement('img')
    location.src = 'imgs/location.png'
    location.alt = 'location'

    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(location)

    return contact
}

function loadContact() {
    const main = document.querySelector('main')
    main.textContent = ""
    main.appendChild(createContact())
}

export default loadContact