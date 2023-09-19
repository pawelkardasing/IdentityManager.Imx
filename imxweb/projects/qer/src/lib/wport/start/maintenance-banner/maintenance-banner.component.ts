import { Component, OnInit } from '@angular/core';
import { AppConfigService, AuthenticationService } from 'qbm';
import { MethodDescriptor, TimeZoneInfo } from 'imx-qbm-dbts';

export interface MaintenanceElement {
  message: string;
}

let maintenanceText: MaintenanceElement = {
  message:'',
}

@Component({
  selector: 'imx-maintenance-banner',
  templateUrl: './maintenance-banner.component.html',
  styleUrls: ['./maintenance-banner.component.scss']
})

export class MaintenanceBannerComponent {
  isShow;
  bannerText = maintenanceText;

  closeBanner() {
    localStorage.setItem('isShow', 'false');
    this.isShow = JSON.parse(localStorage.getItem('isShow'));
    console.log(this.isShow)
  }
  constructor( private readonly config: AppConfigService ) {  }

  public async ngOnInit(): Promise<void> {
    this.showBannerText();
    this.isShow = JSON.parse(localStorage.getItem('isShow'));
  }

  public async showBannerText(): Promise<MaintenanceElement> {
    const data = await this.config.apiClient.processRequest(this.getMaintenanceFeatureData());
    maintenanceText = data;
    this.bannerText = maintenanceText;
    return data;
   }
  
   private getMaintenanceFeatureData(): MethodDescriptor<MaintenanceElement> {
    const parameters = [];
    return {
      path: `/portal/MaintenanceMessage`,
      parameters,
      method: 'GET',
      headers: {
        'imx-timezone': TimeZoneInfo.get(),
      },
      credentials: 'include',
      observe: 'response',
      responseType: 'json',
    };
  }


}
