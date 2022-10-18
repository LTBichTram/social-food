import React, { Fragment } from "react";
import styled from "styled-components";

import { Container } from "~/style/Common";
import { Loading } from "~/style/Loading";

import InfiniteScroll from "~/components/Shared/InfiniteScroll";
import Skeleton from "~/components/Shared/Skeleton";
import Empty from "~/components/Shared/Empty";
import Head from "~/components/Shared/Head";
import PeopleCard from "~/components/PeopleCard";

import { PEOPLE_PAGE_USERS_LIMIT } from "~/constants/DataLimit";

const Root = styled(Container)`
  margin-top: ${(p) => p.theme.spacing.lg};

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    margin-left: ${(p) => p.theme.spacing.lg};
    padding: 0;
  }
`;

const PeopleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 3fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  margin-bottom: ${(p) => p.theme.spacing.lg};
`;

/**
 * People
 */
const People = () => {
  const renderContent = () => {
    return (
      <InfiniteScroll
        data={[]}
        dataKey="getUsers.users"
        count={10}
        // variables={variables}
        // fetchMore={fetchMore}
      >
        {(data) => {
          const showNextLoading = 10;

          return (
            <Fragment>
              <PeopleContainer>
                {data.map((user) => (
                  <PeopleCard key={user.id} user={user} />
                ))}
              </PeopleContainer>

              {showNextLoading && <Loading top="lg" />}
            </Fragment>
          );
        }}
      </InfiniteScroll>
    );
  };

  return (
    <Root maxWidth="md">
      <Head title="Find new People" />
      {renderContent()}
    </Root>
  );
};

export default People;
