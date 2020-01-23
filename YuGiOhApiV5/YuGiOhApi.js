const cardInfo = require('./Endpoints/CardInfo');
const cardSet = require('./Endpoints/CardSet');

class YuGiOhApi {
  get version() {
    return 5;
  }

  get baseURL() {
    return `https://db.ygoprodeck.com/api/v${this.version}`;
  }

  get cardInfo() {
    return new cardInfo(this.baseURL);
  }

  get cardSet() {
    return new cardSet(this.baseURL);
  }
}

module.exports = new YuGiOhApi();
