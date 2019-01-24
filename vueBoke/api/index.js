export const BASE_URL = 'http://localhost:3000';


export const moment = (time) => {
  var dateee = new Date(time).toJSON();
  var date = new Date(+new Date(dateee) + 8 * 3600 * 1000)
    .toISOString()
    .replace(/T/g, ' ')
    .replace(/\.[\d]{3}Z/, '');
  return date;
}
