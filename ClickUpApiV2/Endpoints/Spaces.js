const pathUrl = '/space';
const request = require('../../Requesters/Axios');

class Spaces {
  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  async getSpaces(teamId) {
    const response = await request.get(`${this.baseUrl}/team/${teamId}${pathUrl}`, { archived: false }, { 'Authorization': this.apiKey });
    return response.spaces;
  }

  async getSpace(spaceId) {
    const response = await request.get(`${this.baseUrl}${pathUrl}/${spaceId}`, { archived: false }, { 'Authorization': this.apiKey });
    return response;
  }
}

module.exports = Spaces;
