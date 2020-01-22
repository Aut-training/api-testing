const pathUrl = '/cardsets.php';
const request = require('../Request');

class CardSet {
  constructor(baseUrl) {
    this.baseUrl = baseUrl + pathUrl;
  }

  async getCardSets() {
    const response = await request.get(this.baseUrl);
    return response;
  }
}

module.exports = CardSet;