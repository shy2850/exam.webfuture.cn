var qqValidator = function (username) {
    return /^\d{7,10}$/.test(username)
        && !/(\d)(?=\1{3})/.test(username)
        && !/(\d{2})(?=\1{2})/.test(username)
        && !/(\d{3})(?=\1)/.test(username)
        && !/807704186/.test(username)
        && !/01234|12345|23456|34567|45678|56789/.test(username)
        && !/01234|12345|23456|34567|45678|56789/.test(username.split('').reverse().join(''))
};