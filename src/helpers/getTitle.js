export const getTitle = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).replace('_', ' ');
}