import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import config from '../config';
import List from '../components/List';
import Button from '../components/Button';
import FilterForm from '../components/FilterForm';
import { filterGames, usePrevious } from '../helpers/utils';

const MenuWrapper = styled.div`
  margin-bottom: 1.5em;
  padding: 1em;

  border-bottom: 1px solid rgba(103,114,229,.16);
`;

const ScheduleResult = ({ games, teams }) => {
  const [result, setResult] = useState([]);
  const [filter, setFilter] = useState(config.filter);
  const prevFilter = usePrevious(filter);

  useEffect(() => {
    if (
      !prevFilter
      || (prevFilter.min !== filter.min || prevFilter.max !== filter.max)
    ) {
      const filtered = filterGames(games, filter);
      setResult(filtered);
    }
  }, [prevFilter, filter, games]);

  const handleFilterChange = (data) => {
    setFilter(data);
  };

  return (
    <React.Fragment>
      <MenuWrapper>
        <FilterForm onFilterChange={handleFilterChange} data={filter} />
        <Button
          title="Show all"
          onButtonClick={handleFilterChange}
          payload={{ min: 0, max: 24 }}
        />
      </MenuWrapper>
      <List games={result} teams={teams} />
    </React.Fragment>
  );
};

export default ScheduleResult;
