const makeDeleteDev = ({ removeDev }) => {
    return async (http) => {
        let statusCode, body;

        try {
            const deleted = await removeDev({ id: http.pathParams.id });
            statusCode = deleted.success ? 200 : 404;
            body = { deleted }
        } catch (e) {
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

module.exports = makeDeleteDev;
