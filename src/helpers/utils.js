import { useEffect, useRef } from 'react';
import isWithinInterval from 'date-fns/isWithinInterval';
import config from '../config';


export const filterGames = (games, filter) => (
  games.filter((game) => {
    const gameStart = new Date(game.startTimeUTC);

    const filterStart = new Date(gameStart);
    filterStart.setHours(filter.min);

    const filterEnd = new Date(gameStart);
    filterEnd.setHours(filter.max);

    // To include after midnight games
    if (filter.max < filter.min) {
      // Adjust dates, so that filerStart is earlier than filterEnd.
      if (gameStart.getHours() < filter.max) {
        filterStart.setDate(filterStart.getDate() - 1);
      } else {
        filterEnd.setDate(filterEnd.getDate() + 1);
      }
    }

    return (
      // Do not include games that have ended
      game.statusNum !== 3

      // Include those that are between the filtered interval
      && isWithinInterval(gameStart, {
        start: filterStart,
        end: filterEnd,
      })
    );
  })
    .slice(0, config.resultLimit)
);


export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};


export const periodSuffixes = ['st', 'nd', 'rd', 'th'];
