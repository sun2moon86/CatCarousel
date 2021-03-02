import { HttpClient, IHttpClientOptions, HttpClientResponse } from '@microsoft/sp-http';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export class ServiceProvider {
    private wpcontext: WebPartContext;
    private apiURL: string;
    public constructor(context: WebPartContext, apiURL: string) {
        this.wpcontext = context;
        this.apiURL = apiURL;
    }
    private httpClientOptionsForGlobal: IHttpClientOptions = {
        headers: new Headers({
            "Content-Type": "application/json",
            "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f"
        }),
        method: "GET",
        mode: "cors"
    };
    public async getTotals() {

        var response = await this.wpcontext.httpClient
            .get(this.apiURL + "/v1/images/?limit=10", HttpClient.configurations.v1, this.httpClientOptionsForGlobal);
        console.log(response);
        var responeJson: any = await response.json();
        return responeJson;
    }

}  