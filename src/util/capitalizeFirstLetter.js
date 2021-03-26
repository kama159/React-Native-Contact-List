/*
    recebe uma string e deixa a primeira letra maiuscula.
    exemplo: felipe => Felipe
*/
const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1);
}

export default capitalizeFirstLetter;