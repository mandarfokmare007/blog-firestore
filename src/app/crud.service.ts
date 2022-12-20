import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Article } from '../app/shared/article';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  private dbPath = '/tutorials';

  tutorialsRef: AngularFirestoreCollection<Article>;

  constructor(private db: AngularFirestore) {
    this.tutorialsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Article> {
    return this.tutorialsRef;
  }

  create(tutorial: Article): any {
    return this.tutorialsRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.tutorialsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }
}
