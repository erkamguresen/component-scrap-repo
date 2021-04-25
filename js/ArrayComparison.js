/**
 * This method compares two given arrays with respect to their lengths and values.
 *
 * @param {array} actual actual array to compare
 * @param {array} expected expected array to compare
 * @returns {boolean} true if arrays contains same values
 */
const deepCompareArrays = (actual, expect) => {
  // are they the same thing?
  return (
    actual === expect ||
    Object.is(actual, expect) ||
    // compare arrays
    (Object(actual) === actual &&
      Object(expect) === expect &&
      ((Array.isArray(actual) &&
        Array.isArray(expect) &&
        actual.length === expect.length &&
        expect.every((expect, index) => deepCompare(actual[index], expect))) ||
        // compare objects
        (Object.keys(actual).length === Object.keys(expect).length &&
          Object.keys(expect).every((key) =>
            deepCompare(actual[key], expect[key])
          ))))
  );
};
