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
                    statusCode: dev ? 200 : 404,
                    body: dev
                }
            } else if (Object.keys(params).length) {
                const devs = await findDev.params({ params });
                return {
                    headers,
                    statusCode: devs ? 200 : 404,
                    body: devs
                }
            } else {
                const devs = await findDev.all();
                return {
                    headers,
                    statusCode: devs ? 200 : 404,
                    body: devs
                }
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
