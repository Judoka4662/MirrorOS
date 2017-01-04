/** Create a new DateTime object that shows
 *  current time and weather
 * @class
 */
class DateTime {

  /**
   * @constructor
   */
  constructor () {
    this.now = null
  }

  /**
   * @typedef {Object} DateString
   * @property {String} day - The day of the week
   * @property {String} month - Value between 1..12
   * @property {String} date - The day of the month
   * @property {String} year - 4 digits reresentation of current year
   */
  /**
   * dateString - Generates String representation of current date
   * @return {DateString}  Object containing String representations of current date parts
   */
  dateString () {
    // split Date.toDateString and get following array:
    // [<day>, <month>, <date>, <year>]
    let str = this.now.toDateString().split(' ')
    return {
      day: str[0],
      month: str[1],
      date: str[2],
      year: str[3]
    }
  }

  /**
   * @typedef {Object} TimeString
   * @property {String} hours - Value between 0..11
   * @property {String} minutes - Value between 0..59
   * @property {String} seconds - Value between 0..59
   * @property {String} ampm - Current value which can be AM or PM
   */
  /**
   * timeString - Generates String representation of current time
   * @param  {boolean} ampm Show time in 12 hour format
   * @return {TimeString}  Object containing String representations of current time parts
   */
  timeString (ampm) {
    // split Date.toTimeString and get following array:
    // [<hours>, <minutes>, <seconds>]
    let str = this.now.toTimeString().split(':')
    str[3] = 'AM'

    const hours = Number(str[0])
    if (ampm && hours > 12) {
      str[0] = (hours - 12 < 10) ? '0' + (hours - 12) : '' + (hours - 12)
      str[3] = 'PM'
    }

    return {
      hours: str[0],
      minutes: str[1],
      seconds: str[2],
      ampm: str[3]
    }
  }

  /**
   * @typedef {Object} DateAndTime
   * @property {String} day - The day of the week
   * @property {String} month - Value between 1..12
   * @property {String} date - The day of the month
   * @property {String} year - 4 digits reresentation of current year
   * @property {String} hours - Value between 0..11
   * @property {String} minutes - Value between 0..59
   * @property {String} seconds - Value between 0..59
   * @property {String} ampm - Current value which can be AM or PM
   */
  /**
   * toString - Generate String representation of current date and time together
   * @param  {boolean} ampm Show time in 12 hour format
   * @return {DateAndTime}  Object containing String representations of current date and time parts
   */
  toString (ampm) {
    this.now = new Date()
    const obj = Object.assign({}, this.dateString(), this.timeString(ampm))
    return obj
  }

}

export default DateTime
