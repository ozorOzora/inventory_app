import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-availability-dialog',
    templateUrl: './availability-dialog.component.html',
    styleUrls: ['./availability-dialog.component.css']
})
export class AvailabilityDialogComponent {
    formGroup: AvailabilityForm;
    constructor(
        public dialogRef: MatDialogRef<AvailabilityDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.formGroup = new AvailabilityForm();
        this.inventoryLevel.setValue(data.inventoryLevel);
    }
    get inventoryLevel() { return this.formGroup.get('inventoryLevel') }

    closeDialog() {
        this.dialogRef.close();
    }

}


export class AvailabilityForm extends FormGroup {
    constructor() {
        super({
            "inventoryLevel": new FormControl('', [
                Validators.required,
                (field: AbstractControl): ValidationErrors | null => {
                    return field.value % 1 == 0 ? null : { 'notAnInteger': true };
                }
            ])
        });
    }
}