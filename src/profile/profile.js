const buildMakeProfile = ({ Id, validEmail }) => {
    return ({
        firstName,
        lastName,
        email,
        id = Id.makeId(),
        joinedOn = Date.now(),
        modifiedOn = Date.now(),
        company,
        language
    } = {}) => {
        if (!Id.isValid(id)) {
            throw new Error("Profile must have a valid ID");
        }
        if (!firstName || firstName.length < 2) {
            throw new Error("Profile must have a first name that is longer than 2 characters.");
        }
        if (!lastName || lastName.length < 2) {
            throw new Error("Profile must have a last name that is longer than 2 characters.");
        }
        if (!language) {
            throw new Error("Profile must specify a preferred programming language.");
        }
        if (!validEmail(email)) {
            throw new Error(`Email (${email}) should be in a valid format.`);
        }

        const normalize = (word) => {
            if (word.length === 1) {
                return word.toUpperCase()
            }
            return word.charAt(0).toUpperCase() + word.substring(1)
        }

        return Object.freeze({
            id: id,
            firstName: normalize(firstName),
            lastName: normalize(lastName),
            email: email.toLowerCase(),
            joinedOn: joinedOn,
            modifiedOn: modifiedOn,
            company: normalize(company),
            language: normalize(language)
        })
    }
};

module.exports = buildMakeProfile;
