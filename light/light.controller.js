const lightView = require("./light.view.js");

function displayAction(request, response) {
    response.send(lightView.display());
}

  module.exports = { displayAction };
