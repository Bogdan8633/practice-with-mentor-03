import useFetchEvents from 'hooks/useFetchEvents';

const EventsSubPage = () => {
  const event = useFetchEvents();

  return (
    <>
      {event && (
        <div>
          <p>{event.name}</p>
          <img src={event.images[0].url} alt="" width="200" />
        </div>
      )}
    </>
  );
};

export default EventsSubPage;
