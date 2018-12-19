import React from 'react';
import styled from 'styled-components';
import Links from './Links';

const GroupWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`; 

export const GroupTitle = styled.h2`
  font-weight: 600;
  font-size: 26px;
  color: #000b9f;
`;

export default class Group extends React.Component {
  render() {
    return (
      <GroupWrapper>
        <GroupTitle>{this.props.name}</GroupTitle>
        <Links 
          listId={this.props.listId}
          groupId={this.props.id}
          name={this.props.name}
          links={[...this.props.links].reverse()}           
          toggleModal={this.props.toggleModal}    
          setSelectedGroup={this.props.setSelectedGroup}        
        />
      </GroupWrapper>
    );
  }
}