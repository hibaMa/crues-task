import {
  Injectable
} from '@angular/core';
import { Observable, of } from 'rxjs';

export interface AccessToken {
  access_token: string;
}

@Injectable()
export class AuthService {

  constructor() {
  }

  public login(email, password): Observable<AccessToken> {
    console.log('credentials: ', email, ' ', password);
    return of({access_token: 'token for' + email});
  }

  public register(email, password?): Observable<AccessToken> {
    console.log('credentials: ', email, ' ', password);
    return of({access_token: 'token for' + email});
  }
}
