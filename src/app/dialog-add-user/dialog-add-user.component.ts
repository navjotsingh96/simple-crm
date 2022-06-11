import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate: Date;
  loading = false;
  private _snackBar: any;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>,private snackBar: MatSnackBar,
    
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }
  save() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current User is', this.user);
    this.loading = true;

    this.firestore
      .collection('user')
      .add(this.user.toJSON())
      .then((result: any) => {
        this.loading = false;
        console.log('Adding user finsihed', result);
        this.dialogRef.close();
      })

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

   /*  openSnackBar() {
      this.snackBar.open('User is Added');
    
  } */
}