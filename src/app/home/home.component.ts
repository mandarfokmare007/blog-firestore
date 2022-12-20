import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { map } from 'rxjs';
import { TutorialService } from '../crud.service';
import { Article } from '../shared/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  visibleSidebar1: any;
  items!: MenuItem[];
  homePost: any;
  trim!: string;
  com: any;
  tutorials?: Article[];
  currentTutorial?: Article;
  currentIndex = -1;
  title = '';
  constructor(private tutorialService: TutorialService) {}
  ngOnInit() {
    this.retrieveTutorials();
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

  setActiveTutorial(tutorial: Article, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
}
