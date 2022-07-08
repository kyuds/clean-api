const makePostDev = ({ addDev }) => {
    return async (http) => {
        try {
            const posted = await addDev(http.body);
            return {
                headers: {
                    'Content-Type': "application/json",
                    'Last-Modified': new Date(posted.modifiedOn).toUTCString()
                },
                statusCode: 201,
                body: { posted }
            }
        } catch (e) {
            //  instead of printing, log to system.
            console.log(e);

            return {
                headers: {
                    'Content-Type': "application/json",
                },
                statusCode: 400,
                body: { error: e.message }
            }
        }
    };
};

module.exports = makePostDev;
