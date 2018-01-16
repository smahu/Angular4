
import {Injectable} from "@angular/core";

@Injectable()
export class LoginService {

  isLoggedIn(): boolean { // change it like this.
    if (localStorage.getItem('userName')) {
      return true;
    }
    return false;
  }
}
