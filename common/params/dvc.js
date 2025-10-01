module.exports = function generateDVC(deltValue, ajrValue, ajtPart2, tovlValue, startTs, USER_AGENT = null, extraVars) {
    USER_AGENT ||= "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6832.57 Safari/537.36";
    const CONSTANTS = {
        CHAR_MAP: "a3cd9efghiYjklm7opqrs1uvwQxyBz2",
        HASH_SEED: 5381,
        HASH_MULTIPLIER: 33
    };

    const djb2Hash = (str, seed = CONSTANTS.HASH_SEED) => {
        let hash = seed;
        for (let i = 0;i < str.length;i++) {
            hash = ((hash * CONSTANTS.HASH_MULTIPLIER) ^ str.charCodeAt(i)) >>> 0;
        }
        return hash;
    };

    const generateHash = (startTs, tovlValue, subIdx) => {
        const uaSuffix = USER_AGENT.slice(-32);
        const prefix = tovlValue + startTs.toString();
        return djb2Hash(prefix + uaSuffix + subIdx);
    };

    const generateCharTable = (binaryString, charMap) => {
        const specialKeepIndexes = new Set([0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);

        binaryString = binaryString.padEnd(30, '1');

        return charMap.split('').filter((_, i) =>
            binaryString[i] === '1' || specialKeepIndexes.has(i)
        );
    };

    const convertDigits = (table, digitStr) => {
        return digitStr.split('').map(digit =>
            table[parseInt(digit)] || ''
        ).join('');
    };

    const encodeCharacters = (table, binaryStr) => {
        return Array.from({ length: 6 }, (_, i) => {
            const charCode = table[i].charCodeAt(0);
            const controlBit = Number(binaryStr[i]);

            const transform1 = (charCode + 2) ^ (controlBit ? 7 : 0);
            const transform2 = (charCode << (controlBit ? 3 : 0)) - charCode;
            const transform3 = (charCode << 5) | (controlBit ? charCode >> 1 : charCode);

            const combinedTransform = Math.abs(transform2 * transform3 - transform1) % table.length;
            return table[combinedTransform];
        }).join('');
    };

    const DIGIT_STRING = ajtPart2 + (startTs + deltValue).toString();
    const hash1 = generateHash(startTs, tovlValue, ajtPart2);
    const hash2 = djb2Hash(deltValue + ajrValue + ajtPart2.toString());

    const binary1 = hash1.toString(2);
    const binary2 = (hash1 + hash2).toString(2);

    const charTable = generateCharTable(binary1, CONSTANTS.CHAR_MAP);
    const digitPart = convertDigits(charTable, DIGIT_STRING);
    const encodedPart = encodeCharacters(charTable, binary2);

    return `${digitPart}${encodedPart},${Math.floor(Math.random() * 11) + 10},${extraVars}`;
}
