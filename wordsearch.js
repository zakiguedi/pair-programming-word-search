const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    let result = [];
    for (let i = 0; i < letters[0].length; i++) {
        const row = [];
        for (let j = 0; j < letters.length; j++) {
            row.push(letters[j][i]);
        }
        result.push(row);
        let finalName = result.join('').replaceAll(',', '')
        if (finalName.includes(word)) {
            return true;
        } else {
            result = []
        }
    }
    return false;
}

module.exports = wordSearch