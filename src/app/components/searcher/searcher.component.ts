import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearcherComponent implements OnInit {

  public search = new FormControl('');

  @Output() public searchEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(value => this.searchEmitter.emit(value));
  }

}
