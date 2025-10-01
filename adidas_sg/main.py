import tls_client
import subprocess
import json


class AdidasClient:
    def __init__(self):
        self.session = tls_client.Session(
            client_identifier="chrome112", random_tls_extension_order=True
        )
        self.home = "https://www.adidas.com.hk/en"
        self.js_url = "https://www.adidas.com.hk/MSY9tw/S-TS41/23jT59/M_GFXHeS/c/Q7Eff0za3zmaawhu1O/Pyd0AQ/bwNOMW/h2HH4"
        self.headers = {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "priority": "u=0, i",
            "sec-ch-ua": '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Linux"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
        }

        self.cookies = {
            "sid": "NgMWeQxhFJ07FC90SEK6No1secpDamKXpbI",
            "GlobalE_Data": "%7B%22countryISO%22%3A%22HK%22%2C%22cultureCode%22%3A%22en-GB%22%2C%22currencyCode%22%3A%22HKD%22%2C%22apiVersion%22%3A%222.1.4%22%7D",
            "dwanonymous_54b7d77662530378cc6b7fe2c6fb6927": "abFNMYHD3qz56SdyrUZuMZaYDh",
            "__cq_dnt": "1",
            "dw_dnt": "1",
            "dwsid": "WACmj-qpIvNjDbAs7oL5P-NvyTylolT5_aueG0MdLe6SicEV6DZ6zOZ7OMUBs9baZc7vSzywHZUsCXSci7HCMw==",
            "geo_country": "HK",
            "channelflow": "nonpaid|other|1761974295001",
            "channeloriginator": "nonpaid",
            "channelcloser": "nonpaid",
            "GlobalE_Full_Redirect": "false",
            "persistentBasketCount": "0",
            "AMCVS_7ADA401053CCF9130A490D4C%40AdobeOrg": "1",
            "ab_cname": "b",
            "_ga": "GA1.1.2103439316.1759382304",
            "s_cc": "true",
            "_fbp": "fb.2.1759382304830.183205126261450056",
            "AMCV_7ADA401053CCF9130A490D4C%40AdobeOrg": "-1124106680%7CMCIDTS%7C20364%7CMCMID%7C81976989474921112864121718239447820528%7CMCAAMLH-1759997404%7C3%7CMCAAMB-1759997404%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1759399804s%7CNONE%7CMCAID%7CNONE%7CMCSYNCSOP%7C411-20371%7CvVersion%7C5.2.0",
            "GlobalE_CT_Data": "%7B%22CUID%22%3A%7B%22id%22%3A%22276111199.189089434.1866%22%2C%22expirationDate%22%3A%22Thu%2C%2002%20Oct%202025%2009%3A11%3A33%20GMT%22%7D%2C%22CHKCUID%22%3Anull%2C%22GA4SID%22%3A713123746%2C%22GA4TS%22%3A1759394493494%2C%22Domain%22%3A%22www.adidas.com.hk%22%7D",
            "_gcl_au": "1.1.639303569.1759395691",
            "s_sq": "ag-adi-global-prod%252Cag-adi-hk-prod%252Cag-adi-em-prod%3D%2526pid%253DSHOPPING%252520CART%25257CEMPTY%252520CART%2526pidt%253D1%2526oid%253DSAVE%2526oidt%253D3%2526ot%253DSUBMIT",
            "_ga_4DGGV4HV95": "GS2.1.s1759392587$o3$g1$t1759395708$j17$l0$h0",
            "bm_lso": "D7C6511DC92A1E7533DF4AC880B6812C05BA2A25276DE869D4DCFF554DDC3A32~YAAQJhQgF84YpKCZAQAAHLgspAXf+3zwalZVTMU8KHv2PLKQTXK14UeEZ2RX/aim2GIdZI/yGYQk8i2Ur2xFjwWTDGKq5hJvIJ+rCMpvOzPuzsIgbE0UXh8unSJXsLPgMyd5m427EVW5JCNBoC/pbZGUER8Qr2Z+u3v1VclassOeieOdUAchRXsYDxxvx62n9Q8V67Lzvp4tE84ma7jFuM/bCSw6Etl6qel3/+BU5bM1eFAsJ1LlYRLcY7gpAR8wF3H+ImH+g2ivPKYRNBRkrRfb3dlkZWyuf8js1t6njp8a5kcCYBV+Xg42+7Z8tUboP4oaJImZIqJ8vqVlHJpI7hM/B3HLniYz4WYDVvP/v5QU1xwKbXr8qyu8bfTqUQq3b3dPXjeZbV60xnrvCR3qLZYxNp6PU/Z+t2MKXqCMERTBzq7eXuyQENZP/r4zUOqD5M5CNLLqcKou+s/w3miDiNup^1759396126710",
            "s_vnc365": "1790936622804%26vn%3D4",
            "s_ivc": "true",
            "AKA_A2": "A",
            "bm_ss": "ab8e18ef4e",
            "utag_main": "v_id:0199a35b51d4000f15839a8d322805065004305d00903$_sn:4$_se:3%3Bexp-session$_ss:0%3Bexp-session$_st:1759403458341%3Bexp-session$ses_id:1759400622661%3Bexp-session$_pn:3%3Bexp-session$_vpn:2%3Bexp-session$vapi_domain:adidas.com.hk$_prevpage:HOME%3Bexp-1759405258468",
            "bm_s": "YAAQENgjF2xCt5+ZAQAAWseCpAQ8M2TotrlVjFyf83n8iBb8t08AlIDPHwxbyHUHfXUqMsSi7270bg+hh6CbpDauE163FSyFU8gRWq13Ho6OB0ctrfLoGXTFhYki+nPrYPVD34oCbaDznw7k2N4VzFZHwCj8nalSY4i0v+arMQyuMQB7iIuTlGzLH9xI2T0z4xHoC9P+dzITjuhmvHTqD3IaLpzB8tEsBnzeU0aaNQfpaSI+WQsBYnrRYfcyscXrSSc56tQ4gXpb2P14WlcpSRwunHKmnfxGjacycPP4NgSLjZ3IjVzu5GCP/13R71AiWvn0WotAOr2udFfWMGPScwqQGG2x2mLb8GH5Q+G+pfWeJpjxr0TpaITIdEjiF2+volD4xgXa2YZmbvtBEHuESxETipiSlFw2rqZS77oiggrx6hgLS9/+OCxkqS3AP9+M9H2J/qTlJqVjFM70wgCJz5/8/Rh85OLY+m3pu7xSOXH7prmoxyXqynFDeFqoGnrnH8Qgg8hHNdJ35zo8tyIP8CYXRt7139AMVSLgec3CRd5c57RRNRAV/4sZNe0l7BzrNS7CyirXspoO0hYm",
            "bm_so": "3F5CB2597C39ED3ABB70E8C831017C9A1A19D5E83B8D748D6A2E56B5A2F097CD~YAAQENgjF21Ct5+ZAQAAWseCpAVU0J/rjxoWIySECNkP+HS4IFFY8uJS4nLitY80QnqJI/SAzlJcItQS5s12VWhR40XEkdFGqwAGIHxkpL69Nv7TZEEK0Xr6bzh7lR2k/awjDrUqxXbD9u3hA5Q4tdLmZpl8hSWAUWDjMjBq+8Nm8yaS8qHpSSLIIOAA/VdI2VP3DytdkCv8IglMVcgWTc9qOmMPjUfDMtouYz5aKYGuSBmCCTJipLDypbCArXIARCf9+c1nZMfVUYFvyUS9kZ6zZ0KBCoCif7k53iqB0qvB58AXLcNuLeXebPMKizDnX36ZVmtrfmw6+89E7QrYJ1HbPBuWllirgSwXyvjS3lSo0DXsrXPu/Xn6+IrqVwEVDfSu+62gbQ7bB3LCybw1FD+LImt1sSrBLnvVNKJ3KdezlabrB0WG6V8vNApFFXCpQbd3tSZKEkGpZeYOJFDf4y/R",
            "bm_sz": "070A9D60BC6E9BF61E4F8161374EED72~YAAQENgjF25Ct5+ZAQAAWseCpB0gTLt8l6jq+7guhgQQ8xmOP+9WTIbK3Oma50vt+Xm3FRuJw5N6l/WoPLEHcmTuc8uiwDjLd8lPWbFASnS5b/Tcl3cEWJkVV+d4SEkWWDkXotxnf0ZO9ta7NWKruK01ur57wiT0GFB4pbXeQPA+hohOfFrVzbvKLOTaKiBZLAijZb55D31ETRbYTqdssactaa6yzyd8CYzEUSUANuegBdCCNZOUr5Bm07XOmNdW0L4bTUHb9gtYFDMHLHmZmKPLVKKh9u+9L+O2nlUHTWmhuQaTgvzZqZthovXrtlLGWN2Z8W0rdg9AaWLuKQ4afDxbIV1AJkprWhwBi+DGZBcQir6y+HbL9Lcu73kgdpitWVooeeeZQU93N7uKKqeF69b8/AWdv7SvVpaBXNYa2K1znLoHg60nLfIk8uRPaB/mQIhknRRsBx1R1f9QqAQMBdbOw0xzM2CBZt9T99lqMa1MhmnLHf/jt954pD4pW/NOd0KP90vGBOO6cdAo44MG0FFwZC536FelnUQpSo/XOr83929GXI57V8JafSqKliEwp/NdPv9eifPnAKv9FnCFz91hPtr0DzzzeSMJjxpeuVXBRiudv5g4fjJ7dooAR0wl936J~3553075~3355714",
            "RT": '"z=1&dm=www.adidas.com.hk&si=5c864a02-b2aa-4a8c-814e-acbb96fc308e&ss=mg97pso0&sl=0&tt=0&bcn=%2F%2F684d0d41.akstat.io%2F&hd=2lrra"',
            "_abck": "D4FDE501D6F45BB53541468D086C3DCD~-1~YAAQENgjF+tCt5+ZAQAALdCCpA5X0/Fk9+DRYnw+IRTHK0TL3Uua6NT3lI5ZG1GIrVKDEQofTBrMrrLTChQwMDgF/9f1bfm75QxdINIzD4UUSEF+Vjm72a1AkxmsuTSzK4Uo31//aFStMyUdUPBpYhreVrU9nqVeY0S4C6XorcaVkurmF3bkZLiuvacPKU5Y67leDdelsH+q1AER0492ZpLUVEl9XhGs7+BwmweCuwu+RZF4UIj4JZ/xMlNTIcoJxxlLEzxf/9qOjDq9zr6MrSaKZRevCkzCqEuGjqq4J/XUK7vWyKY4ubX3APCeoqGu3JGApD0GVZZFLq3wS9ZQpF7QvHNtfLN0dHrXXamN17nOVfwW/DtaLltWA2/SyeOxM/oNN6cp1V5l7T5gZnhsJ/v5s3JHlmm3hs0LEQIHq3cgr2M4tci7e419dT5B5SQ7ZAO04jT+YWigl0KoRPEt4Y3g7Nzfs9suBv+8zmXZxOqdEQw1NcbOMnYizrSvCL8El8LR8wzYrcW0ubg3b5YwOI0UVmhut6d63B2WGt/VrEA9y4Kp/yxFCT5qF1zxqB9RGwkXUjTSv4GaHfG9K3PcCaAN9KvZdLafQCCGdIZNwx4UdJVZHZnwpsCKPg/h~-1~-1~1759385222~AAQAAAAE%2f%2f%2f%2f%2f3i8QJWXBsx00EfqjwuA%2fxxbOeeqYKXW+Np3WNaf7vt%2f1FEalgP0uuhZPopYtuf6PCaP8mT1ZzgdfPtptBoU9jU0nMQVjp0yJpqeaZTyGmB4zLtPHnI4+JsJF41229vfBCP7ZGI%3d~1759382077",
        }

    def generate_sensor_data(self):
        result = subprocess.run(
            [
                "node",
                "-e",
                'console.log(JSON.stringify(require("./adidas_sg/params/main.js").gen_sensor_data()))',
            ],
            capture_output=True,
            text=True,
        )
        output_lines = result.stdout.strip().split("\n")
        last_line = output_lines[-1] if output_lines else ""
        return json.loads(last_line) if last_line else {}

    def home_request(self):
        resp = self.session.get(self.home, headers=self.headers, cookies=self.cookies)
        print(resp.text)

    def get_js_request(self):
        resp = self.session.get(self.js_url, headers=self.headers, cookies=self.cookies)
        # print(resp.text)

    def post_js_request(self, sensor_data):
        resp = self.session.post(
            self.js_url, headers=self.headers, data=json.dumps(sensor_data)
        )
        print(resp.text)


if __name__ == "__main__":
    client = AdidasClient()
    client.home_request()
    client.get_js_request()
    data = client.generate_sensor_data()
    client.post_js_request(data)
