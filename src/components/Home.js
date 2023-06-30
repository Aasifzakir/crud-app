import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/userAction";
import "../css/home.css";
import { Link } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Home() {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(actions.loadUserStart());
  }, []);

  const handleDelete = (id) => {
    dispatch(actions.deleteUserStart(id));
  };
  console.log("home", users);
  return (
    <>
    <h3>Data</h3>
      <div className="add-circle">
        <Link
          to="/addUser"
          style={{
            color: "white",
            textDecoration: "inherit",
            paddingTop: "5px",
          }}
        >
          +
        </Link>
      </div>
      {isLoading && (
        <MutatingDots
          height="100"
          width="100"
          color="blue"
          secondaryColor="blue"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            marginTop: "200px",
          }}
          wrapperClass=""
          visible={true}
        />
      )}
      {!isLoading && (
        <div className="home-container">
          <table className="table">
            <thead className="t-head">
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="t-body">
              {users.map((user, i) => (
                <tr key={user.id}>
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.address}</td>
                  <td>
                    <Link to={`editUser/${user.id}`}>
                      <Tooltip title="Edit">
                        <IconButton>
                          <EditIcon color="secondary" />
                        </IconButton>
                      </Tooltip>
                    </Link>

                    <Tooltip title="Delete">
                      <IconButton>
                        <DeleteIcon
                          onClick={() => handleDelete(user.id)}
                          color="error"
                        />
                      </IconButton>
                    </Tooltip>

                    <Link to={`viewUser/${user.id}`}>
                      <Tooltip title="View">
                        <IconButton>
                          <VisibilityIcon color="primary" />
                        </IconButton>
                      </Tooltip>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/addUser">
            <button className="add-btn">Add User</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Home;
