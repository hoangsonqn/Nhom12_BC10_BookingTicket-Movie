import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import bgFooter from "../../../../assets/images/footer_bg.png";

export default function Footer(props) {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) =>
    _.pick(heThongRap, ["maHeThongRap", "tenHeThongRap", "logo"])
  );

  // console.log(arrHeThongRap, "arr");

  return (
    <footer
      className=" bg-dark-blue-color"
      style={{
        backgroundImage: `url(${bgFooter})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="container container mx-auto px-5 lg:px-16 space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12 pt-20 pb-10">
          <div className="col-span-full sm:col-span-6 md:col-span-3 pb-6 md:pb-0 ">
            <Link
              to=""
              className="flex justify-center space-x-3 sm:justify-start "
            >
              <img
                className="w-16 h-16"
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                alt=""
              />

              <span className="self-center text-xl font-semibold">CINEMA</span>
            </Link>
            <p className="pt-10 text-gray-400 text-center sm:text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 pb-1 mr-3 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Thành phố Hồ Chí Minh
            </p>
            <p className="pt-5 text-gray-400 text-center sm:text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 pb-1 mr-3  inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (+01) 234 456 789
            </p>
          </div>

          <div className="col-span-6 sm:col-span-3 md:col-span-2 py-5 sm:p-0">
            <h4 className="text-lg text-white font-semibold mb-7">Thông tin</h4>
            <ul>
              <li className="mb-2">
                <Link to="">Về chúng tôi</Link>
              </li>
              <li className="mb-2">
                <Link to="">Liên hệ</Link>
              </li>

              <li className="mb-2">
                <Link to="">Diễn đàn</Link>
              </li>
              <li className="mb-2">
                <Link to="">Blog</Link>
              </li>
              <li className="mb-2">
                <Link to="">Trung tâm hỗ trợ</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-6 sm:col-span-3 md:col-span-2 py-5 sm:p-0">
            <h4 className="text-lg text-white font-semibold mb-7">Pháp lý</h4>
            <ul>
              <li className="mb-2">
                <Link to="">Điều khoản sử dụng</Link>
              </li>
              <li className="mb-2">
                <Link to="">Chính sách bảo mật</Link>
              </li>

              <li className="mb-2">
                <Link to="">Bảo vệ</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2 text-center md:text-left ">
            <h4 className="text-lg text-white font-semibold mb-7">Đối tác</h4>
            <div className="text-white grid grid-cols-2 gap-y-5">
              {arrHeThongRap.map((heThongRap, index) => {
                return (
                  <div key={index} className="text-center">
                    <img
                      className="text-center"
                      width={40}
                      src={heThongRap.logo}
                      alt={heThongRap.tenHeThongRap}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 text-center md:text-left  pl-5">
            <h4 className="text-lg text-white font-semibold mb-7">Bản tin</h4>
            <p className="mb-5">
              Đăng ký hệ thống bản tin ngay bây giờ để nhận những tin tức mới
              nhất từ chúng tôi.
            </p>

            <input
              className="bg-transparent w-full  py-1 px-2 mb-5 ring-1 ring-gray-400 text-white "
              type="text"
              placeholder="Nhập email của bạn..."
            />
            <button
              className="pink-color text-sm inline-block font-semibold"
              type="submit"
            >
              ĐĂNG KÝ NGAY{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 pb-1 inline-block font-semibold"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid justify-center p-6 lg:justify-between">
          <div className=" self-center  text-center md:block lg:col-start-1 md:space-x-6">
            <p className="text-gray-400 text-base">
              Thực hiện bởi{" "}
              <a
                href="https://www.facebook.com/TitKantee"
                target="_blank"
                rel="noreferrer"
              >
                Tú
              </a>{" "}
              và{" "}
              <a
                href="https://www.facebook.com/esuhaikaizen.hoangson.5"
                target="_blank"
                rel="noreferrer"
              >
                Sơn
              </a>
            </p>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <Link
              to=""
              className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-coolGray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </Link>
            <Link
              to=""
              className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-coolGray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
              </svg>
            </Link>
            <Link
              to=""
              className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-coolGray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
