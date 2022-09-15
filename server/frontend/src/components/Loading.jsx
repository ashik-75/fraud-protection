import { HashLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
  borderColor: "red",
};

const Loading = () => {
  return (
    <div>
      <HashLoader color="#006d77" cssOverride={override} />
    </div>
  );
};

export default Loading;
