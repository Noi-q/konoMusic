import {HTTP_REQUEST_URL,HTTP_REQUEST_HEADER} from '../config/api'

/**
 * 请求参数类型
 * @param String url
 * @param String method
 * @param Object data
 */

function request(url,method,data){
	uni.showLoading({
		title:'加载中...'
	})
	return new Promise((resolve,reject) =>{
		uni.request({
			url:HTTP_REQUEST_URL + url,
			method: method || 'GET',
			data:data || {},
			header:HTTP_REQUEST_HEADER || {},
			success: (res) => {
				resolve(res)
				if(res.statusCode !== 200){
					console.log("请求失败")
				}else{
					console.log('接口:',url,'\n成功:',res)
				}
			},
			fail: (err) => {
				reject(err)
				console.error('接口:',url,'\n失败:',err)
			},
			complete: () => {
				uni.hideLoading()
			}
		})
	})
}
const http = {}
const httpList = ['options', 'get', 'post', 'put', 'head', 'delete', 'trace', 'connect']
httpList.forEach((method)=>{
	http[method] = (api, data, opt) => request(api, method, data, opt || {})
})
export default http