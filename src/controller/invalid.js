const invalid = async (http) => {
    return {
        headers: {
          'Content-Type': 'application/json'
        },
        body: { error: 'Invalid route or request.' },
        statusCode: 404
      }
};

module.exports = invalid;