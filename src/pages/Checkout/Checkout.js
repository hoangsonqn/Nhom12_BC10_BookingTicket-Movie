import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layChiTietPhongVeAction } from "../../redux/actions/QuanLyDatVeAction";
import style from "./Checkout.module.css";
import "./Checkout.css";

export default function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const { chiTietPhongVe, danhSachDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );

  const dispatch = useDispatch(() => {});

  useEffect(() => {
    //tạo hàm async
    const action = layChiTietPhongVeAction(props.match.params.id);

    //đẩy hàm đi
    dispatch(action);
  }, []);

  console.log({ chiTietPhongVe });

  const { danhSachGhe, thongTinPhim } = chiTietPhongVe;

  const renderSeats = () => {
    return danhSachGhe?.map((ghe, index) => {
      let gheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let gheDaDat = ghe.daDat === "true" ? "gheDaDat" : "";
      return (
        <Fragment key={index}>
          <button disabled={ghe.daDat} className={`ghe ${gheVip} ${gheDaDat}`}>
            {ghe.stt}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="h-screen pb-0">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div
              className="bg-black"
              style={{ width: "80%", height: 15 }}
            ></div>
            <div className={`${style["trapezoid"]} text-center`}>
              <h3 className="mt-3 text-black text-bold">MÀN HÌNH</h3>
            </div>
            <div>{renderSeats()}</div>
          </div>
        </div>
        <div className="col-span-3">
          <h3 className="text-green-400 text-center text-2xl">0đ</h3>
          <hr />
          <h3 className="text-xl">{thongTinPhim.tenPhim}</h3>
          <p>
            Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
          </p>
          <p>Ngày chiếu: {thongTinPhim.ngayChieu}</p>
          <hr />

          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-400 text-lg">Ghế</span>
            </div>
            <div className="text-right col-span-1">
              <span className="text-green-400 text-lg">0đ</span>
            </div>
          </div>
          <hr />
          <div className="my-5">
            <i className="">Email</i> <br />
            {userLogin.email}
          </div>
          <hr />
          <div className="my-5">
            <i>Phone</i>
            <br />
            {userLogin.soDT}
          </div>
          <hr />
          <div className=" flex flex-col justify-end items-center">
            <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer">
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
