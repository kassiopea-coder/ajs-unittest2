import sortPlayers from '../app';

test('sort 0 players', () => {
  const players = [];
  const result = [];
  expect(sortPlayers(players)).toEqual(result);
});

test('sort 1 player', () => {
  const players = [
    { name: 'маг', health: 100 },
  ];
  const result = [
    { name: 'маг', health: 100 },
  ];
  expect(sortPlayers(players)).toEqual(result);
});

test('sort 4 players', () => {
  const players = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 50 },
    { name: 'хил', health: 90 },
  ];
  const result = [
    { name: 'маг', health: 100 },
    { name: 'хил', health: 90 },
    { name: 'лучник', health: 50 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortPlayers(players)).toEqual(result);
});

test('sort not toBe', () => {
  const players = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 50 },
    { name: 'хил', health: 90 },
  ];
  const result = [
    { name: 'маг', health: 100 },
    { name: 'хил', health: 90 },
    { name: 'лучник', health: 50 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortPlayers(players)).not.toBe(result);
});
