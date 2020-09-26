import { PersonDto } from './PersonDto';

export interface UserDto {
  id: number;
  email: string;
  phoneNumber: string;
  person: PersonDto;
}
