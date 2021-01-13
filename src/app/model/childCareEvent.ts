import {Child} from './child';
import {Location} from './location';

export interface ChildCareEvent {
  id?: number;
  name: string;
  // nie widzę typu dla daty, więc na razie będzie string
  startTime: string;
  endTime: string;
  childrenList: Child[];
  location: Location;
}
