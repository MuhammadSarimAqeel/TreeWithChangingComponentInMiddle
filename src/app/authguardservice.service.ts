import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService implements CanActivate {

  constructor(private service:DeviceDetectorService, private router :Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.service.isDesktop()){
return true
    }else if (this.service.isMobile()){
      console.log("in else if");
      
this.router.navigate(['/mobhome'])
return true
    }else{
      this.router.navigate(['/tabhome'])
      console.log("in else");
  
return false
}
  }
}
