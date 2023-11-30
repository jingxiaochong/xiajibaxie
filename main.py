import requests
import json
import pickle

from datetime import datetime
from urllib.parse import quote

def login():
    # 发送手机号和验证码登录，或从本地读取session
    
    choose_session = input("请选择session\n1.短信验证码登录\n2.读取本地session\n")
    if choose_session == "1":
        # 电话号码
        phone_number = input("请输入手机号登录：")
        # 创建一个会话，用于保持cookie
        session = requests.Session()
        # 设置请求头
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0"
        }
        session.headers.update(headers)
        
        # 发送第一个请求，获取验证码
        login_data = {
            "cellphone": phone_number,
            "messageType": "MOBILE",
            "src": "WEB",
            "token": "",
            "verifyCodeUseType": "USER_LOGIN"
        }

        response = session.post("https://643d105cee39e30001732fdb.caiyicloud.com/cyy_gatewayapi/user/pub/v3/send_verify_code", json=login_data)

        # 打印响应内容
        print(response.text)

        # 在这里等待人工收取验证码并输入
        verify_code = input("请输入收到的验证码：")

        # 发送第二个请求提交验证码，完成登录过程
        login_data = {
            "cellphone": phone_number,
            "src": "WEB",
            "verifyCode": verify_code
        }

        response = session.post("https://643d105cee39e30001732fdb.caiyicloud.com/cyy_gatewayapi/user/pub/v3/login_or_register", json=login_data)

        # 打印响应内容
        print(response.text)
        
        # 获取当前日期和时间
        current_time = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')

        # 保存会话对象到本地文件，包括时间戳
        with open(f"session_{phone_number}_{current_time}.pkl", 'wb') as f:
            pickle.dump(session, f)
        
        return session    
        
    else:
        # 加载本地文件中的session对象
        with open('session.pkl', 'rb') as f:
            session = pickle.load(f)
            
        return session

def addAudience(session):
    # 添加观演人
    
    # 设置请求头
    headers = {
        "Referer": "https://643d105cee39e30001732fdb.caiyicloud.com/reserve/reserve-detail/personinfo"
    }
    session.headers.update(headers)

    # request_data 数据
    request_data = {
        "identityAuthRequests": [
            {
                "idNo": "310102198807023682",
                "idType": "ID_CARD",
                "idTypeName": "身份证",
                "name": "王文静"
            }
        ],
        "src": "WEB"
    }

    # 请求的URL
    url = 'https://643d105cee39e30001732fdb.caiyicloud.com/cyy_gatewayapi/user/buyer/v3/identities/batch_auth'
    
    # 打印会话的请求头
    print("会话的请求头:")
    print(session.headers)

    # 发送第添加观演人请求
    response = session.put(url, json=request_data)

    # 输出添加观演人请求的响应内容
    print("添加观演人请求的响应内容:")
    print(response.text)

def makeReservation(session):
    # 预约取号
    # 需要修改"reservationConfigId"，"reservationDate"，"startTime"，"startTime"
    
    # request_data 数据
    request_data = {
        "reservationConfigId": "643d105cee39e30001732fdb",
        "reservationDate": 1699113600000,
        "startTime": "20:00",
        "startTime": "22:00",
        "showOrderId": "",
        "showSessionId": "",
        "reservationAudienceParams": [
            {
                "audienceCellphone": None,
                "audienceIdentityNumber": "310102198807023682",
                "audienceIdentityType": "ID_CARD",
                "audienceName": "王文静",
                "seatInfo": "",
                "showOrderTicketItemId": ""
            }
        ],
        "src": "WEB"
    }

    # 请求的URL
    url = 'https://643d105cee39e30001732fdb.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders'

    # 发送预约取号请求
    response = session.post(url, json=request_data)

    # 输出预约取号请求的响应内容
    print("预约取号请求的响应内容:")
    print(response.text)

def main():
    # 登录
    session = login()
    print(session)
    # 添加观演人
    addAudience(session)
    # 预约取号
    makeReservation(session)
    
    
if __name__ == "__main__":
    main()