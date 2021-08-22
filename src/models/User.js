let bcrypt = require('bcryptjs');

export class User {
    constructor(username, email, password) {
        this._username = username;
        this._email = email;
        this._password = password;
    }

    static encryptPassword(password) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    }

    static comparePassword(passwordDb, passwordReceived) {
        return bcrypt.compare(passwordDb, passwordReceived);
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
}
