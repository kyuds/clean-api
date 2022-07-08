const makeGetDev = ({ getDevID, getDevParam }) => {
    return async (http) => {
        const headers = {
            "Content-Type": "application/json"
        }
        try {
            //  pathParams is not valid. How to differentiate between load and queries?
            const { id } = http.queryParams || {};
            const { company, language } = http.body || {};

            if (id) {
                const dev = await getDevID({ id });
                return {
                    headers,
                    statusCode: 200,
                    body: dev
                }
            } else if (company || language) {
                const devs = await getDevParam({ company, language })
                return {
                    headers,
                    statusCode: 200,
                    body: devs
                }
            } else {
                throw new Error("No valid query or body specified.");
            }
        } catch (e) {
            console.log(e);
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message,
                }
            }
        }
    };
};

module.exports = makeGetDev;
