import { filterGames } from './utils';

const mockedGames = [
  {
    statusNum: 3,
    startTimeUTC: '2019-10-22T02:30:00.000Z',
  },
  {
    statusNum: 1,
    startTimeUTC: '2200-01-01T22:30:00.000Z',
  },
  {
    statusNum: 1,
    startTimeUTC: '2200-01-01T23:05:00.000Z',
  },
  {
    statusNum: 1,
    startTimeUTC: '2200-01-02T03:30:00.000Z',
  },
  {
    statusNum: 1,
    startTimeUTC: '2200-01-04T00:00:00.000Z',
  },
];

describe('filterGames', () => {
  test('num of all upcoming games equals 4', () => {
    const result = filterGames(mockedGames, { min: 0, max: 24 });
    expect(result.length).toBe(4);
  });

  test('num of upcoming games between 0600 and 2300 equals 1', () => {
    const result = filterGames(mockedGames, { min: 6, max: 23 });
    expect(result.length).toBe(1);
  });

  test('num of upcoming games between 2300 and 0400 equals 3', () => {
    const result = filterGames(mockedGames, { min: 23, max: 4 });
    expect(result.length).toBe(3);
  });
});
