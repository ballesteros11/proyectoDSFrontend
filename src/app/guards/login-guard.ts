import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { TokenService } from "../services/token.service";

@Injectable({
    providedIn:'root'
})
export class LoginGuard implements CanActivate{
    constructor(private tokenService:TokenService, private router:Router){}

    canActivate(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot
    ):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
        
        if(this.tokenService.isLogged()){
            return true;
        }
        alert('No tas logueado');
        this.router.navigate(['/login']);
        return false;
    }

}