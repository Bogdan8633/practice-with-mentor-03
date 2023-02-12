import { fetchEventsByName } from 'components/shared/service/moviesApi';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SearchPage = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSerachParams] = useSearchParams();
  const eventName = searchParams.get('eventname');

  useEffect(() => {
    if (eventName === '' || eventName === null) {
      return;
    }

    fetchEventsByName(eventName).then(setEvents);
  }, [eventName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSerachParams({ eventname: form.elements.eventname.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventname" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={event.id}>{event.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default SearchPage;
