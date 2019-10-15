import Axios from "axios";


export const userService = {
    login,
}


function login(username, password) {

    console.log('====== user.service - login ======')

    // API 요청
    const data = {
        username: username,
        password: password
    }
    return Axios.post("http://localhost:8000/user/login", data)
    .then( res => {
        //console.log('res : ', res)
        
        // 브라우저 처리 
        // 응답값 리턴 
        return res.data.userInfo;
    })
    .catch( e => {
        console.log('e : ', e)
    })
    ;

    
}