import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
} from "@mui/material";
import {
  DeleteForever,
  Edit,
  Paid,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setApartmentEditModalState } from "../../../features/apartment/ApartmentEditSlice";
import axios from "axios";
import { BASE_URL, EURO_SYMBOL } from "../../../utils/consts";
import moment from "moment";
import AdmPaymentModal from "./AdmPaymentModal";

const apiPath = "/api/v1/sales";

const AdmSalesTable = () => {
  const dispatch = useDispatch();
  const [salesData, setSalesData] = useState([]);
  const [selectedSale, setSelectedSale] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedRows, setExpandedRows] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (saleItem) => {
    setSelectedSale(saleItem);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedSale(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios.get(`${BASE_URL}${apiPath}`).then((res) => {
      setSalesData(res.data);
    });
  }, []);

  const toggleRow = (index) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <TableContainer style={{ overflow: "auto", marginTop: "15px" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
              Nr
            </TableCell>
            <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
              Klienti
            </TableCell>
            <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
              Pershkrimi
            </TableCell>
            <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
              Banesa
            </TableCell>
            <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
              Totali
            </TableCell>
            <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
              Data
            </TableCell>
            <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
              Pagoi
            </TableCell>
            <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
              Mbetje
            </TableCell>
            <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
              Veprimet
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {salesData.map((item, index) => {
            const isExpanded = expandedRows[index] || false;

            return (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                    {item.clientName}
                  </TableCell>
                  <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>{}</TableCell>
                  <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                    {item.apartmentName}
                  </TableCell>
                  <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                    {item.total}
                  </TableCell>
                  <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                    {moment(item.createdAt).format("DD-MM-yyyy")}
                  </TableCell>
                  <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                    {item.paid}
                    {EURO_SYMBOL}
                  </TableCell>
                  <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                    {item.remainingAmount}
                    {EURO_SYMBOL}
                  </TableCell>
                  <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                    <IconButton
                      onClick={() => handleOpenModal(item)}
                      color="primary"
                      size="small"
                    >
                      <Paid />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        dispatch(setApartmentEditModalState(true));
                      }}
                      color="warning"
                      size="small"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton color="error" size="small">
                      <DeleteForever />
                    </IconButton>
                    <IconButton onClick={() => toggleRow(index)} size="small">
                      {isExpanded ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={9}
                  >
                    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                      {item?.payments
                        .slice()
                        .sort((a, b) => new Date(a.paidAt) - new Date(b.paidAt))
                        .map((payment, idx) => (
                          <TableRow key={idx}>
                            <TableCell colSpan={4}>
                              <p style={{ textWrap: "nowrap" }}>
                                Kesti : {idx + 1}
                              </p>
                            </TableCell>
                            <TableCell colSpan={4}>
                              <p style={{ textWrap: "nowrap" }}>
                                Shuma e paguar: {payment.amount}
                                {EURO_SYMBOL}
                              </p>
                            </TableCell>
                            <TableCell colSpan={4}>
                              <p style={{ textWrap: "nowrap" }}>
                                Data e pageses:{" "}
                                {moment(payment.paidAt).format(
                                  "DD-MM-yyyy HH:mm:ss"
                                )}
                              </p>
                            </TableCell>
                          </TableRow>
                        ))}
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            );
          })}
        </TableBody>
        <AdmPaymentModal
          open={isModalOpen}
          onClose={handleCloseModal}
          sale={selectedSale}
        />
      </Table>
    </TableContainer>
  );
};

export default AdmSalesTable;
