import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'I have signed up' };
  }

  signin() {
    return 'I have signed in';
  }
}
