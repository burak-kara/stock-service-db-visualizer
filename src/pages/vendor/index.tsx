import React, { useEffect, useState } from "react";
import { VendorDto } from "./dto";
import Table from "../../components/table";

const Vendor = () => {
  const [vendors, setVendors] = useState<VendorDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(process.env.REACT_APP_API_URL + "/vendor/get/all")
      .then((response) => response.json())
      .then((data) => {
        const modifiedData = data?.map((vendor: VendorDto) => ({
          ...vendor,
          createdAt: new Date(vendor.createdAt).toLocaleString("tr-TR"),
          updatedAt: new Date(vendor.updatedAt).toLocaleString("tr-TR"),
        }));
        setVendors(modifiedData);
        setLoading(false);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Vendor ID",
        accessor: "vendorID",
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
      {loading || !vendors.length ? (
        <div>Loading...</div>
      ) : (
        <Table columns={columns} data={vendors} />
      )}
    </div>
  );
};

export default Vendor;
