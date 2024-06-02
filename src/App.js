import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import NewAppointmentPage from "./pages/Appointment";
import AuthenticationPage, {
  dummyAction as authAction,
} from "./pages/Authentication";
import DashboardPage from "./pages/DashboardPage";

// import PrevAppointmentsPage from "./pages/Appointments";
// import AppointmentDetailsPage from "./pages/AppointmentDetails";
// import EditAppointmentPage from "./pages/EditAppointment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "appointment",
        element: <NewAppointmentPage />,
      },
      { path: "auth", element: <AuthenticationPage />, action: authAction },
      { path: "dashboard", element: <DashboardPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
