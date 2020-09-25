import { UserDto } from './UserDto';

export interface CourseDto {
  id: string;
  name: string;
  description: string;
  streamId: string;
  speakers: UserDto[];
}
