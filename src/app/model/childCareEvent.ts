import {Child} from './child';

export interface ChildCareEvent {
  id?: number;
  name: string;
  // nie widzę typu dla daty, więc na razie będzie string
  startDateTime: string;
  endDateTime: string;
  childrenList: Child;
  location: Location;
}
