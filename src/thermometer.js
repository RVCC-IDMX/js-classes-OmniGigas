/* eslint-disable no-useless-constructor */
/* eslint-disable getter-return */
/* eslint-disable class-methods-use-this */
/*
 * thermometer.js
 * Language: javascript
 * Test: tests/thermometer.test.js
 * Path: src/thermometer.js
 *
 * Create a Thermometer class
 * Using getters and setters - https://bit.ly/3DLVSuF (Javascript.info)
 * getters - access properties https://mzl.la/3p9oLwR
 * setters - change properties https://mzl.la/3vjPiZl
 * private class field - https://mzl.la/3vhtrC5
 *
 */

/**
 * @class Thermometer
 *
 * An instance of this class is a temperature that
 * is represented in celsius units (store it in a private class field)
 * The other unit values are calculated from the
 * stored celsius temperature
 *
 *
 */
class Thermometer {
  // write your code here for the private class field called celsius
  #celsius;

  /**
 * @constructor
 * @param {number} celsius
 */
  constructor(celsius) {
    // write your code here
    this.#celsius = celsius;
  }

  /*  -------- celsius -------------------*/
  /**
   * @getter celsius
   * @returns {number}
   * @memberof Thermometer
   * @description - returns the celsius temperature
   * */
  get celsius() {
    // write your code here
    return this.#celsius;
  }

  /**
   * @setter celsius
   * @param {number} celsius
   * @memberof Thermometer
   * @description - sets the celsius temperature
   */
  set celsius(tempCelsius) {
    // write your code here
    this.#celsius = tempCelsius;
  }

  /*  -------- kelvin -------------------*/
  /**
   * @getter kelvin
   * @returns {number}
   * @memberof Thermometer
   * @description - returns the kelvin temperature
   */
  get kelvin() {
    // write your code here
    return this.#celsius + 273.15;
  }

  /**
   * @setter kelvin
   * @param {number} kelvin
   * @memberof Thermometer
   * @description - sets the kelvin temperature
   */
  set kelvin(tempKelvin) {
    // write your code here
    this.#celsius = tempKelvin - 273.15;
  }

  /*  -------- fahrenheit -------------------*/
  /**
   * @getter fahrenheit
   * @returns {number}
   * @memberof Thermometer
   * @description - returns the fahrenheit temperature
   */
  get fahrenheit() {
    // write your code here
    return ((this.#celsius * 9) / 5) + 32;
  }

  /**
   * @setter fahrenheit
   * @param {number} fahrenheit
   * @memberof Thermometer
   * @description - sets the fahrenheit temperature
   */
  set fahrenheit(tempFahrenheit) {
    // write your code here
    this.#celsius = ((tempFahrenheit - 32) * 5) / 9;
  }

  /**
 * @method toString
 * @param {string} unit - 'C', 'K', 'F'
 * @returns {string} - the temperature in the specified unit
 * @memberof Thermometer
 * @description - returns a string with the temperature in the specified unit
 *
 * Example: Assuming an instance of this class is 0°C
 * toString('C') returns '0°C'
 * toString('K') returns '273.15K' - notice no ° symbol
 * toString('F') returns '32°F'
 * Any other value, or no value, for unit returns the celsius value + '°C'
 *
 */
  toString(unit) {
    // write your code here
    if (unit === 'K') {
      return `${this.kelvin}K`;
    }
    if (unit === 'F') {
      return `${this.fahrenheit}°F`;
    }
    return `${this.celsius}°C`;
  }
}

module.exports = {
  Thermometer,
};
