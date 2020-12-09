import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContentListComponent} from '../content-list/content-list.component';
import {ContentService} from '../services/content.service';
import {Content} from '../helper-files/content-interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-open-component',
  templateUrl: './create-open-component.component.html',
})
export class CreateOpenComponentComponent {
  constructor( public dialog: MatDialog){}

  openAMD(): void {
    const reference = this.dialog.open(CreateComponentComponent, {
      height: '650px',
      width: '500px'
    });

    reference.afterClosed().subscribe(output => {
      console.log('Closed Dialogue');
    });
  }
}

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})

export class CreateComponentComponent implements OnInit {
  public id: number;
  public author: string;
  public imgUrl: string;
  public type: string;
  public title: string;
  public body: string;
  public tags?: [string];
  public form: FormGroup;
  public validity: boolean;

  constructor(public reference: MatDialogRef<CreateComponentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Component,
              private service: ContentService,
              private clComponent: ContentListComponent,
              public dialog: MatDialog) {
    this.validity = false;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      itemId: new FormControl(null, Validators.required),
      itemAuthor: new FormControl('', Validators.required),
      itemImgUrl: new FormControl('', Validators.required),
      itemType: new FormControl('', Validators.required),
      itemTitle: new FormControl('', Validators.required),
      itemBody: new FormControl('', Validators.required),
      itemTags: new FormControl('')
    });
  }

  clearForm(): void {
    this.form.reset();
  }
  onSubmit(): void {
    const submit = new Promise((success, fail) => {
      if (this.form.valid) {
        const item: Content = {
          id: this.form.value.itemId,
          author: this.form.value.itemAuthor,
          imgUrl: this.form.value.itemImgUrl,
          type: this.form.value.itemType,
          title: this.form.value.itemTitle,
          body: this.form.value.itemBody,
          tags: this.form.value.tags
        };
        success(`The item ${this.form.value.itemTitle} has been added.`);
        this.validity = false;
        this.saveItem(item);
        this.clearForm();
      } else {
        console.log(this.form.get('itemId').status);
        console.log(this.form.get('itemAuthor').status);
        console.log(this.form.get('itemImgUrl').status);
        console.log(this.form.get('itemType').status);
        console.log(this.form.get('itemTitle').status);
        console.log(this.form.get('itemBody').status);
        console.log(this.form.get('itemTags').status);
        this.validity = true;
        fail('Content could not be added');
      }
    });
    submit.then(
      (success) => console.log(success),
      (fail) => console.log(fail)
    );
  }
  // tslint:disable-next-line:typedef
  saveItem(contentItem: Content) {
    this.service.addItem(contentItem).subscribe(item => this.clComponent.array.push(item));
  }



}
