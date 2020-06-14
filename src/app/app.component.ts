import {
  Component,
  ElementRef,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  AfterViewInit,
  Injector,
  ComponentFactoryResolver,
  inject,
  ViewRef,
} from "@angular/core";
import { ColorComponent } from "./color/color.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  title = "DOM Manipulation POC";
  view:ViewRef;
  @ViewChild("vc", { read: ViewContainerRef }) vc: ViewContainerRef;
  @ViewChild("tpl") tpl: TemplateRef<any>;

  /*constructor(private hostElement: ElementRef) {
    
  }*/

  constructor(private injector: Injector, private r: ComponentFactoryResolver) {
    let factory = this.r.resolveComponentFactory(ColorComponent);
    let componentRef=factory.create(injector);
    this.view=componentRef.hostView;
  }

  ngAfterViewInit() {
    let view = this.tpl.createEmbeddedView(null);
    this.vc.insert(view);
  }

  createDynamic(){
    this.vc.insert(this.view);
  }
}
