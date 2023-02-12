import { Item } from './navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>{<Item to="/">Home</Item>}</li>
        <li>{<Item to="events">Events</Item>}</li>
        <li>{<Item to="Search">Search</Item>}</li>
      </ul>
    </nav>
  );
};

export default Navigation;
