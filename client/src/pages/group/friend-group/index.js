import React, { useEffect, useState } from "react";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Thumbs } from "swiper";
import axios from "axios";
const FriendGroups = () => {
  const [listFriendGroups, setListFriendGroups] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/groups").then((res) => {
      console.log(res.data);
      setListFriendGroups(res.data);
    });
  });
  return (
    <div>
      <h2 className="friend-group-title">Đề xuất dành cho bạn</h2>

      <div className="friend-group-list ">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          modules={[Navigation]}
        >
          {listFriendGroups &&
            listFriendGroups.map((group) => {
              return (
                <SwiperSlide>
                  <div>
                    <div class="card friend-card" style={{ width: "18rem" }}>
                      <img
                        class="card-img-top"
                        src={
                          group.avatar
                            ? group.avatar
                            : "https://res.cloudinary.com/hoquanglinh/image/upload/v1668926456/zbalcpggyn1r8ljjzcti.jpg"
                        }
                        alt=""
                      />
                      <div class="card-body">
                        <h5 class="card-title">{group.name}</h5>
                        <p class="card-text">{group.desc}</p>
                      </div>
                      <div class="card-footer">
                        <span class="badge ">10 follower </span>
                        <button class="btn btn-primary">Theo dõi</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default FriendGroups;
