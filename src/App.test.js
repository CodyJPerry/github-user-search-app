import { render, cleanup } from '@testing-library/react';
import App from './App';
import Header from './components/header/Header.component.tsx';
import Toggle from './components/toggle/Toggle.component.tsx';
import ProfileCard from './components/profilecard/ProfileCard.component.tsx';
import Search from './components/search/Search.component.tsx';

// Clean out everything before running test again
afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});
test('Header component snapshot', () => {
  const { asFragment } = render(<Header />);

  expect(asFragment(<Header />)).toMatchSnapshot();
});

test('Toggle component snapshot', () => {
  const { asFragment } = render(<Toggle />);

  expect(asFragment(<Toggle />)).toMatchSnapshot();
});

test('Profile component snapshot', () => {
  const user = {};
  const { asFragment } = render(<ProfileCard user={user} />);

  expect(asFragment(<ProfileCard />)).toMatchSnapshot();
})

test('Search Component', () => {
  const { asFragment } = render(<Search />);

  expect(asFragment(<Search />)).toMatchSnapshot();
});
