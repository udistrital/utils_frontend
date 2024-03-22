import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";
import { SpinnerUtilService } from "./spinner-util.service";

@Injectable()
export class SpinnerUtilInterceptor implements HttpInterceptor {

    constructor(private spinnerService: SpinnerUtilService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show()

        return next.handle(req).pipe(
            finalize(() => this.spinnerService.hide()))
    }

}