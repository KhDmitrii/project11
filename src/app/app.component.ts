import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { MyDet } from './shared/models/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'project11';
  myNumber = 10;
  flag = false;
  buttonEnabled = false;

  blockX = 0;
  blockY = 0;

  inputValue = 'test';

  @ViewChild('someInput') someInputName: ElementRef;

  someArray: string[] = ['первый', 'второй', 'третий', 'четвертый'];

  fontSize = 15;

  dets: MyDet[];

  constructor() {
    setTimeout(() => {
      this.buttonEnabled = true;
      this.fontSize = 20;
    }, 1500);
    console.log(this.someInputName);
  }

  ngOnInit() {
    console.log(this.someInputName);
  }

  ngAfterViewInit() {
    console.log(this.someInputName);
  }

  hello() {
    return 'Hello world';
  }

  getCoords(e: MouseEvent) {
    this.blockX = e.offsetX;
    this.blockY = e.offsetY;
  }

  getData(elm: HTMLInputElement) {
    // console.log(elm.value);
    console.log(this.someInputName.nativeElement.value);
  }
}
