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
  Box,
  Typography,
} from "@mui/material";
import {
  DeleteForever,
  Edit,
  Paid,
  ExpandMore,
  ExpandLess,
  Folder,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setApartmentEditModalState } from "../../../features/apartment/ApartmentEditSlice";
import axios from "axios";
import { BASE_URL, EURO_SYMBOL } from "../../../utils/consts";
import moment from "moment";
import AdmPaymentModal from "./AdmPaymentModal";

const apiPath = "/api/v1/sales";

const folder = [
  'A',
  'B',
  'C',
  'DE',
  'F',
  'ABC',
]
const AdmSalesTable = () => {
  const dispatch = useDispatch();
  const [salesData, setSalesData] = useState([]);
  const [selectedSale, setSelectedSale] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedRows, setExpandedRows] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState('A');

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
    <Box mt={2} sx={{ maxWidth: '100%', overflow: 'hidden'}}>
      <Box sx={{display: 'flex', gap: 1}}>
        {folder.map((item, inx) => {
          return (
            <Box onClick={() => setSelectedFolder(item)} sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              p: 1,
              border: '1px solid #DDD',
              borderRadius: '12px',
              px: 2,
              cursor: 'pointer',
              bgcolor: selectedFolder === item ? 'lightgray' : 'transparent',
              ":hover": {
                bgcolor: 'lightgray'
              }
            }}>
              <Folder fontSize="small" sx={{color: 'orange'}}/>
              <Typography variant="caption">Objekti {item}</Typography>
            </Box>
          )
        })}
      </Box>
      <TableContainer sx={{ overflow: "auto", marginTop: "15px", maxWidth: '90%'  }}>
        <Table stickyHeader sx={{maxWidth: '70%', overflow: 'auto'}}>
          <TableHead >
            <TableRow sx={{
              '> *': {
                textWrap: 'nowrap'
              }
            }}>
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
                REF / NR
              </TableCell>
              <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
                LRB / NR
              </TableCell>
              <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
                Numri Parkingut
              </TableCell>
              <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
                Cmimi Parkingut
              </TableCell>
              <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
                Numri Depos
              </TableCell>
              <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
                Sip. Depos
              </TableCell>
              <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
                Cmimi / m2 Depos
              </TableCell>
              <TableCell sx={{ bgcolor: "#1d1d3a", color: "white" }}>
                Cmimi total Depos
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

              if(item.building === selectedFolder) {
                return (
                  <React.Fragment key={index}>
                    <TableRow>
                      <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                        {index + 1}
                      </TableCell>
                      <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                        {item.clientName}
                      </TableCell>
                      <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                        {}
                      </TableCell>
                      <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                        {item.apartmentName}
                      </TableCell>
                      <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                        {item.refNr}
                      </TableCell>
                      <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                        {item.lrpNr}
                      </TableCell>
                      <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                        {item.parkingNumber}
                      </TableCell>
                      <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                        {item.parkingPrice}{EURO_SYMBOL}
                      </TableCell>
                      <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                        {item.warehouseNumber}
                      </TableCell>
                      <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                        {item.warehouseSquare}m<sup>2</sup>
                      </TableCell>
                      <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                        {item.warehousePricePerSquare}{EURO_SYMBOL}/m<sup>2</sup>
                      </TableCell>
                      <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                        {item.warehouseTotalPrice}{EURO_SYMBOL}
                      </TableCell>
                      <TableCell sx={{ p: 0, pl: "5px", py: "5px" }}>
                        {item.total}{EURO_SYMBOL}
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
                      <TableCell sx={{ p: 0, pl: "5px", py: "5px", display: 'flex' }}>
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
                            .sort(
                              (a, b) => new Date(a.paidAt) - new Date(b.paidAt)
                            )
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
              }
            })}
          </TableBody>
          <AdmPaymentModal
            open={isModalOpen}
            onClose={handleCloseModal}
            sale={selectedSale}
          />
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdmSalesTable;
