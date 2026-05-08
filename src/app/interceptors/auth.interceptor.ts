import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../services/loader/loader.service';
import { delay, finalize, tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const loaderService = inject(LoaderService)
  loaderService.show()
  return next(req).pipe(
     delay(1000),
    tap({
      next: (res) => {
        console.log('Petición correcta',res);
      },

      error: (error) => {
        console.log('Error en petición',error);
      }
    }),
    finalize(()=>{
      loaderService.hide()
    })
  )
};
