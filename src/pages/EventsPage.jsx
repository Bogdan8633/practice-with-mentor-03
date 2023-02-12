import { fetchEvents } from 'components/shared/service/moviesApi';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  const element = events.map(event => (
    <li key={event.id}>
      <Link to={event.id}>{event.name}</Link>
    </li>
  ));

  return (
    <>
      <ul>{element}</ul>
      <Outlet />
    </>
  );
};

export default EventsPage;
