import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Device from "../pages/device";
import Vendor from "../pages/vendor";

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="devices" element={<Device />} />
        <Route path="vendors" element={<Vendor />} />
      </Route>
    </Routes>
  </div>
);

export default App;
