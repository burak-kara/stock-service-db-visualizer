import React, { useEffect, useState } from "react";
import { DeviceDto } from "./dto";
import Table from "../../components/table";

const Device = () => {
  const [devices, setDevices] = useState<DeviceDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(process.env.REACT_APP_API_URL + "/device/get/all")
      .then((response) => response.json())
      .then((data) => {
        const modifiedData = data?.map((device: DeviceDto) => ({
          ...device,
          createdAt: new Date(device.createdAt).toLocaleString("tr-TR"),
          updatedAt: new Date(device.updatedAt).toLocaleString("tr-TR"),
        }));
        setDevices(modifiedData);
        setLoading(false);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Device ID",
        accessor: "deviceID",
      },
      {
        Header: "Created At",
        accessor: "createdAt",
      },
      {
        Header: "Updated At",
        accessor: "updatedAt",
      },
      {
        Header: "Softener Amount",
        accessor: "softener",
      },
      {
        Header: "Detergent Amount",
        accessor: "detergent",
      },
    ],
    []
  );

  return (
    <div className="w-full px-24 py-12">
      {loading || !devices.length ? (
        <div>Loading...</div>
      ) : (
        <Table columns={columns} data={devices} />
      )}
    </div>
  );
};

export default Device;
