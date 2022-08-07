import { NavLink } from "react-router-dom";
const menus = [
  {
    id: 1,
    label: "Dashboard",
    url: "/",
  },
  {
    id: 2,
    label: "Add a Fraud",
    url: "/add-fraud",
  },
  {
    id: 3,
    label: "Fraudlist",
    url: "/fraud-list",
  },
  {
    id: 4,
    label: "Whitelist",
    url: "/white-list",
  },
  {
    id: 5,
    label: "Setting",
    url: "/setting",
  },
];
const Sidebar = () => {
  return (
    <div className="cols-menu">
      <div className="inside-wrapper-menu">
        <ul>
          <li>
            <a
              data-bs-toggle="collapse"
              href="#collapseMenuFraud"
              role="button"
              aria-expanded="false"
              aria-controls="collapseMenuFraud"
              className="d-flex align-items-center active"
            >
              <div className="icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipPath="evenodd"
                    d="M9.56001 1.4C7.43923 1.4 5.72001 3.11923 5.72001 5.24C5.72001 7.36078 7.43923 9.08 9.56001 9.08C11.6807 9.08 13.4 7.36078 13.4 5.24C13.4 3.11923 11.6807 1.4 9.56001 1.4ZM4.76001 5.24C4.76001 2.58904 6.90905 0.440002 9.56001 0.440002C12.211 0.440002 14.36 2.58904 14.36 5.24C14.36 7.89096 12.211 10.04 9.56001 10.04C6.90905 10.04 4.76001 7.89096 4.76001 5.24Z"
                    fill="#148092"
                  />
                  <path
                    fillRule="evenodd"
                    clipPath="evenodd"
                    d="M12.8274 13.1454C9.05532 12.4045 5.08935 12.9592 1.60764 14.8094C1.47982 14.8773 1.39994 15.0102 1.39994 15.155V18.6799C1.39994 18.9451 1.61485 19.1599 1.87994 19.1599H12.718C12.983 19.1599 13.198 19.3749 13.198 19.6399C13.198 19.9051 12.983 20.1199 12.718 20.1199H1.87994C1.08465 20.1199 0.439941 19.4753 0.439941 18.6799V15.155C0.439941 14.6551 0.715797 14.1961 1.15715 13.9616C4.83615 12.0067 9.02685 11.4206 13.0125 12.2035C13.2725 12.2545 13.442 12.5068 13.3909 12.767C13.3398 13.027 13.0875 13.1965 12.8274 13.1454H12.8274Z"
                    fill="#148092"
                  />
                  <path
                    fillRule="evenodd"
                    clipPath="evenodd"
                    d="M16.28 11.96C13.8941 11.96 11.96 13.8941 11.96 16.28C11.96 18.6659 13.8941 20.6 16.28 20.6C18.6659 20.6 20.6 18.6659 20.6 16.28C20.6 13.8941 18.6659 11.96 16.28 11.96ZM11 16.28C11 13.3639 13.3639 11 16.28 11C19.1961 11 21.56 13.3639 21.56 16.28C21.56 19.1961 19.1961 21.56 16.28 21.56C13.3639 21.56 11 19.1961 11 16.28Z"
                    fill="#148092"
                  />
                  <path
                    fillRule="evenodd"
                    clipPath="evenodd"
                    d="M19.9795 12.5805C19.792 12.3932 19.488 12.3932 19.3005 12.5805L12.5805 19.3005C12.3932 19.488 12.3932 19.792 12.5805 19.9795C12.768 20.1669 13.072 20.1669 13.2595 19.9795L19.9795 13.2595C20.1669 13.072 20.1669 12.768 19.9795 12.5805Z"
                    fill="#148092"
                  />
                </svg>
              </div>
              <span>Fraud Protection</span>
            </a>
            <div className="collapse sub-menu show" id="collapseMenuFraud">
              {menus.map((menu) => (
                <NavLink key={menu.id} to={menu.url}>
                  {({ isActive }) => (
                    <span className={isActive ? "active" : ""}>
                      {menu.label}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </li>
        </ul>
        <div className="promition-box-pro">
          <img src="img/business-plan1.png" alt="" />
          <p>Upgrade to our premium plans to unclock all the features.</p>
          <a href="#" className="btn">
            Go pro
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9397 2.20864C10.9758 1.796 10.6705 1.43222 10.2579 1.39612L3.53359 0.807822C3.12095 0.77172 2.75717 1.07696 2.72107 1.4896C2.68497 1.90224 2.99021 2.26601 3.40285 2.30211L9.38002 2.82505L8.85709 8.80222C8.82098 9.21485 9.12623 9.57863 9.53887 9.61473C9.9515 9.65083 10.3153 9.34559 10.3514 8.93295L10.9397 2.20864ZM1.48209 10.4313L10.6746 2.7178L9.71044 1.56874L0.517909 9.28219L1.48209 10.4313Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
