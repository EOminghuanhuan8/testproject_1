import axios from 'axios'

import util from '@/libs/util'
function extend (obj){
  obj.login=()=>{
        alert("登陆成功！")
      },
    obj.logout=()=>{
        alert("注销成功！")
      },
      obj._ajax = function (type, url, callback, params, err = () => {}) {
        switch (type) {
          // get请求
          case 'get':
            axios.get(url, { params }).then(res => {
              if (res.data) {
                if (res.data.code === '0') {
                  callback(res.data.data)
                } else {
                  err()
                  this._confirm(res.data.message)
                }
              } else {
                callback(res.data)
              }
            }).catch(data => {
              err()
              console.log(data)
            })
            break
    
          // post请求
          case 'post':
            axios.post(url, params).then(res => {
              // loading.close()
              if (res.data.code === '0') {
                callback(res.data.data)
              } else {
                err()
                this._confirm(res.data.message)
              }
            }).catch(data => {
              err()
              console.log(data)
            })
            break
    
          // put请求
          case 'put':
            axios.put(url, params).then(res => {
              if (res.data.code === '0') {
                callback(res.data.data)
              } else {
                this._alert(res.data.message, 'error')
              }
            }).catch(err => {
              console.log(err)
            })
            break
    
          // delete请求
          case 'delete':
            axios.delete(url, { params }).then(res => {
              if (res.data.code === '0') {
                callback(res.data.data)
              } else {
                this._alert(res.data.message, 'error')
              }
            }).catch(err => {
              console.log(err)
            })
            break
        }
      }  
}
export default extend
