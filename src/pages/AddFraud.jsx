import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../components/ButtonLoader";
import { useAddDashboardUser } from "../services";

const AddFraud = () => {
  const { mutate, isLoading, isError, isSuccess, error } =
    useAddDashboardUser();

  console.log({
    error,
  });

  const navigate = useNavigate();
  const [fraudInfo, setFraudInfo] = useState({
    shop: "crazyshop.com",
    username: "",
    email: "",
    userType: {
      level: "",
      type: "fraud",
    },
    note: "",
  });

  const { username, email, level, note } = fraudInfo;

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

    if (username && email && fraudInfo.userType.level) {
      mutate(fraudInfo);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/fraud-list");
    }
  }, [isSuccess]);

  return (
    <div className="cols-content">
      <div className="row align-items-start headers-db-all">
        <div className="col-12">
          <div className="left-text-title">
            <h1>Settings</h1>
            <h3>
              Fraud Protection <span> //</span>{" "}
              <span className="rn">Add a fraud </span>{" "}
            </h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="add-fraud-container">
            <div className="fraud-title">
              <h3>Add a fraud</h3>
              <p>
                Ullamcorper donec viverra sit scelerisque vel. Ultrices vitae
                odio duis morbi orci ultricies quam. Semper hac cras proin
                mauris, orci fermentum bibendum massa mauris. Erat tellus eget
                id eu. Id justo, semper tristique augue neque, magna felis
                porttitor.
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
                <div className="from-group-f">
                  <label>
                    Username<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. dummmy62"
                    name="username"
                    onChange={onChange}
                    value={username}
                    required
                  />
                </div>
                <div className="from-group-f">
                  <label>
                    Email Address<span>*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="e.g. username@email.com"
                    name="email"
                    onChange={onChange}
                    value={email}
                    required
                  />
                </div>
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
    </div>
  );
};

export default AddFraud;
