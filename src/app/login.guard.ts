import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {LoginService} from "./login.service";

@Injectable()
export class LoginGuard implements CanActivate{
  constructor(private loginService: LoginService) {};

  canActivate() {
    if (this.loginService.isLoggedIn()) {
      return true;
    } else {
      window.alert("You don't have permission to view this page");
      return false;
    }
  }
}
