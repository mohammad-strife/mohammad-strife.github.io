import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Offcanvans = () => {
  return (
    <>
      {/* <!-- drawer init and toggle --> */}
      <div className="text-center">
        <button
          className="hover:bg-green-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-3xl px-2.5 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:text-white"
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          <FiMenu />
        </button>
      </div>

      {/* <!-- drawer component --> */}
      <div
        id="drawer-right-example"
        className="fixed top-0 right-0 z-40 h-screen py-4 overflow-y-auto transition-transform translate-x-full bg-slate-700 w-80 dark:bg-gray-800"
        aria-labelledby="drawer-right-label"
      >
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <ul className="md:hidden text-center text-white divide-y divide-slate-900 mt-7 ">
          <li className="p-2 hover:bg-slate-500">
            <NavLink to="">تبلیغ دینی</NavLink>
          </li>
          <li className="p-2 hover:bg-slate-500">
            <NavLink to="">خانواده موفق</NavLink>
          </li>
          <li className="p-2 hover:bg-slate-500">
            <NavLink to="">مدرسه موفق</NavLink>
          </li>
          <li className="p-2 hover:bg-slate-500">
            <NavLink to="">آموزش مداحی</NavLink>
          </li>
          <li className="p-2 hover:bg-slate-500">
            <NavLink to="">جهاد تبیین</NavLink>
          </li>
          <li className="p-2 hover:bg-slate-500">
            <NavLink to="">صفحه اصلی</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Offcanvans;
