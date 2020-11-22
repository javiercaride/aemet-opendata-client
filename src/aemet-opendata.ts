export interface AemetOpendataClient {
    setApikey(apikey: string): void;
    getApikey(): string;
}

export class AemetOpendata implements AemetOpendataClient {
    private apikey: string;

    public constructor(apikey: string) {
        this.apikey = apikey;
    }

    public setApikey(apikey: string): void {
        this.apikey = apikey;
    }
    public getApikey(): string {
        return this.apikey;
    }
}
