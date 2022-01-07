import { Application } from '../declarations';
import users from './users/users.service';
import servers from './servers/servers.service';
import apps from './apps/apps.service';
import mysql from './mysql/mysql.service';
import databases from './databases/databases.service';
import systemusers from './systemusers/systemusers.service';
import partners from './partners/partners.service';
import tokens from './tokens/tokens.service';
import emailVerifications from './email-verifications/email-verifications.service';
import sshKeys from './ssh-keys/ssh-keys.service';
import forgotPasswords from './forgot-passwords/forgot-passwords.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(servers);
  app.configure(apps);
  app.configure(mysql);
  app.configure(databases);
  app.configure(systemusers);
  app.configure(partners);
  app.configure(tokens);
  app.configure(emailVerifications);
  app.configure(sshKeys);
  app.configure(forgotPasswords);
}
