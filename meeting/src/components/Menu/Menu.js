import UserCard from '../Cards/Card';
import UserInfo from './UserInfo';
const Menu = () => {
  return (
    <div className="container-fluid main-left-menu">
      <div className="row">
        <div
          className="col-4 bg-dark text-light
border-end vh-100 leftsidemenublock"
        >
          Your profile
          <UserInfo />
        </div>
        <div className="col-sm vh-100">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center mt-5 align-middle">
              <UserCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
