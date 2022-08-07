import format from "date-fns/format";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useGetFraudList } from "../services";

const FraudList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);

  const search = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") || "";

  const { data, isLoading, isError, isSuccess, error, isPreviousData } =
    useGetFraudList(search, page, sortBy);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchParams({
        search: e.target.value,
        page: 1,
      });
    }
  };

  const handleSortBy = (dt) => {
    setSearchParams({
      sortBy: dt,
      page: 1,
    });
  };

  useEffect(() => {
    if (page && search && sortBy) {
      setSearchParams({
        page,
        sortBy,
        search,
      });
    } else if (page && search) {
      setSearchParams({
        page,
        search,
      });
    } else if (page && sortBy) {
      setSearchParams({
        page,
        sortBy,
      });
    } else {
      setSearchParams({
        page,
      });
    }
  }, [page]);

  return (
    <div className="cols-content">
      <div className="row align-items-start headers-db-all">
        <div className="col-12">
          <div className="left-text-title">
            <h1>Settings</h1>
            <h3>
              Fraud Protection <span> //</span>{" "}
              <span className="rn">Fraudlist </span>{" "}
            </h3>
          </div>
        </div>
      </div>

      <div className="customers-tabs-wrappers">
        <div className="filters-customer fraud">
          <div className="d-flex">
            <div className="searc-lefts">
              <div className="input-box">
                <div className="icon">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8167 13.9331L10.5511 9.66747C11.3774 8.64687 11.8749 7.34999 11.8749 5.93752C11.8749 2.6638 9.21114 6.10352e-05 5.93742 6.10352e-05C2.6637 6.10352e-05 0 2.66377 0 5.93749C0 9.21121 2.66373 11.8749 5.93745 11.8749C7.34993 11.8749 8.6468 11.3775 9.66741 10.5512L13.933 14.8168C14.0549 14.9387 14.2149 14.9999 14.3749 14.9999C14.5349 14.9999 14.6949 14.9387 14.8168 14.8168C15.0611 14.5724 15.0611 14.1774 14.8167 13.9331ZM5.93745 10.6249C3.35247 10.6249 1.25 8.52247 1.25 5.93749C1.25 3.3525 3.35247 1.25003 5.93745 1.25003C8.52244 1.25003 10.6249 3.3525 10.6249 5.93749C10.6249 8.52247 8.52241 10.6249 5.93745 10.6249Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  placeholder="Search username, email, ip etc.."
                  className="form-control"
                  onKeyDown={handleSearch}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="right-buttons-filter">
              <div className="sort-by-fraud d-flex align-items-center justify-content-end">
                <label>Sort By</label>
                <select
                  onChange={(e) => handleSortBy(e.target.value)}
                  className="form-select"
                >
                  <option value={"updatedAt"}>Date</option>
                  <option value={"username"}>Username</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <Loading />
        ) : isError ? (
          <div>Something wrong happen</div>
        ) : (
          <>
            <div className="all-selected-filster-show ">
              <div className="orders-list-tables-wrap table-responsive">
                <table className="table table-list">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Date Added</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data?.fraudList?.length === 0 ? (
                      <div
                        style={{
                          padding: "10px",
                          fontWeight: "bold",
                          letterSpacing: "2px",
                        }}
                      >
                        Nothing Found
                      </div>
                    ) : (
                      data?.data?.fraudList?.map((user) => (
                        <tr key={user._id}>
                          <th>{user.username}</th>
                          <th>{user.email}</th>
                          <th>
                            <span
                              style={{ textTransform: "capitalize" }}
                              className={
                                user?.userType?.level === "blocked"
                                  ? "blocked badge rounded-pill"
                                  : "flagged badge rounded-pill"
                              }
                            >
                              {user?.userType?.level}
                            </span>
                          </th>
                          <th>
                            {format(new Date(user?.createdAt), "dd-MM-yyyy")}
                          </th>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pagination-footer-order">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="left-pag-settings">
                    <div className="d-flex align-items-center">
                      <p>
                        {data?.data?.totalDoc} total users , total page{" "}
                        {data?.data?.totalPage}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <nav className="ms-auto">
                    <ul className="pagination justify-content-end">
                      <li
                        className={
                          page <= 1 ? "page-item disabled" : "page-item"
                        }
                        onClick={() => {
                          setPage((prev) => Math.max(prev - 1, 0));
                        }}
                      >
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>

                      {[...Array(data?.data?.totalPage).keys()]
                        .slice(0, 5)
                        .map((x) => (
                          <li
                            className={
                              page === x + 1 ? "page-item active" : "page-item"
                            }
                            key={x}
                            onClick={() => setPage(x + 1)}
                          >
                            <a className="page-link" href="#">
                              {x + 1}
                            </a>
                          </li>
                        ))}

                      {data?.data?.totalPage > 5 && (
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">...</span>
                          </a>
                        </li>
                      )}

                      <li
                        className={
                          data?.data?.totalPage === page
                            ? "page-item disabled"
                            : "page-item"
                        }
                        onClick={() => {
                          if (data?.data?.totalPage >= page) {
                            setPage((prev) => prev + 1);
                          }
                        }}
                      >
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FraudList;
