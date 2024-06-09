const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const validateEmail = new RegExp(regex);

export { validateEmail }