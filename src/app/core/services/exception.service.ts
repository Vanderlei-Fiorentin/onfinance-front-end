import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AlertService } from "./alert.service";

@Injectable({
    providedIn: 'root'
})
export class ExceptionService {

    status: any = {
        401: {
            action: function (alertService: AlertService, options: any) {
                alertService.error('Usuário não autenticado!', options);
                window.localStorage.removeItem('token');
                window.localStorage.removeItem('usuario');
                window.location.href = environment.login;
            }
        },
        403: {
            action: function (alertService: AlertService, options: any) { 
                alertService.error('Você não possui permissão para essa ação!', options);
            }
        },
        500: {
            action: function (alertService: AlertService, options: any) { 
                alertService.error('Ocorreu um erro interno no servidor!', options);
            }
        }
    };
    options = {
        autoClose: true,
        keepAfterRouteChange: true
    };

    constructor(private alertService: AlertService) { }

    alert(error: HttpErrorResponse, message: string) {

        var action = this.status[error.status];

        if (action !== undefined) {
            action.action(this.alertService, this.options);
        } else {
            this.alertService.error(message, this.options);
        }        

    }


}