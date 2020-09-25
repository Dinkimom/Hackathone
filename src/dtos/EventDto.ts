import { UserDto } from './UserDto';
import { AreaDto } from './AreaDto';
import { EventType } from './../types/EventType';

export interface EventDto {
  id: string;
  eventType: EventType;
  description: string;
  area: AreaDto;
  teacher: UserDto;
  duration: number;
  isNeedCoach: boolean;
  isNeedDesigner: boolean;
  price?: number;
}
