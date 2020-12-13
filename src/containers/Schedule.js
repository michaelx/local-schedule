import React, { useState, useEffect } from 'react';
import NBA from '../apis/NBA';
import ScheduleResult from './ScheduleResult';

const Schedule = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [games, setGames] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(`${NBA}v1/2020/schedule.json`);
      const data = await response.json();

      setGames(data.league.standard);
    };

    const fetchTeams = async () => {
      const response = await fetch(`${NBA}v2/2020/teams.json`);
      const data = await response.json();

      setTeams(data.league.standard);
    };

    const loadData = async () => {
      try {
        await fetchGames();
        await fetchTeams();
      } catch (error) {
        setIsError({ error });
      }

      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) return <div>Loading…</div>;
  if (isError) return <div>Error: {isError.error.message}</div>;

  return (
    <ScheduleResult games={games} teams={teams} />
  );
};

export default Schedule;
