import { Menu, Tabs } from "antd";
import moment from "moment";
import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import "./HomeMenu.css";

const { TabPane } = Tabs;
const { SubMenu } = Menu;

function HomeMenu(props) {
  // console.log(props);

  const getListNgayChieu = (listLichChieu) => {
    var listNgayChieu = [];
    listLichChieu.forEach((lichChieu) => {
      if (
        listNgayChieu.indexOf(
          moment(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY")
        ) === -1
      ) {
        listNgayChieu.push(
          moment(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY")
        );
      }
    });
    return listNgayChieu;
  };

  const MenuNgayChieu = (props) => {
    const { phim, ngayChieu } = props;

    return (
      <div>
        <div
          className="ngay-chieu text-white rounded-md text-xs md:text-sm py-2 px-3 mt-2"
          style={{ background: "#06121e" }}
        >
          Ngày chiếu: {ngayChieu}
        </div>
        <div className="bg-dark-color grid grid-cols-2 md:grid-cols-3">
          {phim.lstLichChieuTheoPhim
            .filter((lichChieu) => {
              return (
                moment(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY") ===
                ngayChieu
              );
            })
            .map((lichChieu) => {
              return (
                <div
                  className="bg-dark-color text-center py-2 px-3 "
                  key={lichChieu.maLichChieu}
                >
                  <NavLink
                    to={`/checkout/${lichChieu.maLichChieu}`}
                    className="text-gray-300 text-xs lg:text-sm"
                  >
                    {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                  </NavLink>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  const MenuPhim = (props) => {
    const { phim, ...other } = props;

    return (
      <SubMenu
        {...other}
        eventKey={phim.maPhim}
        title={
          <div className="film sm:flex">
            <img
              className="w-8 sm:w-12 h-10 sm:h-16 object-cover rounded-sm sm:rounded mr-2 mb-3 sm:mb-0"
              src={phim.hinhAnh}
              alt={phim.tenPhim}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://picsum.photos/99";
              }}
            />
            <div>
              <p className="px-2 py-1 mr-2 bg-pink-600 rounded text-xs text-white hidden sm:inline-block">
                {phim.maPhim}
              </p>
              <p className="ten-phim text-white text-xs sm:text-sm lg:text-base sm:inline-block">
                {phim.tenPhim}
              </p>
              <p className="text-xs">120 phút - TIX 8.1 - IMDb 0</p>
            </div>
          </div>
        }
      >
        <Menu.ItemGroup
          mode="inline"
          style={{
            borderRight: 0,
            backgroundColor: "#0f2133",
          }}
        >
          {getListNgayChieu(phim.lstLichChieuTheoPhim)?.map(
            (ngayChieu, index) => {
              return (
                <MenuNgayChieu
                  ngayChieu={ngayChieu}
                  phim={phim}
                  key={ngayChieu}
                />
              );
            }
          )}
        </Menu.ItemGroup>
      </SubMenu>
    );
  };

  const renderHeThongRap = () => {
    return props.heThongRapChieu?.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <img
              src={heThongRap.logo}
              alt=""
              className="rounded-full w-6 sm:w-8 lg:w-12 "
            />
          }
          key={heThongRap.maHeThongRap}
          style={{ height: "500px" }}
          className="scroll-cum-rap overflow-y-scroll"
        >
          <Tabs tabPosition="left">
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="md:flex items-center w-20 sm:w-32 md:w-60 lg:w-80">
                      <img
                        src={heThongRap.logo}
                        alt=""
                        className="w-6 lg:w-10 p-0"
                      />
                      <div className="ml-5 text-xs lg:text-sm text-left whitespace-pre-wrap ">
                        {cumRap.tenCumRap}
                        <p className="text-gray-300 text-xs mt-1">
                          {cumRap.diaChi}
                        </p>
                      </div>
                    </div>
                  }
                  key={cumRap.maCumRap}
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
                      return <MenuPhim key={phim.maPhim} phim={phim} />;
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
      <div className=" bg-gray-blue-color container mx-auto rounded pt-2 w-5/6">
        <Tabs tabPosition="left">{renderHeThongRap()}</Tabs>
      </div>
    </div>
  );
}
export default memo(HomeMenu);
