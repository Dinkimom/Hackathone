import { PersonDto } from './PersonDto';

export interface UserDto {
  id: number;
  email: string;
  person: PersonDto;
}
