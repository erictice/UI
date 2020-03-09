import { ChangeDetectorRef, Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailModalDirective } from './detail-modal.directive';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnInit {
  @Input() detailView: Type<any>;
  @ViewChild(DetailModalDirective, {static: true}) modalTypeTag: DetailModalDirective;

  constructor(
    public activeModal: NgbActiveModal,
    private componentFactoryResolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (this.detailView) {
      const viewContainerRef = this.modalTypeTag.viewContainerRef;
      viewContainerRef.clear();
      this.cdr.detectChanges();
    }
  }
  onSubmit() {
    if (this.activeModal) {
      this.activeModal.close();
    }
  }
  closeModal() {
    if (this.activeModal) {
      this.activeModal.close('Modal Closed');
    }
  }

}