const makeDeleteDev = ({ removeDev }) => {
    return async (http) => {
        try {
            console.log(http)
            const deleted = await removeDev({ id: http.pathParams.id });
            
            return {
                headers: {
                    'Content-Type': "application/json",
                },
                statusCode: deleted.success ? 200 : 404,
                body: { deleted }
            }
        } catch (e) {
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

module.exports = makeDeleteDev;
