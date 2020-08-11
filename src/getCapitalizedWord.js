function getCapitalizedWord(words) {
    return words
        .replace('-', ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export default getCapitalizedWord