import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class UsertokenService {
  constructor() { }
  add_session_token(token: string)
  {

    console.log(token)
    if(typeof sessionStorage!=undefined)
    {
      sessionStorage.removeItem(TOKEN_KEY);
      sessionStorage.setItem(TOKEN_KEY, token);
      console.log("in token")
    }
  }

  public get_session_token(): string | null{

    if(typeof sessionStorage!=undefined)
    {
      return sessionStorage.getItem(TOKEN_KEY)
    }
    return null
  }

  public is_logged_in(): Boolean{
    if(typeof sessionStorage!=undefined)
    {
      return sessionStorage.getItem(TOKEN_KEY) != null
    }
    return false
  }
  
  public signOut(){
    sessionStorage.clear();
  }
  


}
