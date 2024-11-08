import { users } from "../../app/data";
import AdminInfoComponent from "../../components/AdminInfoComponent";

const UserProfilePage = () => {
  const { id, fullname, username, phonenumber, email, password, avatarUrl} = users[0];
  return (
    <div>
      <AdminInfoComponent id={id} fullname={fullname} username={username} phonenumber={phonenumber} email={email} password={password} avatarUrl={avatarUrl} />
    </div>
  );
};

export default UserProfilePage;