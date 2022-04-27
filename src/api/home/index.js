import request from "@/utils/request";

/**
 * 统一一下请求方式
 * @param url
 * @returns {AxiosPromise}
 */
function getRequest(url,params){

    return request({
        url: url,
        method: 'get',
        params:params
    })
}

function postRequest(url,params){
    return request({
        url: url,
        method: 'post',
        params:params
    })
}

export default {
    getRequest,
    postRequest
}
