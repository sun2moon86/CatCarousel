import { WebPartContext } from '@microsoft/sp-webpart-base';
export declare class ServiceProvider {
    private wpcontext;
    private apiURL;
    constructor(context: WebPartContext, apiURL: string);
    private httpClientOptionsForGlobal;
    getTotals(): Promise<any>;
}
//# sourceMappingURL=ServiceProvider.d.ts.map