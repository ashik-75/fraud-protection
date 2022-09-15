import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ButtonLoader from "../components/ButtonLoader";
import { useAddSettingsInfo, useGetSettingsInfo } from "../services";

const Settings = () => {
  const { mutate, isLoading, isError, error, isSuccess } = useAddSettingsInfo();
  const { data, loading, isSettingsError, isSettingsSuccess, settingsError } =
    useGetSettingsInfo();

  const [blocked, setBlocked] = useState([
    {
      id: 1,
      status: false,
    },
    {
      id: 2,
      status: false,
    },
    {
      id: 3,
      status: false,
    },
    {
      id: 4,
      status: false,
    },
    {
      id: 5,
      status: false,
    },
    {
      id: 6,
      status: false,
    },
    {
      id: 7,
      status: false,
    },
    {
      id: 8,
      status: false,
    },
    {
      id: 9,
      status: false,
    },
    {
      id: 10,
      status: false,
    },
  ]);

  const [flagged, setFlagged] = useState([
    {
      id: 1,
      status: false,
    },
    {
      id: 2,
      status: false,
    },
    {
      id: 3,
      status: false,
    },
    {
      id: 4,
      status: false,
    },
    {
      id: 5,
      status: false,
    },
    {
      id: 6,
      status: false,
    },
    {
      id: 7,
      status: false,
    },
    {
      id: 8,
      status: false,
    },
    {
      id: 9,
      status: false,
    },
    {
      id: 10,
      status: false,
    },
  ]);

  const [normal, setNormal] = useState([
    {
      id: 1,
      status: false,
    },
    {
      id: 2,
      status: false,
    },
    {
      id: 3,
      status: false,
    },
    {
      id: 4,
      status: false,
    },
    {
      id: 5,
      status: false,
    },
    {
      id: 6,
      status: false,
    },
    {
      id: 7,
      status: false,
    },
    {
      id: 8,
      status: false,
    },
    {
      id: 9,
      status: false,
    },
    {
      id: 10,
      status: false,
    },
  ]);

  const handleChange = (id) => {
    const newData = blocked.map((info) =>
      info.id <= id ? { ...info, status: true } : { ...info, status: false }
    );

    setBlocked(newData);
  };

  const handleFlagChange = (id) => {
    const newData = flagged.map((info) =>
      info.id <= id ? { ...info, status: true } : { ...info, status: false }
    );

    setFlagged(newData);
  };

  const handleAction = (id) => {
    const newData = normal.map((info) =>
      info.id <= id ? { ...info, status: true } : { ...info, status: false }
    );

    setNormal(newData);
  };

  const handleSaveSettings = () => {
    mutate({
      blocked,
      flagged,
      normal,
      shop: "crazyshop.com",
    });
  };

  useEffect(() => {
    if (isSettingsSuccess) {
      if (data.data?.blocked) {
        setBlocked(data.data?.blocked);
      }

      if (data.data?.flagged) {
        setFlagged(data.data?.flagged);
      }

      if (data.data?.normal) {
        setNormal(data.data?.normal);
      }
    }
  }, [isSettingsSuccess]);

  const notify = (type, message) => {
    return toast[type](<div style={{ letterSpacing: "1px" }}>{message}</div>);
  };

  useEffect(() => {
    if (isSuccess) {
      notify("success", "Successfully Updated Settings");
    }

    if (isError) {
      notify("error", "Somwthing Went Wrong!");
    }
  }, [isSuccess, isError]);

  return (
    <div class="cols-content">
      <div class="row align-items-start headers-db-all">
        <div class="col-6">
          <div class="left-text-title">
            <h1>Settings</h1>
            <h3>
              Fraud Protection <span> //</span>{" "}
              <span class="rn">Settings </span>{" "}
            </h3>
          </div>
        </div>
      </div>

      <div class="fraud-settings-wrap-all">
        <div class="fraud-stage-wrap">
          <h4>Block Users</h4>
          <div class="fraud-protection-level-cols">
            {blocked.map((dt) => (
              <div
                onClick={() => handleChange(dt.id)}
                key={dt.id}
                class={`lvl z${dt.id} ${dt.status ? "st" + dt.id : ""}`}
              >
                <input type="checkbox" class="cstm1" />
              </div>
            ))}
          </div>
          <p>
            <strong>Stage:</strong> Block users when the fradulant is{" "}
            {blocked.filter((dt) => dt.status).length}
          </p>
        </div>
        <hr />
        <div class="fraud-stage-wrap">
          <h4>Flag Users</h4>
          <div class="fraud-protection-level-cols">
            {flagged.map((dt) => (
              <div
                onClick={() => handleFlagChange(dt.id)}
                key={dt.id}
                class={`lvl z${dt.id} ${dt.status ? "st" + dt.id : ""}`}
              >
                <input type="checkbox" class="cstm1" />
              </div>
            ))}
          </div>
          <p>
            <strong>Stage:</strong> Flag users when the fradulant is{" "}
            {flagged.filter((dt) => dt.status).length}
          </p>
        </div>
        <hr />
        <div class="fraud-stage-wrap">
          <h4>Don't take any actions</h4>
          <div class="fraud-protection-level-cols">
            {normal.map((dt) => (
              <div
                onClick={() => handleAction(dt.id)}
                key={dt.id}
                class={`lvl z${dt.id} ${dt.status ? "st" + dt.id : ""}`}
              >
                <input type="checkbox" class="cstm1" />
              </div>
            ))}
          </div>
          <p>
            <strong>Stage:</strong> Don't do anything when the fradulant level
            is {normal.filter((dt) => dt.status).length}
          </p>
        </div>
        <div class="sbmit-btns">
          <button onClick={handleSaveSettings} type="submit" class="btn">
            Save Changes{" "}
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
      </div>

      {/* give extrapadding */}
      <div style={{ marginBottom: "150px" }}></div>
    </div>
  );
};

export default Settings;
