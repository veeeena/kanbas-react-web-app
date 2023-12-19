import * as client from "./client";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Landing from "../Landing"

function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const acc = await client.account();
    setAccount(acc);
  };
  const save = async () => {
    await client.updateUser(account);
    console.log(account);
  };
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Landing");
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);
  if (!account) {
    return (
      <div>
        <h1>Account</h1>
        <Landing />
      </div>
    )
  }
  return (
    <div className="">
      <h1>Account</h1>
      {account && (
        <div>
          <div className="input-group my-2">
            <span class="input-group-text">Password</span>
            <input value={account.password}
              type="text" className="form-control"
              onChange={(e) => setAccount({ ...account,
                password: e.target.value })}
            />
          </div>
          <div className="input-group my-2">
            <span class="input-group-text">First Name</span>
            <input value={account.firstName}
              type="text" className="form-control"
              onChange={(e) => setAccount({ ...account,
                firstName: e.target.value })}/>
          </div>
          <div className="input-group my-2">
            <span class="input-group-text">Last Name</span>
            <input value={account.lastName}
              type="text" className="form-control"
              onChange={(e) => setAccount({ ...account,
                lastName: e.target.value })}/>
          </div>
          <div className="input-group my-2">
            <span class="input-group-text">Date of Birth</span>
            <input value={account.dob}
              type="text" className="form-control"
              onChange={(e) => setAccount({ ...account,
                dob: e.target.value })}/>
          </div>
          <div className="input-group my-2">
            <span class="input-group-text">Email</span>
            <input value={account.email}
              type="text" className="form-control"
              onChange={(e) => setAccount({ ...account,
                email: e.target.value })}/>                
          </div>
          <div className="input-group my-2">
            <span class="input-group-text">Role</span>
            <select className="form-select" 
              onChange={(e) => setAccount({ ...account,
                role: e.target.value })}>
              <option value="none" selected disabled hidden> {account.role} </option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
          <div>
            <button className="btn btn-primary my-2 me-2" onClick={save}> Save </button>
          </div>
          <button className="btn btn-danger mb-2 me-2" onClick={signout}>
            Sign Out
          </button>
        </div>
      )}
      <Link to="/kanbas/admin/users" className="btn btn-warning w-100 mt-2">
        Users
      </Link>
    </div>
  );
}
export default Account; 