const pathUrl = '/folder';
const request = require('../../Requesters/Axios');

class Folders {
  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  async getFolders(spaceId) {
    const response = await request.get(`${this.baseUrl}/space/${spaceId}${pathUrl}`, { archived: false }, { 'Authorization': this.apiKey });
    return response.folders;
  }

  async getFolder(folderId) {
    const response = await request.get(`${this.baseUrl}${pathUrl}/${folderId}`, { archived: false }, { 'Authorization': this.apiKey });
    return response;
  }

  async createFolder(spaceId, folderName) {
    const response = await request.post(`${this.baseUrl}/space/${spaceId}${pathUrl}`, { name: folderName }, { 'Authorization': this.apiKey });
    return response;
  }

  async deleteFolder(folderId) {
    const response = await request.delete(`${this.baseUrl}${pathUrl}/${folderId}`, null, { 'Authorization': this.apiKey });
    return response;
  }

}

module.exports = Folders;
