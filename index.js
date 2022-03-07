/**
 *
 * @param {Number} from
 * @param {Number} to
 *
 */
function generateRandomNumber(from, to) {
  return Math.round(Math.random() * (to - from) + from);
}

/**
 *
 * @param {Array} a
 * @param {any} e
 *
 */
function push(a, e) {
  const ret = new Array(a.length + 1);
  ret[ret.length - 1] = e;
  for (let i = ret.length - 2; i >= 0; --i) {
    ret[i] = a[i];
  }
  return ret;
}

/**
 *
 * @param {object} config
 */
function generateMatrix(config) {
  const activateConfig = {
    rows: 3,
    columns: 3,
    from: 0,
    to: 9,
  };

  if (config.rows || config.rows === 0) {
    activateConfig.rows = config.rows;
  }
  if (config.columns || config.columns === 0) {
    activateConfig.columns = config.columns;
  }
  if (config.from || config.from === 0) {
    activateConfig.from = config.from;
  }
  if (config.to || config.to === 0) {
    activateConfig.to = config.to;
  }

  let ret = [];

  for (let i = activateConfig.rows - 1; i >= 0; --i) {
    let column = [];
    for (let j = activateConfig.columns - 1; j >= 0; --j) {
      column = push(
        column,
        generateRandomNumber(activateConfig.from, activateConfig.to)
      );
    }
    ret = push(ret, column);
  }

  return ret;
}

module.exports = generateMatrix;
