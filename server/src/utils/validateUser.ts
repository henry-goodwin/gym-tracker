import { UsernamePasswordInput } from "src/resolvers/UsernamePasswordInput";

export const validateUser = (options: UsernamePasswordInput) => {
  let regExMail = new RegExp('@"^([w.-]+)@([w-]+)((.(w){2,3})+)$"');

  if (!regExMail.test(options.email)) {
    return;
    [
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

  if (regExMail.test(options.username)) {
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
