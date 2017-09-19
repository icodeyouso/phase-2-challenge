const fs = require('fs')
const stateUserInput = process.argv[2]
const clients = fs.readFileSync('./clients.json', null, 4)
const parsedStates = JSON.parse(clients)

function searchByState(state) {
  const searchedStates = []

  parsedStates.forEach(function (client) {
    if (client.state.toLowerCase() === state.toLowerCase()) {
      searchedStates.push({
        id: client.id,
        rep_name: client.rep_name,
        company: client.company,
        city: client.city,
        state: client.state
      })
    }
  })

  return searchedStates
}

console.log(searchByState(stateUserInput))