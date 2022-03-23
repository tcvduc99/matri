/**
 *
 * @param {Array} a
 */
function advanceLogArray(a) {
  /**
   * 20. Advance console log array tech
   * - a = [1,2,3,4,5]
   * - ret
   * -------Array------
   * i    0 1 2 3 4   |
   * a[i] 1 2 3 4 5   |
   * ------------------
   *
   *
   */

  /**
   *
   * @param {Number} n
   */
  function generateSpace(n) {
    /**
     * - n = 3
     * - ret = "   "
     */
    let ret = "";
    for (let i = n - 1; i >= 0; --i) {
      ret += " ";
    }
    return ret;
  }
  /**
   *
   * @param {Number} n
   */
  function getNumberDigit(n) {
    let ret = 0;

    while (n !== 0) {
      ret++;
      n = Math.floor(n / 10);
    }

    return ret;
  }

  /**
   *
   * @param {string} s
   */
  function stringRightTrim(s) {
    /**
     * - s = "abc   "
     * - ret = "abc"
     */
    let ret = new Array(s.length);
    for (let i = s.length - 1; i >= 0; --i) {
      ret[i] = s[i];
    }
    while (ret[ret.length - 1] === " ") {
      ret = pop(ret);
    }
    return {
      arrayCharacters: ret,
      string: join(ret, ""),
    };
  }
  /**
   *
   * @param {Array} a
   */
  function pop(a) {
    /**
     * - a = [1,2,3]
     * - ret = [1,2]
     */
    const ret = new Array(a.length - 1);
    for (let i = ret.length - 1; i >= 0; --i) {
      ret[i] = a[i];
    }
    return ret;
  }
  /**
   *
   * @param {Array} a
   * @param {string} key
   */
  function join(a, key) {
    let ret = "";
    for (let i = 0; i <= a.length - 1; ++i) {
      ret += a[i] + key;
    }
    return ret;
  }

  /**
   *
   * @param {Number} n
   */
  function generateMinus(n) {
    let ret = "";

    for (let i = n - 1; i >= 0; --i) {
      ret += "-";
    }

    return ret;
  }

  /**
   *
   * @param {string} aSquareBracketiSquareBracketSpace
   */
  function handleGetSuitableTopBoundary(aSquareBracketiSquareBracketSpace) {
    /**
     * - input =  a[i] = 1 2 3 4 5    |
     * - ret =    --------Array--------
     *
     *
     */
    let arrayString = "Array";
    const minusGenerateNumber = Math.floor(
      aSquareBracketiSquareBracketSpace.length / 2 - arrayString.length / 2
    );
    let minuses = generateMinus(minusGenerateNumber);
    const ret = minuses + arrayString + minuses;

    return ret;
  }
  /**
   *
   * @param {Array} a
   * @param {string} aSquareBracketiSquareBracketSpace
   */
  function handleGetSuitableIndexBar(a, aSquareBracketiSquareBracketSpace) {
    /**
     * - input: a[i]  1 2 3 4 5   |
     * - ret  : i     0 1 2 3 4   |
     */
    let ret = "i" + generateSpace(4);

    for (let i = 0; i <= a.length - 1; ++i) {
      const spaceForIndex = generateSpace(getNumberDigit(a[i]));
      ret += i + spaceForIndex;
    }

    ret = stringRightTrim(ret).string;

    const spaceBetweenIndexBarAndRightBoundary = generateSpace(
      aSquareBracketiSquareBracketSpace.length - ret.length - 1
    );

    ret += spaceBetweenIndexBarAndRightBoundary + "|";

    return ret;
  }
  /**
   *
   * @param {string} aSquareBracketiSquareBracketSpace
   */
  function handleGetSuitableBottomBoundary(aSquareBracketiSquareBracketSpace) {
    return generateMinus(aSquareBracketiSquareBracketSpace.length);
  }

  let aSquareBracketiSquareBracketSpace = "a[i] ";
  for (let i = a.length - 1; i >= 0; --i) {
    aSquareBracketiSquareBracketSpace += a[a.length - i - 1] + " ";
  }

  aSquareBracketiSquareBracketSpace += generateSpace(2) + "|";

  // top boundary
  const topBoundary = handleGetSuitableTopBoundary(
    aSquareBracketiSquareBracketSpace
  );
  console.log(topBoundary);
  // index
  const indexBar = handleGetSuitableIndexBar(
    a,
    aSquareBracketiSquareBracketSpace
  );
  console.log(indexBar);
  // a[i]
  console.log(aSquareBracketiSquareBracketSpace);

  // bottom boundary
  const bottomBoundary = handleGetSuitableBottomBoundary(
    aSquareBracketiSquareBracketSpace
  );

  console.log(bottomBoundary);
}

module.exports = advanceLogArray;
