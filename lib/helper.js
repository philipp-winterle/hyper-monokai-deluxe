const replaceLiterals = (string, variables, stack) => {
    for (let key in variables) {
        if (variables.hasOwnProperty(key)) {
            if (typeof variables[key] === "object") {
                string = replaceLiterals(string, variables[key], (stack ? stack + '.' : '') + key);
            } else {
                const find = '\\$\\{\\s*' + (stack ? stack + '.' : '') + key + '\\s*\\}';
                const re   = new RegExp(find, 'g');
                string     = string.replace(re, variables[key]);
            }
        }
    }
    return string;
};

module.exports = {
    replaceLiterals
};