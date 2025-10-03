const generateAJR = require("../common/params/ajr")
const timestamp = require("../common/params/timestamp")
const generateDVC = require("../common/params/dvc")
const { jsrf1, jsrf2 } = require("../common/params/jsrf");
const gen_sensor_data = require("../common/params/main");
function original_sensor_data() {
    const { hal, delt, ssts, startTs, startDate } = timestamp()
    const ajr = generateAJR()
    const ran = Math.random().toFixed(12)
    const ua = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"
    const devl = 143, dmvl = 142, tovl = 285, ajt = "10,1";
    const extraVars = "a+h+g+c+f+d+e+l+i+k+b+j+";
    return {
        "ver": "73mP2Os9pBu2lQ/fejfdx0NGjuM8H3UfNs+RbcDxeA0=",
        "fpt": ";-1;dis;,7;true;true;true;-480;true;24;24;true;false;-1",
        "fpc": "4542",
        "ajr": ajr,// !
        "din": [
            {
                "ash": 846
            },
            {
                "ran": ran// !
            },
            {
                "xag": 12147
            },
            {
                "nal": "en-US"
            },
            {
                "adp": "cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1"
            },
            {
                "wih": 788
            },
            {
                "npl": 5
            },
            {
                "wiw": 1405
            },
            {
                "hal": hal// !
            },
            {
                "wdr": 0
            },
            {
                "pha": 0
            },
            {
                "nap": "Gecko"
            },
            {
                "nps": "20030107"
            },
            {
                "she": 878
            },
            {
                "dau": 0
            },
            {
                "ucs": "7390"
            },
            {
                "wow": 1405
            },
            {
                "ibr": 0
            },
            {
                "asw": 1405
            },
            {
                "ua": ua
            },
            {
                "tsd": 0
            },
            {
                "hz1": 432891
            },
            {
                "swi": 1405
            }
        ],
        "eem": "do_en,dm_en,t_en",
        "ffs": "0,0,0,0,-1,113,0;0,0,0,0,-1,113,0;",// !
        "vev": "",
        "inf": "0,0,0,0,-1,113,0;0,0,0,0,-1,113,0;",
        "ajt": "0,0",// !
        "kev": "",
        "dme": "",// !
        "mev": "",
        "doe": "",// !
        "pur": "https://www.adidas.com.hk/en/search?q=man&search-button=&lang=en_HK",
        "pev": "",
        "mst": [
            {
                "kevl": 1
            },
            {
                "mevl": 32
            },
            {
                "tevl": 32
            },
            {
                "devl": devl// !
            },
            {
                "dmvl": dmvl// !
            },
            {
                "pevl": 0
            },
            {
                "tovl": tovl// !
            },
            {
                "delt": delt// !
            },
            {
                "it": 0
            },
            {
                "sts": startTs// !
            },
            {
                "fct": 1
            },
            {
                "dd2": 18821
            },
            {
                "kc": 0
            },
            {
                "mc": 0
            },
            {
                "ww8": 0// !
            },
            {
                "pc": 0
            },
            {
                "tc": 0
            },
            {
                "ssts": ssts// !
            },
            {
                "tst": 0// !
            },
            {
                "rval": "-1"
            },
            {
                "rcfp": "-1"
            },
            {
                "nfas": 30261689
            },
            {
                "jsrf": "PiZtE"
            },
            {
                "jsrf1": jsrf1(startTs)// !
            },
            {
                "jsrf2": jsrf2(startTs)// !
            },
            {
                "signals": "0"
            },
            {
                "mwd": "0"
            },
            {
                "hea": ""
            },
            {

                "dvc": generateDVC(delt, ajr, ajt.split(",")[1], tovl, startTs, ua, extraVars)// !
            },
            {
                "srd": "0"
            }
        ],
        "o9": 0,
        "tev": "",
        "sde": "0,0,0,0,1,0,0",
        "pmo": "",
        "dpw": "",
        "pac": "",
        "per": "8",// !
        "pde": "",
        "oev": "",
        "if": "",
        "sww": {
            "s024": 0,
            "s025": startDate,// !
            "s026": startDate,// !
            "s027": null,
            "s028": null,
            "s029": "Asia/Shanghai",
            "s030": "Asia/Shanghai",
            "s031": "en-US",
            "s032": "en-US",
            "s033": [
                "en-US"
            ],
            "s034": [
                "en-US"
            ],
            "s035": 8,
            "s036": 8,
            "s037": 16,
            "s038": 16,
            "s039": [
                "4g",
                0,
                "null"
            ],
            "s040": [
                "4g",
                0,
                "null"
            ],
            "s041": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
            "s042": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
            "s043": "5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
            "s044": "5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
            "s045": "Linux x86_64",
            "s046": "Linux x86_64",
            "s047": [
                {
                    "brand": "Chromium",
                    "version": "140"
                },
                {
                    "brand": "Not=A?Brand",
                    "version": "24"
                },
                {
                    "brand": "Google Chrome",
                    "version": "140"
                }
            ],
            "s048": [
                {
                    "brand": "Chromium",
                    "version": "140"
                },
                {
                    "brand": "Not=A?Brand",
                    "version": "24"
                },
                {
                    "brand": "Google Chrome",
                    "version": "140"
                }
            ],
            "s049": false,
            "s050": false,
            "s051": "x86",
            "s052": "x86",
            "s053": "64",
            "s054": "64",
            "s055": "",
            "s056": "",
            "s057": "Linux",
            "s058": "Linux",
            "s059": "6.14.0",
            "s060": "6.14.0",
            "s061": "140.0.7339.207",
            "s062": "140.0.7339.207",
            "s063": false,
            "s064": false,
            "s065": [
                {
                    "brand": "Chromium",
                    "version": "140.0.7339.207"
                },
                {
                    "brand": "Not=A?Brand",
                    "version": "24.0.0.0"
                },
                {
                    "brand": "Google Chrome",
                    "version": "140.0.7339.207"
                }
            ],
            "s066": [
                {
                    "brand": "Chromium",
                    "version": "140.0.7339.207"
                },
                {
                    "brand": "Not=A?Brand",
                    "version": "24.0.0.0"
                },
                {
                    "brand": "Google Chrome",
                    "version": "140.0.7339.207"
                }
            ],
            "s067": "Google Inc. (Google)",
            "s068": "Google Inc. (Google)",
            "s069": "ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)",
            "s070": "ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)",
            "s071": "Google Inc. (Google)",
            "s072": "Google Inc. (Google)",
            "s073": "ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)",
            "s074": "ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)"
        },
        "fwd": [
            {
                "fmh": ""
            },
            {
                "fmz": ""
            },
            {
                "ssh": "0"
            }
        ]
    }
}

bm_sz = "1925B5ED4DF343F728196B2ADF559F21~YAAQb/axdTV1QZSZAQAAZAcnqB0nn9l1zIF7Kx5xAOn6ak421f0JEHKEnCXJJ5m81ASMMj4eFF1KU+PzmcMntaGBDxok6oHcq4UI2f354n2pW2gCZLAHKXTMpmearskYWfc+GL+X/SERwna871L0SR1H8Vz+flMm+2zi9BJ3dFs8fYbF3FNLuZJw+a4jVtfXWGHEzDBVcjhJEpFkDkEk0N6WaJkeuRPeaFVnkXCKp3gF3RN0PhizInO7bkv3/9AGb+iUw3d+PHs+V2SFTyW3DcyF3HMXMrFyt6AVwAw+CdRZICNYwq8aGSVRNp1NFpF+lSXjCgKoYj8CpriRyqnV9EY+u+szsaYsnxKaru86YuWhgZCh2k0sEV/NLvAOTtn3qYax+vB/JBfePlzJ0Y0tGLpSP2aK5/4jG4M+y4IBa7dc~4605251~3622453"

module.exports = () => gen_sensor_data(__dirname, bm_sz, original_sensor_data)