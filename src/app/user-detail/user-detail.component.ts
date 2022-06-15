import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId = '';
  user: User = new User;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    // to get URL in this case ID 
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      console.log('Got id', this.userId);
      this.getUser();
    });

  }

  getUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user) => {
        this.user = new User(user);
        console.log('Current user', this.user);

      })
  }

  editUser() {
    const userEditDialog = this.dialog.open(DialogEditUserComponent);
    userEditDialog.componentInstance.user = this.user;


  }
  editAddres() {
    const addressDialog = this.dialog.open(DialogEditAddressComponent)
    addressDialog.componentInstance.user = this.user;

  }
}
