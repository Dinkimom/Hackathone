import { EventDto } from 'dtos/EventDto';
import React from 'react';

interface Props {
  event: EventDto;
}

export const EventDetails: React.FC<Props> = ({ event }) => {
  return (
    <>
      <span>Дата</span>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      {event.teacher.person && (
        <>
          <span>Ведет</span>
          <p>{event.teacher.person.fio}</p>
        </>
      )}
      <span>Тема курса</span>
      <p>{event.area.name}</p>
      {event.area.address && (
        <>
          <span>Место</span>
          <p>{event.area.address}</p>
        </>
      )}
    </>
  );
};
