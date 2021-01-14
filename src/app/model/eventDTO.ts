import {Child} from './child';

export interface EventDTO {
  name: string;
  startTime: string;
  endTime: string;
  children: Child[];
  street: string;
  city: string;
  postalCode: string;
}
