export interface AemetOpendataClient {
    setApikey(apikey: string): void;
    getApikey(): string;
}

export class AemetOpendata implements AemetOpendataClient {
    private apikey: string;

    public constructor(apikey: string) {
        this.apikey = apikey;
    }

    setApikey(apikey: string): void {
        this.apikey = apikey;
    }
    getApikey(): string {
        return this.apikey;
    }
}
