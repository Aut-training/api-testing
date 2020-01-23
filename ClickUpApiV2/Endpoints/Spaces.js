const pathUrl = '/space';
const request = require('../../Request');

class Spaces {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getSpaces(teamId) {
    const response = await request.get(`${this.baseUrl}/team/${teamId}${pathUrl}`, { archived: false });
    return response;
  }
}

module.exports = Spaces;