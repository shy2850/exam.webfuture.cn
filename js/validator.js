var qqValidator = function (name) {
    return 
            /^\d{7,10}$/.test(username)
        && !/(\d)(?=\1{3})|(\d{3}){2,}/.test(username)
};