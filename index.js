const advanceLogMatrix = require("./advanceLogMatrix");
const generateMatrix = require("./generateMatrix");

advanceLogMatrix(generateMatrix());

module.exports = {
  advanceLogMatrix,
  generateMatrix,
};
