import React from "react";
import { PlayIcon } from "../assets/svg/svg";
import clsx from "clsx";

export default function ApiMyBook(MyBook) {
  return (
    <>
      <div className={clsx("text-black grid grid-flow-col")}>
        <div className={clsx("flex pr-4")}>
          <img className={clsx("flex w-24 h-40")} src={MyBook.image} alt="" />
        </div>
        <div className={clsx("grid grid-flow-row grid-rows-2 items-center ")}>
          <div className={clsx("flex flex-col")}>
            <div className={clsx(" font-bold text-lg")}>{MyBook.name}</div>
            <div
              className={clsx(
                "authorBook text-sm font-regular italic text-gray-600"
              )}
            >
              {MyBook.author}
            </div>
          </div>

          <button
            className={clsx("bg-white p-0 hover:bg-white")}
            onClick={() => MyBook.getMyBooks(MyBook.id)}
          >
            <div>
              <svg
                className={clsx(
                  "bg-primary-154 hover:bg-white xl:w-16 xl:h-16 lg:w-10 lg:h-10 md:w-8 md:h-8 flex rounded-full m-md:w-4 m-md:h-4"
                )}
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="0 0 32 32"
              >
                <g id="Icon">
                  <path d="M15.999,2c-7.726,0 -14,6.273 -14,14c0,7.727 6.274,14 14,14c7.727,0 14,-6.273 14,-14c0,-7.727 -6.273,-14 -14,-14Zm0,2c6.623,0 12,5.377 12,12c0,6.623 -5.377,12 -12,12c-6.623,0 -12,-5.377 -12,-12c0,-6.623 5.377,-12 12,-12Z" />

                  <path d="M22.447,16.882c0.339,-0.169 0.553,-0.515 0.553,-0.894c0,-0.379 -0.214,-0.725 -0.553,-0.895l-10,-5c-0.31,-0.155 -0.678,-0.138 -0.973,0.044c-0.295,0.182 -0.474,0.504 -0.474,0.851l0,10c0,0.346 0.179,0.668 0.474,0.85c0.295,0.183 0.663,0.199 0.973,0.044l10,-5Zm-2.683,-0.894l-6.764,3.382c0,-0 -0,-6.764 -0,-6.764l6.764,3.382Z" />
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
