import { request, APIRequestContext } from '@playwright/test';

export class ApiHelper {
    private context!: APIRequestContext;

    async init(baseURL: string){
        this.context = await request.newContext({
            baseURL, extraHTTPHeaders: {
                'Content-Type': 'application/json'
            }
        });
    }

    async get(url: string){
        const response = await this.context.get(url);
        return response;
    }

    async dispose(){
        await this.context.dispose();
    }
}