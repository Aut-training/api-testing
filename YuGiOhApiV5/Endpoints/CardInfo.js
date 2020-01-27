const pathUrl = '/cardinfo.php';
const request = require('../../Requesters/SuperAgent');

class CardInfo {
  constructor(baseUrl) {
    this.baseUrl = baseUrl + pathUrl;
  }

  async getCardByName(name) {
    const response = await request.get(this.baseUrl, { name: name });
    return response[0];
  }

  async getCardsByNameLike(fname) {
    const response = await request.get(this.baseUrl, { fname: fname });
    return response;
  }

  async getCardsWithAttackMoreOrEqualThan(atk) {
    const response = await request.get(this.baseUrl, { atk: `gte${atk}` });
    return response;
  }

  async getCardsByRace(race) {
    const response = await request.get(this.baseUrl, { race: race });
    return response;
  }
}

module.exports = CardInfo;
