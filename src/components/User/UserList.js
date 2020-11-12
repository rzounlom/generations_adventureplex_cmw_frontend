import { Query } from "react-apollo";
import gql from "graphql-tag";
import User from "./Users";
import { Spinner } from "react-bootstrap";
const USER_QUERY = gql`
  {
    users {
      id
      name
      email
      role
    }
  }
`;

const UserList = () => {
  return (
    <Query query={USER_QUERY}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <div>
              <Spinner animation="border" role="status" size="lg" />
            </div>
          );
        if (error) return <div>Error</div>;

        const usersToRender = data.users;

        return (
          <div>
            {usersToRender.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </div>
        );
      }}
    </Query>
  );
};

export default UserList;
