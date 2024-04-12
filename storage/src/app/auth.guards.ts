import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { UsertokenService } from "./services/usertoken.service"

export const CanActivate = ()=>{
    const user = inject(UsertokenService)
    const route = inject(Router)
    console.log(user.is_logged_in());
    if (user.is_logged_in()){
        
        return true
    }
    route.navigate(['login'])
    return false;
}