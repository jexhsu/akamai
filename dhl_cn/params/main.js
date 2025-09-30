const generateAJR = require("./ajr")
const timestamp = require("./timestamp")
const generateDVC = require("./dvc")
const { jsrf1, jsrf2 } = require("./jsrf");
const helper = require("akamai-v3-sensor-data-helper");
function original_sensor_data(tacking_id) {
    const { hal, delt, ssts, startTs } = timestamp()
    const ajr = generateAJR()
    const ua = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"
    const devl = 143, dmvl = 142, tovl = 285, ajt = "10,1";
    return {
        "ver": "7yWwTvQOeLrfiho8fZYWXb8c2mBaJ/NNfivJ+m0aXa0=",
        "fpt": ";-1;dis;,7;true;true;true;-480;true;24;24;true;false;-1",
        "fpc": "4542",
        "ajr": ajr,// !done
        "din": [
            {
                "she": 878
            },
            {
                "adp": "cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1"
            },
            {
                "ua": ua
            },
            {
                "wow": 1405
            },
            {
                "ran": Math.random().toFixed(12)// !done
            },
            {
                "asw": 1405
            },
            {
                "hz1": 432859
            },
            {
                "wih": 788
            },
            {
                "wiw": 1405
            },
            {
                "xag": 12147
            },
            {
                "ucs": "7390"
            },
            {
                "ibr": 0
            },
            {
                "pha": 0
            },
            {
                "nal": "en-US"
            },
            {
                "nps": "20030107"
            },
            {
                "swi": 1405
            },
            {
                "tsd": 0
            },
            {
                "wdr": 0
            },
            {
                "dau": 0
            },
            {
                "ash": 853
            },
            {
                "npl": 5
            },
            {
                "hal": hal// !done
            },
            {
                "nap": "Gecko"
            }
        ],
        "eem": "do_en,dm_en,t_en",
        "ffs": "0,0,0,0,5014,113,0;0,0,0,0,4885,113,0;0,0,0,0,5029,113,0;0,0,0,0,4815,113,0;",
        "vev": "",
        "inf": "0,0,0,0,5014,113,0;0,0,0,0,4885,113,0;0,0,0,0,5029,113,0;0,0,0,0,4815,113,0;",
        "ajt": ajt,
        "kev": "",
        "dme": "0,142,-1,-1,-1,-1,-1,-1,-1,-1,-1;",// todo
        "mev": "",
        "doe": "0,143,-1,-1,-1;",// todo
        "pur": `https://www.dhl.com/cn-zh/home/tracking.html?submit=1&tacking-id=${tacking_id}`,
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
                "devl": devl// todo
            },
            {
                "dmvl": dmvl// todo
            },
            {
                "pevl": 0
            },
            {
                "tovl": tovl// todo
            },
            {
                "delt": delt// !done
            },
            {
                "it": 0
            },
            {
                "sts": startTs// !done
            },
            {
                "fct": 0// todo
            },
            {
                "dd2": 18819
            },
            {
                "kc": 0
            },
            {
                "mc": 0
            },
            {
                "ww8": 3136
            },
            {
                "pc": 0
            },
            {
                "tc": 0
            },
            {
                "ssts": ssts// !done
            },
            {
                "tst": 285
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
                "jsrf1": jsrf1(startTs)// todo
            },
            {
                "jsrf2": jsrf2(startTs)// todo
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
                "dvc": generateDVC(delt, ajr, ajt.split(",")[1], tovl, startTs, ua)// !done
            },
            {
                "srd": "0"
            },
            {
                "tid": ""
            }
        ],
        "o9": 0,
        "tev": "",
        "sde": "0,0,0,0,1,0,0",
        "per": "99999944949322244999",
        "dsi": [
            {
                "get": ""
            },
            {
                "set": "0"
            },
            {
                "ico": "070f409b82df3bdd2f51a6415c7895353c153c47fe6dd8a0f87f3d14c46ccb2b"
            },
            {
                "ift": "3"
            },
            {
                "xof": "16,5,1,1,8"
            },
            {
                "xot": "16,5,1,1,8"
            },
            {
                "wev": "Google Inc. (Google);wev;Google Inc. (Google)"
            },
            {
                "wre": "Google Inc. (Google);wre;Google Inc. (Google)"
            },
            {
                "wdr": "0"
            },
            {
                "iks": ""
            },
            {
                "lds": "1"
            },
            {
                "sst": ""
            }
        ],
        "wsl": "4294705152,197799466,167941378,-1,19,1,1,1,0,1,,,,,,,,,1,1",// todo
        "hls": "-1,,,1,",
        "pde": "",
        "oev": "",
        "if": "",
        "pus": 0,
        "ffl": "icEOSmLJLh4kwcYVfu",
        "s017": "0,0,0,0",
        "s148": "3565",// todo
        "s151": "4550",// todo
        "s153": "848",// todo
        "s003": "0",
        "s002": "00",
        "fwd": [
            {
                "fmh": ""
            },
            {
                "fmz": "2.1875"
            },
            {
                "ssh": "5c8cf8750d5aa2cdfdd0d627e7e37b97006b59327cf682ce743d825eda183ed2"
            }
        ]
    }
}

module.exports = function gen_sensor_data(bm_sz, exec_js_code, id) {
    const cookieHash = helper.extractCookieHash(bm_sz);

    const result = helper.encrypt(original_sensor_data(id), cookieHash, exec_js_code);

    return result.success === true ? result.data.sensor_data : result
}

