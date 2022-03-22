"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const validateUser = (options) => {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!options.email.match(regexp)) {
        return [
            {
                field: "email",
                message: "Please enter a valid email.",
            },
        ];
    }
    if (options.username.length <= 3) {
        return [
            {
                field: "username",
                message: "Please make sure username is longer than 3.",
            },
        ];
    }
    if (options.username.includes("@")) {
        return [
            {
                field: "username",
                message: "Cannot include @ symbol.",
            },
        ];
    }
    if (options.password.length <= 3) {
        return [
            {
                field: "password",
                message: "Please make sure password is longer than 3.",
            },
        ];
    }
    return null;
};
exports.validateUser = validateUser;
//# sourceMappingURL=validateUser.js.map