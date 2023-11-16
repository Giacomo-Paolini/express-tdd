module.exports = function (string, array) {

    if (typeof string !== "string" || !string) {
        throw new Error("Something went wrong");
    }

    const kebabCase = string.replace(" ", "-");

    if (array) {
        let c = 1;
        let result;
        array.forEach((element) => {
            if (element.slug === string) {
                result = string + " " + c
                c++;
            }
        });
        return result.replace(" ", "-").toLowerCase();
    }

    return kebabCase.toLowerCase();
}