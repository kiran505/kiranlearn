import { AbstractControl, ValidationErrors } from '@angular/forms';
import { promise } from 'protractor';
import { reject } from 'q';

export class usernameValidators{
    static cannotContainSpace( control: AbstractControl) : ValidationErrors | null{
        if ((control.value as string).indexOf(' ')>=0)
        return{ cannotContainSpace: true}
        return null;
    }
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((reslove,reject) => {
     
            setTimeout(()=> {
                if(control.value ==='kiran')
                    reslove ({ shouldBeUnique: true });
                else
                    reslove (null);
               
            },2000);
        });
              
        
       
    }
}