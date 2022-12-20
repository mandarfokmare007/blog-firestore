import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../crud.service';
import { Article } from '../shared/article';
export interface blogcard {
  id: any;
  title: string;
  article: string;
  time: string | null;
}
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss'],
})
export class NewpostComponent implements OnInit {
  title!: string;
  articles!: Article;

  // articles: Article[] = [];
  article!: string;
  articlePara: any;

  tutorial: Article = new Article();
  submitted = false;
  constructor(
    public datepipe: DatePipe,
    private tutorialService: TutorialService
  ) {}
  ngOnInit() {
    console.log(this.articles);
  }

  saveTutorial(): void {
    console.log(this.title);
    console.log(this.article);
    this.tutorial.title = this.title;
    this.tutorial.article = this.article;
    this.tutorial.time = this.datepipe.transform(
      Date.now(),
      'MMM d, y, h:mm a'
    );
    console.log(this.tutorial);

    this.tutorialService.create(this.tutorial).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newTutorial(): void {
    this.submitted = false;

    this.tutorial = new Article();
  }
}
