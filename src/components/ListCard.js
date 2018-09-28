import React from 'react';
import styled from 'styled-components';

import LinkIcon from '../img/icons/link.svg';
import GroupIcon from '../img/icons/group.svg';

const StyledListCard = styled.div`
  width: 300px;
  height: 180px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(231, 235, 239, 80%);
  margin-bottom: 30px;
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  color: #022773;

  h3 {
    font-weight: 600;
    font-size: 24px;
    margin: 15px 0;
  }
`;

const ListCardStats = styled.div`
  display: flex;

  span {
    display: inline-flex;
    align-items: flex-end;
    margin-right: 12px;
    height: 28px;
  }

  span:first-child img {
    margin-bottom: -2px;
  }

  span:last-child img {
    margin-right: 6px;
    margin-bottom: 4px;
  }
`;

const Underlying = styled.div`
  width: 300px;
  height: 180px;
  border-radius: 10px;
  top: 4px;
  right: -6px;
  background: #c2c4ff;
  z-index: -1;
  position: absolute;
`;

const ListCard = ({ title }) => (
  <StyledListCard>
    <ListCardStats>
      <span><img src={LinkIcon} />30 links</span>
      <span><img src={GroupIcon} />5 groups</span>
    </ListCardStats>
    <h3>{title}</h3>
    <span>Last updated on 29th Sep 18</span>
    <Underlying />
  </StyledListCard>
);

export default ListCard;