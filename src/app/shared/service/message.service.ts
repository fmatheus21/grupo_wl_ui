import { Injectable } from '@angular/core';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  title: string;
  message: string;

  constructor(private toastyService: ToastyService) {
    this.title = '';
    this.message = '';
  }

  sendMessage(status, message) {  
    this.handle(status, message);    
  }

  sendMessageSuccess(data) {
    var message = JSON.parse(JSON.stringify(data)).message;
    this.handle('success', message);   
  }

  sendMessageError(data) {
    var message = JSON.parse(JSON.stringify(data)).error.message;
    this.handle('error', message);    
  }

  protected handle(type: string, response: any) {

    switch (type) {
      case 'default': this.title = ''; break;
      case 'info': this.title = 'Informação'; break;
      case 'success': this.title = 'Sucesso'; break;
      case 'wait': this.title = 'Aguarde'; break;
      case 'error': this.title = 'Erro'; break;
      case 'warning': this.title = 'Atenção'; break;
    }

    if (typeof response === 'string') {
      this.message = response;
    } else if (response.status >= 400 && response.status <= 499) {
      let errors: any;
      this.message = 'Ocorreu um erro ao processar a sua solicitação';

      try {
        errors = response.json();

        this.message = errors[0].mensagemUsuario;
      } catch (e) { }

      console.error('Ocorreu um erro', response);

    } else {
      this.message = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', response);
    }

    let toastOptions: ToastOptions = {
      title: this.title,
      msg: this.message,
      showClose: true,
      timeout: 5000,
      theme: 'bootstrap',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function (toast: ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      }
    };

    this.addToast(type, toastOptions);

  }

  private addToast(type: string, toastOptions: ToastOptions) {

    switch (type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }

  }

}
