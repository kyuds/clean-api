const makeGetDev = ({ findDev }) => {
    return async (http) => {
        const headers = {
            "Content-Type": "application/json"
        }
        try {
            const { id } = http.pathParams || {};
            const params = http.queryParams;

            if (id) {
                const dev = await findDev.id({ id });
                return {
                    headers,
                    statusCode: 200,
                    body: dev
                }
            } else if (Object.keys(params).length) {
                const devs = await findDev.params({ params });
                return {
                    headers,
                    statusCode: 200,
                    body: devs
                }
            } else {
                throw new Error("No valid query or body specified.");
            }
        } catch (e) {
            //  recognize custom errors. 
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
