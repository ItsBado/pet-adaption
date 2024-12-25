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
    console.log(pet.name)
  })
}

petsArea()