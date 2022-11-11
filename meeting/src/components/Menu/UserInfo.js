import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import AvatarImage from './AvatarImage';
import { setDescription } from '../../redux/loginSlice';
const UserInfo = () => {
  const dispatch = useDispatch();
  const setUserDescription = (text) => {
    dispatch(setDescription(text));
  };
  const userProfileData = useSelector((state) => state.login);

  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
    setUserDescription(e.target.value);
  };
  const onSave = () => {
    axios
      .post('http://127.0.0.1:3001/auth/desc', {
        email: userProfileData.email,
        descriptiton: userProfileData.description,
      })
      .then((res) => {
        setValue('');
      });
  };

  return (
    <div>
      <hr />
      <AvatarImage />
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          {userProfileData.firstName} {userProfileData.lastName},
        </label>
        <br />
        <label htmlFor="formFile" className="form-label">
          {userProfileData.email}
        </label>
        {userProfileData.description.length > 0 ? (
          <>
            <div className="card">
              <div className="card-body">
                <p className="card-text text-dark">
                  {userProfileData.description}
                </p>
              </div>
            </div>
            <h5 className="">
              Have anything to add? <br /> Go ahead!
            </h5>
          </>
        ) : (
          <div>
            <hr />
            <p> Let us know something about you :</p>
          </div>
        )}
        <input
          className="form-control"
          type="textarea"
          value={value}
          onChange={onChange}
          placeholder="write anything about yourself"
          onBlur={onSave}
        />
      </div>
    </div>
  );
};

export default UserInfo;
