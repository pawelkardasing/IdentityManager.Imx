import { Component } from '@angular/core';
import { MethodDescriptor, TimeZoneInfo } from 'imx-qbm-dbts';
import { AppConfigService, AuthenticationService } from 'qbm';

export interface ReleaseInterface {
  title: string;
  url: string;
  release_name: string;
  date: string;
}

const ReleasesData: ReleaseInterface[] = [
  {title: '', url: '', release_name: '', date: ''},
];


@Component({
  selector: 'ccc-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})

export class NewsletterComponent {
  
  _ReleasesData = ReleasesData;

  constructor(
    private readonly config: AppConfigService,
    private readonly authentication: AuthenticationService
  ) {}
  
  public async ngOnInit(): Promise<void> {
    this.authentication.update();
    this.getApiData();
  }

 public async getApiData(): Promise<void> {
  const data: any = await this.config.apiClient.processRequest(this.buildGetObject());
  this._ReleasesData = data
 }

 private buildGetObject(): MethodDescriptor<ReleaseInterface> {
  return {
    path: `/portal/GetNews`,
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
