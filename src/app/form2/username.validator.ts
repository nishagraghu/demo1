import { AbstractControl, ValidationErrors } from "@angular/forms";
// import { rejects } from "assert";

export class userNameValidator {
  static  noSpace(control: AbstractControl): ValidationErrors | null {
        if (control.value.indexOf(' ') >= 0)
            return { noSpace: true };
        
        return null;


    }
    static  unicue(control: AbstractControl): Promise<ValidationErrors> | null {
      return new Promise((resove,rejects)=>{ 
          setTimeout(()=>{
           
            resove({unicue: true})
          },5000)
      
      })


    }
}