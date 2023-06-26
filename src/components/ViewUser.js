import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../css/view.css";
import * as actions from "../redux/actions/userAction";
import { MutatingDots } from "react-loader-spinner";

function ViewUser() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.showUserStart(id));
    return () => {
      dispatch(actions.showUserResClean());
    };
  }, [id]);
  const { users, isLoading } = useSelector((state) => state.users);
  const user = users.find((item) => item.id === id);

  return (
    <div className="view-container">
      {isLoading && (
        <MutatingDots
          height="100"
          width="100"
          color="blue"
          secondaryColor="blue"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {users.length > 0 && !isLoading && (
        <>
          <table className="user-table">
            <thead className="head">
              <tr>
                <td>Name:</td>
              </tr>
              <tr>
                <td>Email:</td>
              </tr>
              <tr>
                <td>Age:</td>
              </tr>
              <tr>
                <td>Address:</td>
              </tr>
            </thead>
            <tbody className="body">
              <tr>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>{user.age}</td>
              </tr>
              <tr>
                <td>{user.address}</td>
              </tr>
            </tbody>
          </table>
          <Link to="/">
            <button className="view-back-btn">Go back</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default ViewUser;
