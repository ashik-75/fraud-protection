const Footer = () => {
  return (
    <div className="footers-cstm">
      <div className="row">
        <div className="col">
          <p>
            {new Date().getFullYear()} ©{" "}
            <a href="https://navidiumapp.com" target="_blank">
              Navidiumapp.com
            </a>{" "}
            | All rights reserved.
          </p>
        </div>
        <div className="col ms-auto">
          <ul>
            <li>
              <a href="#">About </a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">TOS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
