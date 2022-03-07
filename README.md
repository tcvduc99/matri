## Generate Matrix

- A package to generate matrix

## Installation

`npm install generate-matrix`

## Quick Start

    const { generateMatrix } = require('generate-matrix');

    const config = {
      rows: 3,
      columns: 3,
      from: 0,
      to: 9
    }

    console.log(generateMatrix(config));

## Configuration

    const config = {
      rows: 3, // Number of row
      columns: 3, // Number of column
      from: 0, // Start value
      to: 9 // End value
    }
