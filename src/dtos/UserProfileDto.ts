import { Achievement } from './../types/Achievement';
import { UserDto } from './UserDto';

export interface UserProfileDto extends UserDto {
  achievements: Achievement[];
}
