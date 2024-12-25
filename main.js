const template = document.querySelector("#pet-card-template") // selecting that template element in HTML
const wrapper = document.createDocumentFragment()


/* dynamic weather */

async function start() { 
  const weatherPromise = await fetch ("https://api.weather.gov./gridpoints/MFL/110,50/forecast")
  const weatherData = await weatherPromise.json()

  const ourTemprature = weatherData.properties.periods[0].temperature
  document.querySelector("#temp-output").textContent = ourTemprature
}

start()

/* fetch the data that lives in this URL */

async function petsArea() {
  const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const petsData = await petsPromise.json()
  petsData.forEach(pet => {
    const clone = template.content.cloneNode(true)

    clone.querySelector("h3").textContent = pet.name

    wrapper.appendChild(clone)
  })

  document.querySelector(".list-of-pets").appendChild(wrapper)
}

petsArea()