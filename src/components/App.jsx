import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import EventsPage from 'pages/EventsPage';
import EventsSubPage from '../pages/EventsSubPage';
import SearchPage from 'pages/SearchPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":id" element={<EventsSubPage />} />
        </Route>
        <Route path="search" element={<SearchPage />}>
          <Route path=":id" element={<EventsSubPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

// <BrowserRouter basename="/practice-with-mentor-03">
