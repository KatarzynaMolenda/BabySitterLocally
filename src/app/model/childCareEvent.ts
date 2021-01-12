import {Child} from './child';

export interface ChildCareEvent {
  id?: number;
  name: string;
  // nie widzę typu dla daty, więc na razie będzie string
  startTime: string;
  endTime: string;
  childrenList: Child[];
  location: Location;
}
