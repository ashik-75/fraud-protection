import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../components/ButtonLoader";
import { useAddDashboardUser } from "../services";

const AddFraud = () => {
  const { mutate, isLoading, isError, isSuccess, error } =
    useAddDashboardUser();

  const merchantInfo = sessionStorage.getItem("navidiumFraudProtection")
    ? JSON.parse(sessionStorage.getItem("navidiumFraudProtection"))
    : null;

  const shop = merchantInfo?.shop;

  const navigate = useNavigate();
  const [fraudInfo, setFraudInfo] = useState({
    shop,
    firstName: "",
    lastName: "",
    email: "",
    ip: "",
    shippingAddress: {
      address1: "",
      city: "",
      province: "",
      zip: "",
      country: "",
    },
    billingAddress: {
      address1: "",
      city: "",
      province: "",
      zip: "",
      country: "",
    },
    userType: {
      level: "",
      type: "fraud",
    },
    note: "",
  });

  const {
    firstName,
    lastName,
    shippingAddress,
    billingAddress,
    ip,
    email,
    userType: { level },
    note,
  } = fraudInfo;

  const onChange = (e) => {
    if (e.target.name === "level") {
      setFraudInfo((prev) => ({
        ...prev,
        userType: {
          type: "fraud",
          level: e.target.value,
        },
      }));
    } else {
      setFraudInfo({ ...fraudInfo, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (email && fraudInfo.userType.level) {
      mutate(fraudInfo);
      console.log({ fraudInfo });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/fraud-list");
    }
  }, [isSuccess]);

  const handleShippingAddress = (e) => {
    setFraudInfo((prev) => ({
      ...prev,
      shippingAddress: {
        ...prev.shippingAddress,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleBillingAddress = (e) => {
    setFraudInfo((prev) => ({
      ...prev,
      billingAddress: {
        ...prev.billingAddress,
        [e.target.name]: e.target.value,
      },
    }));
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="add-fraud-container">
            <div className="fraud-title">
              <h3>Add a User to your Fraud list</h3>
              <p>
                Use the form below and fill out as much info as you can to allow
                you to block manually users who you want to add to your fraud
                list. These users won't be added to the Navidium Global list,
                but can be used to block or flag them on your specific store.
                Example: A troublesome customer who you prefer doesn't purchase
                from you in the future. The more info you add, the higher the
                match rate will be allowing us to block them.
              </p>
            </div>

            {isError && (
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "crimson",
                  color: "white",
                  fontWeight: "bold",
                  width: "75%",
                  marginTop: "10px",
                }}
              >
                {error?.response?.data ||
                  "something Went Wrong , Please try again later"}
              </div>
            )}
            <div className="fraud-form-wrap">
              <form onSubmit={onSubmit}>
                <div class="row gy-3 gy-md-0">
                  <div class="col-md-6">
                    <div className="from-group-f">
                      <label>
                        First Name<span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. dummmy62"
                        name="firstName"
                        onChange={onChange}
                        value={firstName}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div className="from-group-f">
                      <label>
                        Last Name<span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. dummmy62"
                        name="lastName"
                        onChange={onChange}
                        value={lastName}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div className="from-group-f">
                      <label>
                        Email Address<span>*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="e.g. username@gmai.com"
                        name="email"
                        onChange={onChange}
                        value={email}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div className="from-group-f">
                      <label>IP Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. 121.12.23.123"
                        name="ip"
                        onChange={onChange}
                        value={ip}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div className="from-group-f">
                      <label>
                        Shipping Address<span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. address"
                        name="address1"
                        onChange={handleShippingAddress}
                        value={shippingAddress.address1}
                        required
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. city"
                        name="city"
                        onChange={handleShippingAddress}
                        value={shippingAddress.city}
                        required
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. State"
                        name="province"
                        onChange={handleShippingAddress}
                        value={shippingAddress.province}
                        required
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Zip Code"
                        name="zip"
                        onChange={handleShippingAddress}
                        value={shippingAddress.zip}
                        required
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Country, ex: United States"
                        name="country"
                        onChange={handleShippingAddress}
                        value={shippingAddress.country}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div className="from-group-f">
                      <label>
                        Billing Address<span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. address"
                        name="address1"
                        onChange={handleBillingAddress}
                        value={billingAddress.address1}
                        required
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. city"
                        name="city"
                        onChange={handleBillingAddress}
                        value={billingAddress.city}
                        required
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. State"
                        name="province"
                        onChange={handleBillingAddress}
                        value={billingAddress.province}
                        required
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Zip Code"
                        name="zip"
                        onChange={handleBillingAddress}
                        value={billingAddress.zip}
                        required
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Country"
                        name="country"
                        onChange={handleBillingAddress}
                        value={billingAddress.country}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div className="from-group-f">
                      <label>
                        Fraud Level<span>*</span>
                      </label>
                      <select
                        value={level}
                        className="form-select"
                        name="level"
                        onChange={onChange}
                        required
                      >
                        <option value={""}>Select one -- </option>
                        <option value={"flagged"}>Flagged</option>
                        <option value={"normal"}>Normal</option>
                        <option value={"blocked"}>Blocked</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div className="from-group-f">
                      <label>Additional Notes</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="e.g. type here..."
                        name="note"
                        value={note}
                        onChange={onChange}
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-6"></div>
                </div>

                <div className="sbmt-btn-f">
                  <button type="submit" className="btn">
                    Add to Fraudlist{" "}
                    {isLoading ? (
                      <ButtonLoader />
                    ) : (
                      <svg
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75L12 6.75V5.25L0 5.25L0 6.75Z"
                          fill="white"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFraud;
