console.log(customers)
const customerList = document.querySelector('#customers')

for (let customer of customers) {
    let personElement = document.createElement('div')
    personElement.classList.add('person')

    let imageElement = document.createElement('img')
    imageElement.src = customer.picture.large
    imageElement.alt = 'image of customer'
    imageElement.classList.add('picture')
    personElement.appendChild(imageElement)

    let nameElement = document.createElement('h2')
    nameElement.classList.add('name')
    nameElement.innerText = `${customer.name.first.charAt(0).toUpperCase()}${customer.name.first.slice(1)} ${customer.name.last.charAt(0).toUpperCase()}${customer.name.last.slice(1)}`
    personElement.appendChild(nameElement)

    let emailElement = document.createElement('div')
    emailElement.classList.add('email')
    emailElement.innerText = customer.email
    personElement.appendChild(emailElement)

    // let streetElement = document.createElement('div')
    // streetElement.classList.add('location')
    // streetElement.innerText = `${customer.location.street.number} ${customer.location.street.name}`
    // personElement.appendChild(streetElement)

    let locationElement = document.createElement('div')
    let stateAbbr = (nameToAbbr(customer.location.state))
    locationElement.classList.add('location')
    locationElement.innerText = `${customer.location.street.number} ${customer.location.street.name} \b\r ${customer.location.city}, ${stateAbbr} ${customer.location.postcode}`
    // \b\r\ creates a line break within the location element's inner text
    personElement.appendChild(locationElement)

    let dobElement = document.createElement('div')
    let dobFormat = moment(customer.dob.date).format("MMM D, YYYY")
    dobElement.classList.add('dates')
    dobElement.innerText = `DOB: ${dobFormat}`
    personElement.appendChild(dobElement)

    let regElement = document.createElement('div')
    let regFormat = moment(customer.registered.date).format("MMM D, YYYY")
    regElement.classList.add('dates')
    regElement.innerText = `Customer since: ${regFormat}`
    personElement.appendChild(regElement)

    customerList.appendChild(personElement)
}