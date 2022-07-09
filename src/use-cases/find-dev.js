const makeFindDev = ({ database }) => {
    return Object.freeze({ id, params, all });

    async function id ({ id }) {
        const profile = await database.findById({ id });
        return profile;
    }

    async function params ({ params }) {
        //  Any parameters can technically be "accepted", but only a few are actually valid.
        //  Change parameters of filterer to allow querying of different data. 
        const filterer = ({ company, language }) => ({ company, language });
        
        const filteredParams = filterer(params);
        Object.keys(filteredParams).forEach(key => {
            if (filteredParams[key] === undefined) {
              delete filteredParams[key];
            }
          });
        const empty = Object.keys(filteredParams).length === 0;

        if (empty) {
            throw new Error("Invalid body for query. Please enter accepted parameters.");
        }

        const devs = await database.findByParams({ filteredParams });
        return devs;
    }

    async function all () {
        const devs = await database.findAll();
        return devs;
    }
};

module.exports = makeFindDev;
