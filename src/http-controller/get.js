const makeGetDev = ({ findDev }) => {
    return async (http) => {
        const headers = {
            "Content-Type": "application/json"
        }
        try {
            const { id } = http.queryParams || {};
            //  switch querying to more generic versions. 
            const params = http.body || undefined;

            if (id) {
                const dev = await findDev.id({ id });
                return {
                    headers,
                    statusCode: 200,
                    body: dev
                }
            } else if (params) {
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
