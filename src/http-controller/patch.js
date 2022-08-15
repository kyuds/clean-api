const makePatchDev = ({ editDev }) => {
    return async (http) => {
        let statusCode, body;

        try {
            const changes = { ...http.body, id: http.pathParams.id }
            const patched = await editDev(changes);
            statusCode = 200;
            body = { patched };
        } catch (e) {
            console.log(e);
            statusCode = 400;
            body = { error: e.message };
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

module.exports = makePatchDev;
