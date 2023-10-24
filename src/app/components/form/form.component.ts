import { Component } from '@angular/core';
import { FormVal } from 'src/app/Model/form';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  name: string = '';
  email: string = '';
  phoneNumber: string = '';
  FormComp: FormVal[] = [];
  editId = 0;
  buttonText = 'Add';

  add(): void {
    if (this.editId === 0) {
      let form: FormVal = {
        id: this.FormComp.length + 1,
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
      };
      this.FormComp.push(form);
      this.name = '';
      this.email = '';
      this.phoneNumber = '';
    } else {
      const updatedEdit = this.FormComp.findIndex(
        (form) => form.id === this.editId

      );
      if (updatedEdit !== -1) {
        this.FormComp[updatedEdit] = {
          id: this.editId,
          name: this.name,
          email: this.email,
          phoneNumber: this.phoneNumber,
        };
        this.editId = 0;
        this.buttonText = 'add';
      }
      this.buttonText = 'Add';

    }
  }

  Delete(id: number): void {
    this.FormComp = this.FormComp.filter((x) => x.id !== id);
  }

  edit(id: number): void {
    this.editId = id;
    const toEdit = this.FormComp.find((p) => p.id === id);
    if (toEdit) {
      this.buttonText = 'Edit'; 
      this.name = toEdit.name;
      this.email = toEdit.email;
      this.phoneNumber = toEdit.phoneNumber;
      this.buttonText='Edit'
    }
  }
}
