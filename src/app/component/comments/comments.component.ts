import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  id: string;
  comments: Array<any> = [];
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    if(localStorage.getItem(this.id)){
      this.comments = JSON.parse(localStorage.getItem(this.id));
    }


    this.myForm = this.fb.group({
      comment: [''],
    });
  }

  submitHandler() {
    const formValue = this.myForm.value;
    console.log(formValue);

    this.comments.push(formValue.comment);
    this.myForm.reset();
    console.log(this.comments);
  }

  ngOnDestroy(): void {
    localStorage.setItem(this.id, JSON.stringify(this.comments));
    console.log('destroy');
  }
}
