import { Tabs, Menu, Dropdown } from "antd";
import moment from "moment";
import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import "./HomeMenu.css";

const { TabPane } = Tabs;

const { SubMenu } = Menu;

function HomeMenu(props) {
  console.log(props);
  const renderHeThongRap = () => {
    return props.heThongRapChieu?.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <img
              src={heThongRap.logo}
              alt=""
              className="rounded-full"
              width="50"
            />
          }
          key={index.toString()}
          style={{ height: "500px" }}
          className="scroll-cum-rap overflow-y-scroll"
        >
          <Tabs tabPosition="left" className="">
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="flex items-center w-80">
                      <img src={heThongRap.logo} alt="" width="40" />
                      <div className="ml-5 text-left whitespace-pre-wrap">
                        {cumRap.tenCumRap}
                        <p className="text-gray-300 text-xs">{cumRap.diaChi}</p>
                      </div>
                    </div>
                  }
                  key={index.toString()}
                >
                  <Menu
                    mode="inline"
                    style={{
                      height: "100%",
                      borderRight: 0,
                      backgroundColor: "#0f2133",
                    }}
                  >
                    {cumRap.danhSachPhim?.map((phim, index) => {
                      return (
                        <SubMenu
                          key={index.toString()}
                          title={
                            <div className="film flex ">
                              <img
                                style={{
                                  width: 50,
                                  height: 60,
                                  objectFit: "cover",
                                  borderRadius: "3px",
                                  marginRight: "10px",
                                }}
                                src={phim.hinhAnh}
                                alt={phim.tenPhim}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = "https://picsum.photos/99";
                                }}
                              />
                              <div>
                                <p className="px-2 py-1 mr-2 bg-pink-600 rounded text-xs text-white inline-block">
                                  {phim.maPhim}
                                </p>
                                <p className="ten-phim text-white text-base inline-block">
                                  {phim.tenPhim}
                                </p>
                                <p className="text-xs">
                                  120 phút - TIX 8.1 - IMDb 0
                                </p>
                              </div>
                            </div>
                          }
                        >
                          <Menu
                            mode="inline"
                            style={{
                              borderRight: 0,
                              backgroundColor: "#0f2133",
                            }}
                          >
                            {phim.lstLichChieuTheoPhim
                              ?.slice(0, 10)
                              .map((lichChieu, index) => {
                                return (
                                  <SubMenu
                                    className="ngay-chieu rounded-md"
                                    style={{ background: "#06121e" }}
                                    key={index.toString()}
                                    title={`Ngày chiếu: ${moment(
                                      lichChieu.ngayChieuGioChieu
                                    ).format(
                                      "DD/MM/YYYY"
                                    )} chỗ này chưa làm được`}
                                  >
                                    <Menu.Item
                                      className="bg-dark-color"
                                      key={index.toString()}
                                    >
                                      <NavLink to="/" className="text-white">
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    </Menu.Item>
                                  </SubMenu>
                                );
                              })}
                          </Menu>

                          {/* <img
                                style={{
                                  width: 50,
                                  height: 50,
                                  objectFit: "cover",
                                  borderRadius: "3px",
                                }}
                                src={phim.hinhAnh}
                                alt={phim.tenPhim}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = "https://picsum.photos/99";
                                }}
                              />
                              <div className="ml-2 ">
                                <h1 className=" text-xl text-red-600">
                                  {phim.tenPhim}
                                </h1>
                                <div className="grid grid-cols-6  gap-6">
                                  {phim.lstLichChieuTheoPhim
                                    ?.slice(0, 12)
                                    .map((lichChieu, index) => {
                                      return (
                                        <NavLink
                                          to="/"
                                          key={index}
                                          className="text-yellow-700"
                                        >
                                          {moment(
                                            lichChieu.ngayChieuGioChieu
                                          ).format("hh:mm A")}
                                        </NavLink>
                                      );
                                    })}
                                </div>
                              </div> */}
                        </SubMenu>
                      );
                    })}
                  </Menu>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <div className="he-thong-rap bg-dark-blue-color py-8 px-5 lg:p-16">
      <h3 className="text-white text-sm sm:text-lg md:text-2xl mb-10">
        CỤM RẠP
      </h3>
      <div
        style={{ width: "1000px" }}
        className=" bg-gray-blue-color container mx-auto rounded pt-2"
      >
        <Tabs tabPosition="left">{renderHeThongRap()}</Tabs>
      </div>
    </div>
  );
}

export default memo(HomeMenu);
