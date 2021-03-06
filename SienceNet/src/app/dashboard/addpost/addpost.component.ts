import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  public userStatus;
  public dataModel;
  public fileIsLoad;
  public fileToUpload: File = null;
  
  text: string;
  title: string;
  category: string = undefined
  organisation: string;

  constructor(private AuthService: AuthService, private firestore: AngularFirestore) {
    this.AuthService.userStatusChanges.subscribe(x => {
      this.userStatus = x;
      this.organisation = this.userStatus.org;
    });
  }

  loginner() {
    console.log(document.getElementById('editor-box').innerHTML)
  }

  pushPost() {
    //upload img
    console.log(this.title);
    console.log(this.category);
    console.log(this.organisation);
    console.log(this.text);
    this.firestore.collection("ideas").add({
      name: this.title,
      category: this.category,
      date: Date.now(),
      text: this.text,
      organisation: this.organisation
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  }

  handleFileInput(files: FileList) {
    console.log(files);
    this.fileIsLoad = files.item(0).name;
    this.fileToUpload = files.item(0);
  }

  ngOnInit(): void {

  }

}
