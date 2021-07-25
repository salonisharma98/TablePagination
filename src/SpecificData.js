import { useEffect, useState } from "react";
import icon from "./images/icon.png";
import './SpecificData.css'
function SpecificData({ match }) {

    const [user, setUser] = useState([]);
    useEffect(() => {
      getUser();
    }, []);

    const getUser = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
      const datas = await response.json()
      setUser(datas);

    }
    return (
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col abc">
            <div class="card">
              <div className="card-image-wrapper">
                <img src={icon} className="imgarea" />
              </div>
              <div className="card-body">
                <h4 className="card-title">User Details</h4>
                <hr />
                <p className="card-text">
                  <b>User ID:</b> {user.id}
                </p>
                <hr />
                <p className="card-text">
                  <b>UserName:</b> {user.username}
                </p>
                <hr />
                <p className="card-text">
                  <b>Email:</b> {user.email}
                </p>
                <hr />
                <p className="card-text">
                  <b>Phone no:</b> {user.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
export default SpecificData;