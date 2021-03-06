import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'mail@mail.com',
    password: '123456',
    techs: [
      'node',
      'javascipt',
      {title:'javascript', experience: 100},
    ],
  });

  console.log(user.email);

  return response.json({ message: 'Ola mundo'});
}