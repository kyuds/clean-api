const invalid = async (http) => {
    return {
        headers: {
          'Content-Type': 'application/json'
        },
        body: { error: 'Unsupported route or request.' },
        statusCode: 405
      }
};

module.exports = invalid;
