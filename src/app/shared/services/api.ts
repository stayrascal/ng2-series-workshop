import {Response, Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ApiService {
    api_url: string = 'http://localhost:3500';
    headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    constructor(private http: Http) {
    }

    getJson(reponse: Response) {
        return reponse.json()
    }

    private checkError(response: Response): Response {
        if (response.status >= 200 && response.status < 400) {
            return response;
        } else {
            throw new Error(response.statusText);
        }

    }

    get(path: string): Observable<any> {
        return this.http.get(`${this.api_url}${path}`, {headers: this.headers})
            .map(this.checkError)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    post(path: string, body): Observable<any> {
        return this.http.post(`${this.api_url}${path}`, JSON.stringify(body), {headers: this.headers})
            .map(this.checkError)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    delete(path: string): Observable<any> {
        console.log(path);
        return this.http.delete(`${this.api_url}${path}`, {headers: this.headers})
            .map(this.checkError)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    setHeaders(headers: {[key:string]: string}): void {
        Object.entries(headers).forEach(([key, value]) => this.headers.set(key, value))
    }
}