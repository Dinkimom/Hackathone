import { SphereTypes } from 'constants/SphereTypes';
import { EventDto } from 'dtos/EventDto';
import React from 'react';

interface Props {
  event: EventDto;
}

export const EventDetails: React.FC<Props> = ({ event }) => {
  console.log(event);

  return (
    <>
      <span>Дата</span>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      {event.teacher && event.teacher.person && (
        <>
          <span>Ведет</span>
          <p>{event.teacher.person.fio}</p>
        </>
      )}
      <span>Тема курса</span>
      <p>{SphereTypes[event.sphere].text}</p>
      {event.area?.address && (
        <>
          <span>Место</span>
          <p>
            {event.area.name}, {event.area.address}
          </p>
        </>
      )}
    </>
  );
};
