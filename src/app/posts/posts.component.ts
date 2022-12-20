import { Component, EventEmitter, Input, Output } from '@angular/core';
import { map } from 'rxjs';
import { TutorialService } from '../crud.service';
import { Article } from '../shared/article';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  message!: string;
  constructor(private tutorialService: TutorialService) {}
  tutorials?: Article[];
  @Input() tutorial?: Article;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTutorial!: Article;

  ngOnInit() {
    this.retrieveTutorials();
  }
  ngOnChanges(): void {
    this.message = '';
    this.currentTutorial = { ...this.tutorial };
  }
  retrieveTutorials(): void {
    this.tutorialService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.tutorials = data;
        for (let i in this.tutorials) {
          this.tutorials[i].short =
            this.tutorials[i].article?.substring(0, 129) + '...';
        }
        console.log(this.tutorials);
      });
  }

  deleteTutorial(): void {
    if (this.currentTutorial.id) {
      this.tutorialService
        .delete(this.currentTutorial.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch((err) => console.log(err));
    }
  }
}
