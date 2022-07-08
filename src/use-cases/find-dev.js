const makeFindDev = ({ database }) => {
    return Object.freeze({ id, params });

    async function id ({ id }) {
        const profile = await database.findById({ id });
        return profile;
    }

    async function params ({ params }) {
        //  Any parameters can technically be "accepted", but only a few are actually valid.
        //  Change parameters of filterer to allow querying of different data. 
        const filterer = ({ company, language }) => ({ company, language });
        
        const filteredParams = filterer(params);
        const empty = Object.values(filteredParams).every(el => el === undefined);

        if (empty) {
            throw new Error("Invalid body for query. Please enter accepted parameters.");
        }

        const devs = await database.findByParams({ filteredParams });
        return devs;
    }
};

module.exports = makeFindDev;
