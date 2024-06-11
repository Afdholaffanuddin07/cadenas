import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar1 from "../components/Navbar1";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

interface Activity {
  id: number;
  user_id: number;
  jam: string;
  tanggal: string;
  foto: string;
}

const LogActivity = () => {
  const navigate = useNavigate();

  const onDashboardClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onManageUserContainerClick = useCallback(() => {
    navigate("/manage-user");
  }, [navigate]);

  const onMonitoringContainerClick = useCallback(() => {
    navigate("/monitoring");
  }, [navigate]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activities, setActivities] = useState<Activity[]>([]);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch activities from API
    axios
      .get("${process.env.NEXT_PUBLIC_API_BACKEND}/api/activities")
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching activities:", error);
      });
  }, []);

  const filteredActivities = activities.filter(
    (activity) =>
      activity.user_id.toString().includes(searchTerm) || // Filter by user_id
      activity.jam.toLowerCase().includes(searchTerm.toLowerCase()) || // Filter by jam
      activity.tanggal.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by tanggal
  );

  const indexOfLastActivity = currentPage * itemsPerPage;
  const indexOfFirstActivity = indexOfLastActivity - itemsPerPage;
  const currentActivities = filteredActivities.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div
      className="w-full relative"
      style={{
        background: "linear-gradient(180deg, #092230, #1c6a96)",
        height: "1024px",
        overflow: "hidden",
        color: "white",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Sidebar
        onManageUserContainerClick={onManageUserContainerClick}
        onDashboardContainerClick={onDashboardClick}
        onMonitoringCameraContainerClick={onMonitoringContainerClick}
      />
      <Navbar1 />
      {/* Header */}
      <div
        style={{
          position: "relative",
          top: "170px",
          width: "80%",
          left: "300px",
          padding: "20px",
          backgroundColor: "#71C7EC",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: "14px",
          borderTopRightRadius: "14px",
        }}
      >
        <h1 style={{ margin: 1 }}>Log Activity</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "5px 30px 5px 10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <img
          className="absolute top-[50%] right-[35px] transform translate-y-[-50%] w-5 h-5 overflow-hidden"
          alt=""
          src="/phmagnifyingglass.svg"
        />
      </div>
      {/* Table */}
      <div
        style={{
          position: "relative",
          top: "170px",
          width: "80%",
          left: "300px",
          backgroundColor: "white",
          borderBottomLeftRadius: "14px",
          borderBottomRightRadius: "14px",
          padding: "20px",
        }}
      >
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th style={{ textAlign: "center" }}>No.</th>
              <th style={{ textAlign: "center" }}>Date</th>
              <th style={{ textAlign: "center" }}>Time</th>
              <th style={{ textAlign: "center" }}>User ID</th>
              <th style={{ textAlign: "center" }}>Photo</th>
            </tr>
          </thead>
          <tbody>
            {currentActivities.map((activity, index) => (
              <tr key={activity.id}>
                <td style={{ textAlign: "center" }}>{index + 1}</td>
                <td style={{ textAlign: "center" }}>{activity.tanggal}</td>
                <td style={{ textAlign: "center" }}>{activity.jam}</td>
                <td style={{ textAlign: "center" }}>{activity.user_id}</td>
                <td style={{ textAlign: "center" }}>
                  <img
                    src={activity.foto}
                    alt="Activity"
                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredActivities.length > itemsPerPage && (
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            {Array.from(
              { length: Math.ceil(filteredActivities.length / itemsPerPage) },
              (_, index) => (
                <li key={index} style={{ marginRight: "5px" }}>
                  <button
                    onClick={() => paginate(index + 1)}
                    style={{
                      background: "#00f",
                      color: "#fff",
                      padding: "7px 10px",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LogActivity;
