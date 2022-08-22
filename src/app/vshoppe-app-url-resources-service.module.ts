import * as angular from "angular";



export class VshoppeAppUrlResourcesService {
  static $inject = ["VshoppeLoadEnvDetailsService"];
  public keys: any = {};
 
  constructor(
    // private VshoppeLoadEnvDetailsService: VshoppeLoadEnvDetailsService
    
  ) {
    this.setKeys();
  }

  public setKeys() {
    return new Promise<void>((resolve, reject) => {
      if (window.promise !== undefined) {
        // When Angular Pages (index.ejs)
        window.promise.then(
          (response: string) => {
            this.keys = JSON.parse(response);

            //PKB: Toggles ReStructuring - Converting all toggle values from boolean strings to boolean data type
            // this.keys = appCommon.processEnvTogglesObj(this.keys, [
            //   "ng8UpgradeMyAccountToggles",
            //   "enablePerfProgressiveLoading",
            //   "enablePerfSkeletonLoader"
            // ]);

            resolve();
          },
          () => {
            reject();
          }
        );
      } // For JSP Pages & Angular Isolated Testing
    //   else {
    //     this.VshoppeLoadEnvDetailsService.getEnvDetails().then(
    //       response => {
    //         this.keys = response;
    //         resolve();
    //       },
    //       () => {
    //         reject();
    //       }
    //     );
    //   }
    });
  }

  public checkIfIE() {
    let userAgent = navigator.userAgent;
    let bool: boolean;
    bool =
      userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1;
    return bool;
  }
}

export default angular
  .module("vshoppeApp.services.appUrlResourcesService.module", [
    "vshoppeApp.services.loadEnvService.module"
  ])
  .service("VshoppeAppUrlResourcesService", VshoppeAppUrlResourcesService);
