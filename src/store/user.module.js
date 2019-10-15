import { router } from '../routes';
import { userService } from '../service';



const state = {
    loggined: false,
    userName: "",

}

const actions = {
    login({ dispatch, commit} , { username, password}) {
        console.log("====== user.module - login ======")

        userService.login(username, password)
        .then( user => {
            //console.log("user : ", user)
            if ( user ) {
              // 유저정보 저장
              // 화면 이동  
              router.push('/main')
            } else {
                console.log("login fail")
            }
        })

        
        
    }
}

export const user = {
    namespaced: true,
    state,
    actions,
};