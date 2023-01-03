import React from "react";
import "./index.css";
const FriendGroups = () => {
  return (
    <div>
      <h2 className="friend-group-title">Đề xuất dành cho bạn</h2>
      <div className="row">
        {[...Array(3).keys()].map((value) => {
          return (
            <div className="col">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  class="card-img-top"
                  src="https://res.cloudinary.com/hoquanglinh/image/upload/v1668926456/zbalcpggyn1r8ljjzcti.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-body">
                  <span class="badge badge-secondary">10 follower</span>
                  <button class="btn btn-primary">Theo dõi</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendGroups;
