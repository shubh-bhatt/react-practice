const UserCard = (props) => {
  const { name, bio, avatar, role } = props.user;

  return (
    <>
      <div className="card">
        <img src={avatar} />
        <h3 className="username">{name}</h3>
        <h5 className="userbio">{bio}</h5>
        <code className="role">{role}</code>
      </div>
    </>
  );
};

export default UserCard;
