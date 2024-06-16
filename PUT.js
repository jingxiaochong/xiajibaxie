    let data1 = {
        "identityAuthRequests": [
            {
                "idType": "ID_CARD",
                "idTypeName": "身份证",
                "idNo": userInfo.info.audienceIdentityNumber,
                "name": userInfo.info.audienceName
            }
        ],
        "src": "H5"
    }
    axios.put(`https://${public.urlBase}.caiyicloud.com/cyy_gatewayapi/user/buyer/v3/identities/batch_auth?channelId=&terminalSrc=H5`, data1, {
        "headers": {
            "access-token": userInfo.token,
        }
    }).then((res) => {
    })
