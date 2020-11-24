import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  public users = new BehaviorSubject<any[]>([]);
  public valueFilter = new BehaviorSubject<string>('');

  constructor(private httpClient: HttpClient) {
  }

  public handleSearch(value: string): void {
    this.valueFilter.next(value);
  }

  ngOnInit(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => this.users.next(data as any[]));
  }
}
