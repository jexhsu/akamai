module.exports = function generateDVC(deltaValue, ajrValue, ajtPart2, tovlValue, startTs, USER_AGENT = null) {
    USER_AGENT ||= "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6832.57 Safari/537.36";
    const CONSTANTS = {
        CHAR_MAP: "a3cd9efghiYjklm7opqrs1uvwQxyBz2",
        HASH_SEED: 5381,
        HASH_MULTIPLIER: 33
    };

    // DJB2哈希算法
    const djb2Hash = (str, seed = CONSTANTS.HASH_SEED) => {
        let hash = seed;
        for (let i = 0;i < str.length;i++) {
            hash = ((hash * CONSTANTS.HASH_MULTIPLIER) ^ str.charCodeAt(i)) >>> 0;
        }
        return hash;
    };

    // 生成第一个哈希值
    const generateHash = (startTs, tovlValue, subIdx) => {
        const uaSuffix = USER_AGENT.slice(-32);
        const prefix = tovlValue + startTs.toString();
        return djb2Hash(prefix + uaSuffix + subIdx);
    };

    // 生成字符表（保留所有1和特殊索引的字符）
    const generateCharTable = (binaryString, charMap) => {
        const specialKeepIndexes = new Set([0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
        return charMap.split('').filter((_, i) =>
            i < binaryString.length && (binaryString[i] === '1' || specialKeepIndexes.has(i))
        );
    };

    // 数字转换：将数字字符串映射到字符表
    const convertDigits = (table, digitStr) => {
        return digitStr.split('').map(digit =>
            table[parseInt(digit)] || ''
        ).join('');
    };

    // 字符编码：基于二进制位进行复杂变换
    const encodeCharacters = (table, binaryStr) => {
        // console.log(binaryStr)   
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

    // 主流程
    const DIGIT_STRING = ajtPart2 + (startTs + deltaValue).toString();
    // console.log("digit_string", DIGIT_STRING)

    const hash1 = generateHash(startTs, tovlValue, ajtPart2);
    // console.log("hash1: ", hash1)
    const hash2 = djb2Hash(deltaValue + ajrValue + ajtPart2.toString());
    // console.log("hash2: ", hash2)

    const binary1 = hash1.toString(2);
    // console.log("binary1", binary1)
    const binary2 = (hash1 + hash2).toString(2);
    // console.log("binary2", binary2)

    const charTable = generateCharTable(binary1, CONSTANTS.CHAR_MAP);
    // console.log(JSON.stringify(charTable))
    const digitPart = convertDigits(charTable, DIGIT_STRING);
    const encodedPart = encodeCharacters(charTable, binary2);

    return `${digitPart}${encodedPart},${Math.floor(Math.random() * 11) + 10},c+i+j+e+h+d+l+g+a+k+`;
}
