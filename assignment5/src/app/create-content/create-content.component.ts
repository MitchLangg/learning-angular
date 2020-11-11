import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Content} from '../helper-files/content-interface';
import {ContentListComponent} from '../content-list/content-list.component';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  public id: number;
  public author: string;
  public imgUrl: string;
  public type: string;
  public title: string;
  public body: string;
  public tags?: string[];
  public userForm: FormGroup;
  public badForm: boolean;

  constructor() {this.badForm = false; }

  ngOnInit(): void {
    this.userForm = new FormGroup({
    userId: new FormControl(null, Validators.required),
      userAuthor: new FormControl('', Validators.required),
      userImgUrl: new FormControl('', Validators.required),
      userType: new FormControl('', Validators.required),
      userTitle: new FormControl('', Validators.required),
      userBody: new FormControl('', Validators.required),
      userTags: new FormControl('')
    });
  }

  ClearForm(): void {
    this.userForm.reset();
  }

  onSubmit(): void {
    const promise = new Promise((success, fail) => {
      if (this.userForm.valid) {
          const contentListItem: Content = {
            id: this.userForm.value.userId,
            author: this.userForm.value.userAuthor,
            imgUrl: this.userForm.value.userImgUrl,
            type: this.userForm.value.userType,
            title: this.userForm.value.userTitle,
            body: this.userForm.value.userBody,
            tags: this.userForm.value.userTags
          };

          success(`The content ${this.userForm.value.userTitle} has been added.`);
          ContentListComponent.array.push(contentListItem);
          this.badForm = false;
          this.ClearForm();
      }

      else {
        console.log(this.userForm.get('userId').status);
        console.log(this.userForm.get('userAuthor').status);
        console.log(this.userForm.get('userImgUrl').status);
        console.log(this.userForm.get('userType').status);
        console.log(this.userForm.get('userTitle').status);
        console.log(this.userForm.get('userBody').status);
        console.log(this.userForm.get('userTags').status);
        fail('Couldnt add content.');
        this.badForm = true;

      }
    });

    promise.then(
      (success) => console.log(success),
      (fail) => console.log(fail)
    );

  }

}
