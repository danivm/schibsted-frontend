function getData () {
  return fetch('data.json')
    .then(response => response.json())
    .then(quotes => {
      const randomIndex = Math.floor(Math.random() * quotes.length)
      const { quote, attribution: author } = quotes[randomIndex]
      return `${quote} (${author})`
    })
    .catch(error => console.log(error))
}

module.exports = getData
