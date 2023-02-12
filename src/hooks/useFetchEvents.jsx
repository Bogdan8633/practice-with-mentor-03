import { fetchEventById } from 'components/shared/service/moviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useFetchEvents = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchEventById(id).then(setEvent);
  }, [id]);

  console.log(event);

  return event;
};

export default useFetchEvents;
