
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email.trim());
};

export const validateLogin = (email, password) => {
    if (!email.trim() || !password) {
        return "Please enter your email and password.";
    }

    if (!validateEmail(email)) {
        return "Please enter a valid email address.";
    }

    return null;
};

export const validateSignUp = ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword
}) => {
    if (!firstName.trim() || !lastName.trim()) {
        return "Please enter your first and last name.";
    }

    if (!email.trim()) {
        return "Please enter your email address.";
    }

    if (!validateEmail(email)) {
        return "Please enter a valid email address.";
    }

    if (!password) {
        return "Please enter a password.";
    }

    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }

    if (password !== confirmPassword) {
        return "Passwords do not match.";
    }

    return null;
};
