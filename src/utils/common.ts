export const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}