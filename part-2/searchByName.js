var fs = require('fs')
const clientFile = "clients.json"
var argvClient = process.argv[2]

function searchByName(name) {
  const clients = fs.readFileSync('./clients.json', null, 4);
  const parsedNames = JSON.parse(clients);;
  const searchedNames = [];
  parsedNames.forEach(function (client) {

    if (client.rep_name.toLowerCase().startsWith(name.toLowerCase())) {

      searchedNames.push({
        id: client.id,
        rep_name: client.rep_name,
      });
    }
  });

  console.dir(searchedNames, {
    depth: null,
    colors: true,
  });
}

searchByName(argvClient);