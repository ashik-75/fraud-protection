import { Box, Button, FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useAddSettingsInfo, useGetSettingsInfo } from "../services";

const calculateLength = (list) => {
  let count = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].status) {
      count.push(i + 1);
    }
  }
  return count.join("-");
};

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

  const [blockedOff, setBlockedOff] = useState(false);

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

  const [flaggedOff, setFlaggedOff] = useState(false);

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

  const [normalOff, setNormalOff] = useState(false);

  const handleBlockedChange = (id) => {
    const newData = blocked.map((info) =>
      info.id === id ? { ...info, status: !info.status } : { ...info }
    );

    setBlocked(newData);
  };

  const handleFlagChange = (id) => {
    const newData = flagged.map((info) =>
      info.id === id ? { ...info, status: !info.status } : { ...info }
    );

    setFlagged(newData);
  };

  const handleNormalChange = (id) => {
    const newData = normal.map((info) =>
      info.id === id ? { ...info, status: !info.status } : { ...info }
    );

    setNormal(newData);
  };

  const merchantInfo = sessionStorage.getItem("navidiumFraudProtection")
    ? JSON.parse(sessionStorage.getItem("navidiumFraudProtection"))
    : null;

  const shop = merchantInfo?.shop;

  const handleSaveSettings = () => {
    mutate({
      blocked: {
        status: blockedOff,
        values: blocked,
      },
      flagged: {
        status: flaggedOff,
        values: flagged,
      },
      normal: {
        status: normalOff,
        values: normal,
      },
      shop,
    });
  };

  useEffect(() => {
    if (isSettingsSuccess) {
      if (data.data?.blocked) {
        setBlocked(data.data?.blocked?.values);
        setBlockedOff(data?.data?.blocked?.status);
      }

      if (data.data?.flagged) {
        setFlagged(data.data?.flagged?.values);
        setFlaggedOff(data?.data?.flagged?.status);
      }

      if (data.data?.normal) {
        setNormal(data.data?.normal?.values);
        setNormalOff(data?.data?.normal?.status);
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
      notify("error", "Something Went Wrong!");
    }
  }, [isSuccess, isError]);

  return (
    <>
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
        <Box color={"gray.500"} fontSize="lg" my={4}>
          Use the bars below to set ratings you'd like to flag, block, or
          ignore. The higher the level, the more conservative our
          blocking/flagging algorithm will be with your users. Fill in each box
          so that between all three bars, all boxes are filled out to maximize
          coverage.
        </Box>
      </div>

      <div class="fraud-settings-wrap-all">
        <div class="fraud-stage-wrap">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "75%",
            }}
          >
            <h4>Block Users</h4>
            <div>
              <FormControl display="flex" alignItems="center">
                <FormLabel
                  fontWeight={"bold"}
                  letterSpacing={"1px"}
                  htmlFor="email-alerts"
                  mb="0"
                >
                  Stop Blocking
                </FormLabel>
                <Switch
                  checked={blockedOff}
                  isChecked={blockedOff}
                  onChange={(e) => setBlockedOff(e.target.checked)}
                  id="email-alerts"
                />
              </FormControl>
            </div>
          </div>
          <div
            class="fraud-protection-level-cols"
            style={blockedOff ? { pointerEvents: "none", opacity: 0.4 } : {}}
          >
            {blocked.map((dt, index) => (
              <div
                style={
                  normal[index]?.status || flagged[index]?.status
                    ? { pointerEvents: "none" }
                    : {}
                }
                onClick={() => handleBlockedChange(dt.id)}
                key={dt.id}
                class={`lvl z${dt.id} ${dt.status ? "st" + dt.id : ""}`}
              >
                <input type="checkbox" class="cstm1" />
              </div>
            ))}
          </div>

          <p style={{ marginBottom: "10px" }}>
            <strong>Select Rating:</strong> Block users when the Fraud Rating is{" "}
            {""}
            {calculateLength(blocked)}
          </p>
        </div>
        <hr />
        <div
          class="fraud-stage-wrap"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "75%",
            }}
          >
            <h4>Flag Users</h4>
            <div>
              <FormControl display="flex" alignItems="center">
                <FormLabel
                  fontWeight={"bold"}
                  letterSpacing={"1px"}
                  htmlFor="email-alerts"
                  mb="0"
                >
                  Stop Flagging
                </FormLabel>
                <Switch
                  checked={flaggedOff}
                  isChecked={flaggedOff}
                  onChange={(e) => setFlaggedOff(e.target.checked)}
                  id="email-alerts"
                />
              </FormControl>
            </div>
          </div>
          <div
            class="fraud-protection-level-cols"
            style={flaggedOff ? { pointerEvents: "none", opacity: 0.4 } : {}}
          >
            {flagged.map((dt, index) => (
              <div
                style={
                  blocked[index]?.status || normal[index]?.status
                    ? { pointerEvents: "none" }
                    : {}
                }
                onClick={() => handleFlagChange(dt.id)}
                key={dt.id}
                class={`lvl z${dt.id} ${dt.status ? "st" + dt.id : ""}`}
              >
                <input type="checkbox" class="cstm1" />
              </div>
            ))}
          </div>

          <p>
            <strong>Select Rating:</strong> Flag users when the Fraud Rating{" "}
            {calculateLength(flagged)}
          </p>
        </div>
        <hr />
        <div class="fraud-stage-wrap" style={{ marginTop: "10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "75%",
            }}
          >
            <h4>Don't take any actions</h4>

            <div>
              <FormControl display="flex" alignItems="center">
                <FormLabel
                  letterSpacing={"1px"}
                  fontWeight={"bold"}
                  htmlFor="email-alerts"
                  mb="0"
                >
                  Disable any actions
                </FormLabel>
                <Switch
                  checked={normalOff}
                  isChecked={normalOff}
                  onChange={(e) => setNormalOff(e.target.checked)}
                  id="email-alerts"
                />
              </FormControl>
            </div>
          </div>

          <div
            class="fraud-protection-level-cols"
            style={normalOff ? { pointerEvents: "none", opacity: 0.4 } : {}}
          >
            {normal.map((dt, index) => (
              <div
                style={
                  blocked[index]?.status || flagged[index]?.status
                    ? { pointerEvents: "none" }
                    : {}
                }
                onClick={() => handleNormalChange(dt.id)}
                key={dt.id}
                class={`lvl z${dt.id} ${dt.status ? "st" + dt.id : ""}`}
              >
                <input type="checkbox" class="cstm1" />
              </div>
            ))}
          </div>

          <p>
            <strong>Select Rating:</strong> Ignore Users when their Fraud Rating
            is {calculateLength(normal)}
          </p>
        </div>
      </div>
      <br />
      <Button
        isLoading={isLoading}
        loadingText="Saving..."
        spinnerPlacement="start"
        onClick={handleSaveSettings}
        colorScheme="teal"
      >
        Save Changes
      </Button>

      <br />

      <div>{loading && <PulseLoader />}</div>

      {/* give extrapadding */}
      <div style={{ marginBottom: "150px" }}></div>
    </>
  );
};

export default Settings;
