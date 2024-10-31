import InfoComponent from "../../components/InfoComponent";
import { users } from "../../app/data";

const UserProfilePage = () => {
  const { id, fullname, username, phonenumber, email, password, avatarUrl} = users[0];
  return (
    <div>
      <InfoComponent id={id} fullname={fullname} username={username} phonenumber={phonenumber} email={email} password={password} avatarUrl={avatarUrl} />
    </div>
  );
};

export default UserProfilePage;