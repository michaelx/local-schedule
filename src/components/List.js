import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const List = ({ games, teams }) => {
  const renderListItems = () => games.map((game, i, arr) => {
    // Cache previous game, so that we can check if a
    // list subheader should be added.
    let prevGame = {};
    if (i > 0) prevGame = arr[i - 1];

    const gameDay = new Date(game.startTimeUTC).toDateString();
    const prevGameDay = new Date(prevGame.startTimeUTC).toDateString();

    // Find extended team data and merge with game data
    const hTeam = teams.find((team) => team.teamId === game.hTeam.teamId);
    const vTeam = teams.find((team) => team.teamId === game.vTeam.teamId);
    const data = {
      ...game,
      hTeam: { ...game.hTeam, ...hTeam },
      vTeam: { ...game.vTeam, ...vTeam },
    };

    return (
      <ListItem
        key={game.gameId}
        data={data}
        hasSubheader={gameDay !== prevGameDay}
      />
    );
  });

  return (
    <StyledList>{renderListItems()}</StyledList>
  );
};

export default List;
