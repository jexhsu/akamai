// logpoint
// param dvc (JSVMP)
(() => {
    const opIndex = this[b4][fV.q];
    const opCode = this[d][opIndex];
    const filterIndex = [1751, 1770];

    // Filter specific opcodes if needed
    // if (!filterIndex.includes(opIndex)) return;

    const rawResult = this[145];
    if (rawResult == null) return;

    const curResult = JSON.stringify(rawResult);

    if (/^(?:\[?(?:null|{}|"")?\]?)$/.test(curResult.replace(/[\[\]]/g, ''))) return;

    if (curResult !== window.lastResult) {
        const opIndexStr = String(opIndex).padStart(3, '0');
        const opCodeStr = String(opCode).padStart(3, '0');
        console.log(`opIndex is ${opIndexStr}, opCode is ${opCodeStr}, result is ${curResult}`);
        window.lastResult = curResult;
    }
})()

// params ffs (arguments)
copy(JSON.stringify(Array.from(document.getElementsByTagName("input")).map(input => ({
    name: input.getAttribute('name'),
    id: input.getAttribute('id'),
    type: input.getAttribute('type'),
    required: input.hasAttribute('required'),
    autocomplete: input.getAttribute('autocomplete'),
    defaultValue: input.defaultValue,
    value: input.value
})), null, 2));


// random hook
(function () {
    'use strict';

    const fixedValue = 0.5;
    const fixedTimestamp = 1700000000000;

    // Prevent re-execution
    if (window._RANDOM_HOOKED) return;
    window._RANDOM_HOOKED = true;

    // Save original functions
    const _originalRandom = Math.random;
    const _originalNow = Date.now;
    const _originalGetTime = Date.prototype.getTime;
    const _originalGetMilliseconds = Date.prototype.getMilliseconds;
    const _originalGetSeconds = Date.prototype.getSeconds;
    const _originalCryptoGetRandomValues = crypto.getRandomValues;
    const _originalPerformanceNow = performance.now;
    const _originalToString = Function.prototype.toString;

    // 1. Hook Math.random
    Object.defineProperty(Math, 'random', {
        get: function () {
            return function () {
                return fixedValue;
            };
        },
        set: function (value) {
            return false;
        },
        configurable: false,
        enumerable: false
    });

    // 2. Hook Date.now()
    Object.defineProperty(Date, 'now', {
        get: function () {
            return function () {
                return fixedTimestamp;
            };
        },
        set: function (value) {
            return false;
        },
        configurable: false,
        enumerable: false
    });

    // 3. Hook Date.prototype.getTime
    Object.defineProperty(Date.prototype, 'getTime', {
        value: function () {
            return fixedTimestamp;
        },
        configurable: false,
        enumerable: false,
        writable: false
    });

    // 4. Hook Date.prototype.getMilliseconds
    Object.defineProperty(Date.prototype, 'getMilliseconds', {
        value: function () {
            return 500; // Fixed milliseconds
        },
        configurable: false,
        enumerable: false,
        writable: false
    });

    // 5. Hook Date.prototype.getSeconds
    Object.defineProperty(Date.prototype, 'getSeconds', {
        value: function () {
            return 30; // Fixed seconds
        },
        configurable: false,
        enumerable: false,
        writable: false
    });

    // 6. Hook crypto.getRandomValues
    if (window.crypto && crypto.getRandomValues) {
        Object.defineProperty(crypto, 'getRandomValues', {
            value: function (array) {
                // Fill array with fixed values
                for (let i = 0;i < array.length;i++) {
                    if (array instanceof Uint8Array || array instanceof Int8Array) {
                        array[i] = 127;
                    } else if (array instanceof Uint16Array || array instanceof Int16Array) {
                        array[i] = 32767;
                    } else if (array instanceof Uint32Array || array instanceof Int32Array) {
                        array[i] = 2147483647;
                    }
                }
                return array;
            },
            configurable: false,
            enumerable: false,
            writable: false
        });
    }

    // 7. Hook performance.now()
    if (window.performance) {
        Object.defineProperty(performance, 'now', {
            get: function () {
                return function () {
                    return fixedTimestamp;
                };
            },
            set: function (value) {
                return false;
            },
            configurable: false,
            enumerable: false
        });
    }

    // 8. Hook Math floor/ceil/round with fixed patterns
    const _originalFloor = Math.floor;
    const _originalCeil = Math.ceil;
    const _originalRound = Math.round;

    Math.floor = function (x) {
        const result = _originalFloor.call(this, x);
        // Add fixed pattern if it's a random-based calculation
        return result;
    };

    // 9. Hook new Date() constructor
    const _originalDate = window.Date;
    window.Date = function (...args) {
        if (args.length === 0) {
            // new Date() - return fixed date
            return new _originalDate(fixedTimestamp);
        }
        return new _originalDate(...args);
    };

    // Copy Date properties
    Object.setPrototypeOf(window.Date, _originalDate);
    for (const prop in _originalDate) {
        if (_originalDate.hasOwnProperty(prop)) {
            window.Date[prop] = _originalDate[prop];
        }
    }

    // 10. Hook Function.prototype.toString to hide all traces
    Function.prototype.toString = function () {
        const funcName = this.name || '';
        const nativeFunctions = [
            'random', 'now', 'getTime', 'getMilliseconds',
            'getSeconds', 'getRandomValues', 'floor', 'ceil', 'round'
        ];

        if (nativeFunctions.some(name => funcName.includes(name))) {
            return `function ${funcName}() { [native code] }`;
        }
        return _originalToString.call(this);
    };

    // 11. Hook requestAnimationFrame for timing attacks
    const _originalRAF = window.requestAnimationFrame;
    const _originalCAF = window.cancelAnimationFrame;

    window.requestAnimationFrame = function (callback) {
        // Execute immediately with fixed timestamp
        callback(fixedTimestamp);
        return 1;
    };

    window.cancelAnimationFrame = function () {
        return;
    };

    // 12. Hook setInterval/setTimeout for timing
    const _originalSetInterval = window.setInterval;
    const _originalSetTimeout = window.setTimeout;

    window.setInterval = function (callback, delay) {
        // Ignore delay, execute with fixed timing
        return _originalSetInterval.call(this, callback, 1000);
    };

    window.setTimeout = function (callback, delay) {
        // Execute immediately
        return _originalSetTimeout.call(this, callback, 0);
    };

    console.log('All random/timing functions hooked');
})();