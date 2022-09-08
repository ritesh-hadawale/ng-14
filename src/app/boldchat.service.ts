import { Injectable, OnDestroy, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { first } from "rxjs/operators";
// import { VshoppeAppUrlResourcesService } from "./vshoppe-app-url-resources-service.module";
import * as $ from "jquery";

@Injectable({
  providedIn: "root"
})
export class BoldchatService implements OnDestroy {
  private chatAvailability: BehaviorSubject<boolean>;
  private offRouteChangeSuccess?: () => void;
  constructor(
    // @Inject("$rootScope") private $rootScope: angular.IRootScopeService,
    @Inject(DOCUMENT) private document: Document,
    // VshoppeAppUrlResourcesService: VshoppeAppUrlResourcesService,
    private http: HttpClient
  ) {
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("forceChatAvailable")) {
      this.chatAvailability = new BehaviorSubject<boolean>(true);
      return; // we're in QA mode, skip loading VMS and setting up the event handlers.
    }
    this.chatAvailability = new BehaviorSubject<boolean>(false);
   
      const hiddenButton = this.document.getElementById(
        "BoldchatHiddenButton"
      );
      if (hiddenButton) {
        const mutationObserver = new MutationObserver(() => {
          const img = document.querySelector("#BoldchatHiddenButton a img");
          if (img) {
            img.setAttribute("alt", "invisible button for live chat");
            mutationObserver.disconnect();
          }
        });
        mutationObserver.observe(hiddenButton, {
          subtree: true,
          childList: true
        });
      }
      this.chatAvailability.pipe(first((data: any) => data)).subscribe(() => {
        window._bcvma = window._bcvma || [];
        window._bcvma.push(["setAccountID", "447188981064267967"]);
        window._bcvma.push([
          "setParameter",
          "WebsiteID",
          "443788214879814964"
        ]);
        window._bcvma.push([
          "setParameter",
          "InvitationID",
          "944979630944412198"
        ]);
        window._bcvma.push([
          "addStatic",
          {
            type: "chat",
            bdid: "7845892627053544352",
            id: "BoldchatHiddenButton"
          }
        ]);
        let vms = this.document.createElement("script");
        vms.src =
          "https://vmss.boldchat.com/aid/447188981064267967/bc.vms4/vms.js";
        vms.async = true;
        vms.defer = true;
        this.document.head.appendChild(vms);
      });
      this.checkAvailability();
      this.document.addEventListener(
        "visibilitychange",
        this.onVisibilityChange.bind(this)
      );
      // $rootScope.$on() returns its de-register function, there is no $off().
      // this.offRouteChangeSuccess = this.$rootScope.$on(
      //   "$routeChangeSuccess",
      //   (() => {
      //     this.checkAvailability();
      //   }).bind(this)
      // );
  }

  private onVisibilityChange = () => {
    if (this.document.visibilityState === "visible") {
      this.checkAvailability();
    }
  };

  public ngOnDestroy() {
    this.document.removeEventListener(
      "visibilitychange",
      this.onVisibilityChange.bind(this)
    );
    if (this.offRouteChangeSuccess) {
      this.offRouteChangeSuccess();
    }
    this.chatAvailability.complete();
  }

  public openChatWindow() {
    let boldchatHiddenButton = $("#BoldchatHiddenButton a");
    if (boldchatHiddenButton) {
      boldchatHiddenButton.click();
    } else {
      console.error("Failed to open chat window.");
    }
  }

  private checkAvailability() {
    return this.http
      .get(
        "https://qa1.vitaminshoppe.com//rest/model/vitaminshoppe/boldChat/actor/VSIBoldChatActor/getChatAvailability"
      )
      .subscribe((data: any) => {
        this.chatAvailability.next(data.Available || false);
      });
  }

  public subscribeChatAvailability(onNext: any) {
    return this.chatAvailability.subscribe(onNext);
  }
}
