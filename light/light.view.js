const e = require("express");
const { request } = require("express");

function display(movies, request) {
  return `
     <p>Test</p>
    `;
}

module.exports = { display };