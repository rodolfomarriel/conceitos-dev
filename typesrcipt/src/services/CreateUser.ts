/**
 *  Para criar: name, email, password 
 */

 interface TechObjects{
   title: string;
   experience: number;
 }

 interface CreateUserData{
   name?: string;
   email: string;
   password: string;
   techs: Array<string | TechObjects>;
  //  techs: string[] (array de strings)
 }

export default function createUser({name = '', email, password}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}