import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { BoldchatService } from '../boldchat.service';

@Component({
  // moduleId: module.id,
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {

    public boldChatSubscription: any;
    public chatAvailable: boolean = false;
  
    constructor(
      private element: ElementRef,
      private boldchatService: BoldchatService,
      private changeDetectorRef: ChangeDetectorRef
    ) {
      // super(element);
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



