import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  allUsers = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    // to downlaod data from Firestore
    this.firestore
      .collection('users')
      // valueChanges whenever anything is changed in firestroe will auotmatically dowmlaoded and idField to get id from Firestore
      .valueChanges({idField: 'customIdName'})
      .subscribe((downloadedData) => {
        console.log('User Finsihed', downloadedData);
        this.allUsers = downloadedData;

      })
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogAddUserComponent);

  }
}
