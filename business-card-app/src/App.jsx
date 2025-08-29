import UserCard from "./components/UserCard";
import { users } from "./content/users";

const App = () => {
  return (
    <div className="main-container">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default App;
