const axios = require('axios');

class Request {
  async get(url, params = null) {
    try {
      const response = await axios.get(url, {
        params: params
      });
      return response.data;
    } catch (error) {
      console.log(
        {
          message: error.message,
          details: error.config
        }
      );
    }
  }
}

module.exports = new Request();