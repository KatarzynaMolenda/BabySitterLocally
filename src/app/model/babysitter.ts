import {Child} from './child';

export interface Babysitter {
  id?: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  primaryEmail: string;
  ownChildren?: Child;
}
