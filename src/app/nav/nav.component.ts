import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  header_variable = false;
  showPincode: boolean = false;

  ngOnInit(): void {}
  @Output() trogalrSidebarForMe: EventEmitter<any> = new EventEmitter();
  @HostListener('document:scroll')
  scrollfunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_variable = true;
    } else {
      this.header_variable = false;
    }
  }
  showOrhidePincodeform() {
    this.showPincode = !this.showPincode;
  }
  manuicons: boolean = false;
  show() {
    if (this.manuicons == false) {
      this.manuicons = true;
    } else {
      this.manuicons = false;
    }
  }
  active: boolean = false;
  showmenu() {
    if (this.active == false) {
      this.active = true;
    } else {
      this.active = false;
    }
  }

  trogalrSidebar() {
    this.trogalrSidebarForMe.emit();
  }
}
