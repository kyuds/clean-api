const makePostDev = ({ addDev }) => {
    return async (http) => {
        let statusCode, body;

        try {
            const posted = await addDev(http.body);
            statusCode = 201;
            body = { posted }
        } catch (e) {
            //  instead of printing, log to system.
            console.log(e);
            statusCode = 400;
            body = { error: e.message }
        }

        return {
            headers: {
                'Content-Type': "application/json",
            },
            statusCode: statusCode,
            body: body
        }
    };
};

module.exports = makePostDev;
