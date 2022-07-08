const makeGetDev = ({ getDevID, getDevParam }) => {
    return async (http) => {
        const headers = {
            "Content-Type": "application/json"
        }
        try {
            //  pathParams is not valid. How to differentiate between load and queries?
            const { id } = http.pathParams || {};
            const { company, language } = http.queryParams || {};

            if (id) {
                return {
                    headers,
                    statusCode: 200,
                    body: {
                        id: id
                    }
                }
            } else if (company || language) {
                return {
                    headers,
                    statusCode: 200,
                    body: {
                        company: company,
                        language: language
                    }
                }
            } else {
                throw new Error("No valid path or query specified.");
            }
        } catch (e) {
            console.log(e);
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message,
                    path: http.pathParams,
                    query: http.queryParams
                }
            }
        }
    };
};

module.exports = makeGetDev;
