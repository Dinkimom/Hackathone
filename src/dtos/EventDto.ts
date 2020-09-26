import { UserDto } from './UserDto';
import { AreaDto } from './AreaDto';
import { EventType } from './../types/EventType';

export interface EventDto {
  id: string;
  name: string;
  sphere: 1 | 2 | 3 | 4 | 5;
  eventType: EventType;
  description: string;
  area: AreaDto;
  teacher: UserDto;
  duration: number;
  isNeedCoach: boolean;
  isNeedDesigner: boolean;
  price: number;
  isRegistered: boolean;
  date: string;
}
