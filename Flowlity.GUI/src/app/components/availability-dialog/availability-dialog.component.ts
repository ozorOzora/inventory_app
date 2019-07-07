import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-availability-dialog',
    templateUrl: './availability-dialog.component.html',
    styleUrls: ['./availability-dialog.component.css']
})
export class AvailabilityDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<AvailabilityDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() {

    }

    closeDialog() {
        this.dialogRef.close();
    }

}
