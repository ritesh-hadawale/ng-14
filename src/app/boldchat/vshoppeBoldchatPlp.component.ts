import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from "@angular/core";
import { BaseComponent } from "../baseComponent";
import { BoldchatService } from "../boldchat.service";

// import BoldchatPlpStyles from "./vshoppeBoldchatPlp.component.scss";

@Component({
  // moduleId: module.id,
  selector: "boldchat-plp",
  templateUrl: "./vshoppeBoldchatPlp.component.html"
})
export class BoldchatPlpComponent extends BaseComponent
  implements OnInit, OnDestroy {
  public boldChatSubscription: any;
  public chatAvailable: boolean = true;

  constructor(
    private element: ElementRef,
    private boldchatService: BoldchatService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super(element);
  }

  ngOnInit() {
    // BoldchatPlpStyles.use();
    this.boldChatSubscription = this.boldchatService.subscribeChatAvailability(
      this.subscribeCallback.bind(this)
    );
  }

  subscribeCallback(status: any) {
    this.chatAvailable = status;
    this.changeDetectorRef.detectChanges();
  }

  onPlpLiveChatClick() {
    //GTM Event
    // window.sendGtmLiveChatEvent();
    this.boldchatService.openChatWindow();
  }

  ngOnDestroy() {
    // BoldchatPlpStyles.unuse();
    this.boldChatSubscription.unsubscribe();
  }
}
