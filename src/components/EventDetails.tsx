import { EventDto } from 'dtos/EventDto';
import React from 'react';

interface Props {
  event: EventDto;
}

export const EventDetails: React.FC<Props> = ({ event }) => {
  return (
    <>
      <span>Дата</span>
      <p>{event.date}</p>
      {event.teacher.person && (
        <>
          <span>Ведет</span>
          <p>{`${event.teacher.person.firstName} ${event.teacher.person.patronymic} ${event.teacher.person.lastName}`}</p>
        </>
      )}
      <span>Тема курса</span>
      <p>{event.area.name}</p>
      {event.area.address && (
        <>
          <span>Место</span>
          <p>
            {event.area.address.city} {event.area.address.street}{' '}
            {event.area.address.houseNumber} {event.area.address.flatNumber}{' '}
            {event.area.address.block}
          </p>
        </>
      )}
    </>
  );
};
