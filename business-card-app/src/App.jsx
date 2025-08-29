import { users } from "./content/users";

const App = () => {
  return (
    <div className="main-container">
      {users.map((user) => (
        <div key={user.id} className="card">
          <img src={user.avatar} />
          <h3 className="username">{user.name}</h3>
          <h5 className="userbio">{user.bio}</h5>
          <code className="role">{user.role}</code>
        </div>
      ))}
    </div>
  );
};

export default App;
