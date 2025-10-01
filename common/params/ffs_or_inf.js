
function calculateAsciiSum(inputString) {
    if (inputString == null) return -1;
    try {
        let sum = 0;
        for (let i = 0;i < inputString.length;i++) {
            const charCode = inputString.charCodeAt(i);
            if (charCode < 128) {
                sum += charCode;
            }
        }
        return sum;
    } catch (error) {
        return -2;
    }
}

function classifyInputType(inputType) {
    if (!inputType) return -1;

    const textInputTypes = ['text', 'search', 'url', 'email', 'tel', 'number'];
    inputType = inputType.toLowerCase();

    if (textInputTypes.includes(inputType)) {
        return 0;  // 文本类型
    } else if (inputType === 'password') {
        return 1;  // 密码类型
    } else {
        return 2;  // 其他类型
    }
}

module.exports = function generateFFS_OR_INF() {
    let result = "";

    for (let i = 0;i < inputsData.length;i++) {
        const input = inputsData[i];

        const nameAscii = calculateAsciiSum(input.name);
        const idAscii = calculateAsciiSum(input.id);
        const isRequired = input.required ? 1 : 0;

        const inputType = classifyInputType(input.type);

        let autoCompleteStatus = -1;
        if (input.autocomplete !== null && input.autocomplete !== undefined) {
            const autoCompleteValue = input.autocomplete.toLowerCase();
            if (autoCompleteValue === 'off') {
                autoCompleteStatus = 0;
            } else if (autoCompleteValue === 'on') {
                autoCompleteStatus = 1;
            } else {
                autoCompleteStatus = 2;
            }
        }

        const defaultValue = input.defaultValue || "";
        const currentValue = input.value || "";

        let hasDefaultValue = 0;
        let hasCurrentValue = 0;

        if (defaultValue && defaultValue.length !== 0) {
            hasDefaultValue = 1;
        }

        if (currentValue && currentValue.length !== 0 &&
            (hasDefaultValue === 1 || currentValue !== defaultValue)) {
            hasCurrentValue = 1;
        }

        if (inputType !== 2) {
            result += inputType + ',' +
                autoCompleteStatus + ',' +
                hasCurrentValue + ',' +
                isRequired + ',' +
                idAscii + ',' +
                nameAscii + ',' +
                hasDefaultValue + ';';
        }
    }

    return result;
}

inputsData = [
    {
        "name": "languageswitchradio",
        "id": null,
        "type": "radio",
        "required": false,
        "autocomplete": null,
        "defaultValue": "en_HK",
        "value": "en_HK"
    },
    {
        "name": "languageswitchradio",
        "id": null,
        "type": "radio",
        "required": false,
        "autocomplete": null,
        "defaultValue": "zh_HK",
        "value": "zh_HK"
    },
    {
        "name": "q",
        "id": null,
        "type": "search",
        "required": false,
        "autocomplete": "off",
        "defaultValue": "",
        "value": ""
    },
    {
        "name": "lang",
        "id": null,
        "type": "hidden",
        "required": false,
        "autocomplete": null,
        "defaultValue": "en_HK",
        "value": "en_HK"
    },
    {
        "name": "q",
        "id": null,
        "type": "search",
        "required": false,
        "autocomplete": "off",
        "defaultValue": "",
        "value": ""
    },
    {
        "name": "lang",
        "id": null,
        "type": "hidden",
        "required": false,
        "autocomplete": null,
        "defaultValue": "en_HK",
        "value": "en_HK"
    },
    {
        "name": null,
        "id": null,
        "type": "hidden",
        "required": false,
        "autocomplete": null,
        "defaultValue": "",
        "value": ""
    },
    {
        "name": null,
        "id": null,
        "type": "hidden",
        "required": false,
        "autocomplete": null,
        "defaultValue": "",
        "value": ""
    },
    {
        "name": null,
        "id": null,
        "type": "hidden",
        "required": false,
        "autocomplete": null,
        "defaultValue": "",
        "value": ""
    },
    {
        "name": null,
        "id": null,
        "type": "hidden",
        "required": false,
        "autocomplete": null,
        "defaultValue": "",
        "value": ""
    },
    {
        "name": null,
        "id": null,
        "type": "hidden",
        "required": false,
        "autocomplete": null,
        "defaultValue": "",
        "value": ""
    },
    {
        "name": "languageswitchradio",
        "id": null,
        "type": "radio",
        "required": false,
        "autocomplete": null,
        "defaultValue": "en_HK",
        "value": "en_HK"
    },
    {
        "name": "languageswitchradio",
        "id": null,
        "type": "radio",
        "required": false,
        "autocomplete": null,
        "defaultValue": "zh_HK",
        "value": "zh_HK"
    }
]