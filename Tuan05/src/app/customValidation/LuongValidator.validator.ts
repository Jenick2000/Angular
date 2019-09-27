import { AbstractControl } from '@angular/forms';

export function AgeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value > 18) {
    return { 'age': true };
  }
  return null;
}

export function LuongValidator(control: AbstractControl): { [key: string]: boolean } | null {
  
  if(control.value < 2000000){
    return {'luong':true};
  }
  return null;
}