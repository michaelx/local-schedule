import React from 'react';
import styled from 'styled-components';
import ListSubheader from './ListSubheader';
import createEventURL from '../helpers/calendar';
import { periodSuffixes } from '../helpers/utils';

const StyledListItem = styled.li`
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  padding: .75em 1em;

  border-radius: .5em;
  box-shadow: 0 2px 4px rgba(0,0,0,.08);
  background-color: #fff;
`;

const StyledTitle = styled.div`
  padding-bottom: .25em;
`;

const StyledVs = styled.span`
  padding-right: .5rem;
  padding-left: .5rem;

  font-size: .875em;
  color: #888;
`;

const StyledMeta = styled.div`
  font-size: .875em;
  color: #666;
`;

const StyledLink = styled.a`
  color: #888;

  &:hover { color: #6772e5; }
`;

const StyledPeriod = styled.span`
  font-weight: 500;
  color: #24b47e;
`;


const ListItem = ({ data, hasSubheader }) => {
  const { hTeam, vTeam } = data;
  const start = new Date(data.startTimeUTC);

  // Setup end date for calendar event
  const end = new Date(start);
  end.setHours(start.getHours() + 2, start.getMinutes() + 30);

  const event = {
    start,
    end,
    title: `🏀 ${hTeam.tricode} vs ${vTeam.tricode}`,
  };

  const renderGameStatus = () => {
    const {
      period: { current: period },
    } = data;

    if (period > 0) {
      return (
        <React.Fragment>
          <StyledPeriod>{period + periodSuffixes[period - 1]}</StyledPeriod>
          {hTeam.score && vTeam.score
            && ` · ${hTeam.score}-${vTeam.score}`
          }
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {start.toLocaleTimeString().toLowerCase()}
      </React.Fragment>
    );
  };


  return (
    <React.Fragment>
      {hasSubheader
        && <ListSubheader date={start.toDateString()}/>
      }

      <StyledListItem>
        <StyledTitle>
          {hTeam.tricode} {hTeam.nickname}
          <StyledVs>vs</StyledVs>
          {vTeam.tricode} {vTeam.nickname}
        </StyledTitle>

        <StyledMeta>
          {renderGameStatus()}
          <span> &middot; </span>
          <StyledLink
            download={`${hTeam.tricode}_vs_${vTeam.tricode}`}
            href={createEventURL(event)}
          >
            add to calendar
          </StyledLink>
        </StyledMeta>

      </StyledListItem>
    </React.Fragment>
  );
};


export default ListItem;
