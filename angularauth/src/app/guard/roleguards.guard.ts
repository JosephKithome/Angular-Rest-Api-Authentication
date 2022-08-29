import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { NetworkService } from '../services/network.service';

@Injectable({
  providedIn: 'root'
})
export class RoleguardsGuard implements CanActivate {

  constructor(private netService: NetworkService, private  router: Router){}

  canActivate(): boolean{
    if(this.netService.isAuthenticated()){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
}
