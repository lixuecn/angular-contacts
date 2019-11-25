import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
/**
 * 
 * 设置请求头拦截器
*/
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        const token=window.localStorage.getItem('auth_token')

        const authReq = req.clone({
            headers: req.headers.set('X-Access-Token', token)
          });
        console.log(2222)
    return next.handle(authReq);
  }
}