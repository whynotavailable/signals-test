import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {CellComponent} from "../cell/cell.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  @ViewChild('template', { read: ViewContainerRef }) template?: ViewContainerRef;

  ngAfterViewInit() {
    const template = this.template;
    if (template) {
      template.clear()
      const ref = template.createComponent(CellComponent);
      ref.instance.text = "A";
      ref.changeDetectorRef.detectChanges()

      const ref2 = template.createComponent(CellComponent);
      ref2.instance.text = "Hello World";
      ref2.changeDetectorRef.detectChanges()
    }
  }

}
