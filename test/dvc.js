const generateDVC = require("../common/params/dvc")

const arg = [-59453960860, '717,361,63,1,123215|63|63,1,123215,717,361', 19, -1129601766859]

const timestamp = 1759453960860;
const userAgent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";
const extraVar = "c+i+j+e+h+d+l+g+a+k+"

console.log(
    generateDVC(arg[0], arg[1], arg[2], arg[3], timestamp, userAgent, extraVar)
);



//  charMap: "a3cd9efghiYjklm7opqrs1uvwQxyBz2",

// arg is : [5270511, '736,24,9,1,109082|9|9,1,109082,736,24', 30, 307970372]
// ! wrong: ["a","d","f","i","k","l","m","7","q","s","1","u","v","w","Q","y","B","2"]
// ! wrong: iad7lsimqlkqfiiQvy27f
// ? right: 10000000000001110010101111001011    
// ? right: ["a","d","f","i","k","l","m","7","q","s","1","u","v","w","Q","y","B"]
// ? right: iad7lsimqlkqfiiQvy27f

// arg is : [3875558, '426,206,40,1,427332|40|40,1,427332,426,206', 22, 120652967]
// ! wrong: ["a","d","f","i","k","l","m","7","p","q","r","s","1","u","v","w","Q","x","y","2"]
// ! wrong: ffd7lqim7dlifpaafk1qw
// ? right: 10000010000001100111111101110
// ? right: ["a","d","f","i","k","l","m","7","p","q","r","s","1","u","v","w","Q","x","y","z"]
// ? right: ffd7lqim7dlifpaly2yka

// arg is : [109201, '731,24,11,1,109102|11|11,1,109102,731,24', 2, 2412689]
// ! wrong: ["a","c","d","f","i","j","k","7","o","q","s","1","w","x","y","z"]
// ! wrong: dc7jqfkffokqdfwjk2af
// ? right: 10110010010110011000100010100
// ? right: ["a","c","d","f","i","j","k","7","o","q","s","1","w","x","y","z"]
// ? right: dc7jqfkffokqdfs2ao2y

// arg is : [2073888, '400,206,30,1,427219|30|30,1,427219,400,206', 15, 64819798]
// ! wrong: ["a","c","d","e","f","h","i","k","m","7","p","q","r","s","1","v","w","x","y","B","2"]
// ! wrong: chckh7eihehcicahxyd2e
// ? right: 1010010010000011011110011010100
// ? right: ["a","c","d","e","f","h","i","k","m","7","p","q","r","s","1","v","w","x","y","B"]
// ? right: chckh7eihehcicahxyd2e

// arg is : [7166554, '598,339,81,1,427804|81|81,1,427804,598,339', 42, 609044780]
// ! wrong: ["a","3","d","e","f","i","Y","k","l","m","7","p","q","r","s","1","w","Q","x","y","2"]
// ! wrong: fd3kimekafffdkYirxy1d
// ? right: 11010110011001110111100001100010
// ? right: ["a","3","d","e","f","i","Y","k","l","m","7","p","q","r","s","1","w","Q","x","y","2"]
// ? right: fd3kimekafffdkYirxy1d




