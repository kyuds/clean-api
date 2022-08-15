const makeGetDev = ({ findDev }) => {
    return async (http) => {
        let statusCode, body;

        const headers = {
            "Content-Type": "application/json"
        }
        try {
            const { id } = http.pathParams || {};
            const params = http.queryParams;

            if (id) {
                const dev = await findDev.id({ id });
                statusCode = dev ? 200 : 404;
                body = dev;
            } else if (Object.keys(params).length) {
                const devs = await findDev.params({ params });
                statusCode = devs ? 200 : 404;
                body = devs;
            } else {
                const devs = await findDev.all();
                statusCode = devs ? 200 : 404;
                body = devs;
            }
        } catch (e) {
            console.log(e);
            statusCode = 400;
            body = { error: e.message };
        }

        return {
            headers,
            statusCode: statusCode,
            body: body
        }
    };
};

module.exports = makeGetDev;
