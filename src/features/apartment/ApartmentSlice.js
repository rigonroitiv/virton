import { createSlice } from "@reduxjs/toolkit";
import { fetchApartmentAllData, fetchApartmentsAll, fetchApartmentsAllOrderByApartmentId, getApartmentById, getApartmentsSvgDataAll, getObjectSvgDataAll } from "./ApartmentAPI";

const initialState = {
    apartmentUrlParamId: '',
    apartmentDetailModalState: false,
    apartmentDetailModalData: {},
    apartmentSvgData: [],
    apartmentAndBuildingData: [],
    status: 'idle',
    msg: '',
    apartmentIdModalState: false,
    apartmentIdModalId: null,
    apartmentIdModalApartmentId: null,
    allData: []
}

const ApartmentSlice = createSlice({
    name: 'ApartmentSlice',
    initialState,
    reducers: {
        setApartmentUrlParamId: (state, action) => {
            state.apartmentUrlParamId = action.payload;
        },
        setApartmentDetailModalState(state, action) {
            state.apartmentDetailModalState = action.payload;
        },
        setApartmentDetailModalData(state, action) {
            state.apartmentDetailModalData = action.payload;
        },
        resetStatusAndMsg(state) {
            state.msg = '';
            state.status = 'idle';
        },
        resetApartmentsData(state) {
            state.apartmentAndBuildingData = [];
            state.apartmentSvgData = []
        },
        setApartmentIdModalState(state, action) {
            state.apartmentIdModalState = action.payload;
        },
        setApartmentIdModalId(state, action) {
            state.apartmentIdModalId = action.payload;
        },
        setApartmentIdModalApartmentId(state, action) {
            state.apartmentIdModalApartmentId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
                .addCase(getObjectSvgDataAll.pending , (state) => {
                    state.status = 'pending';
                })
               .addCase(getObjectSvgDataAll.fulfilled , (state, action) => {
                    state.status = 'success';
                    state.apartmentSvgData = action.payload;
               })
               .addCase(getObjectSvgDataAll.rejected , (state, action) => {
                    state.status = 'rejected';
                    state.msg = action.payload;
               })

               // getApartmentById
               .addCase(getApartmentById.pending , (state) => {
                state.status = 'pending';
                })
                .addCase(getApartmentById.fulfilled , (state, action) => {
                    state.status = 'success';
                    state.apartmentDetailModalData = action.payload;
                })
                .addCase(getApartmentById.rejected , (state, action) => {
                    state.status = 'rejected';
                    state.msg = action.payload;
                })

                // getApartmentsSvgDataAll
               .addCase(getApartmentsSvgDataAll.pending , (state) => {
                    state.status = 'pending';
               })
               .addCase(getApartmentsSvgDataAll.fulfilled , (state, action) => {
                    state.status = 'success';
                    state.apartmentAndBuildingData = action.payload;
               })
               .addCase(getApartmentsSvgDataAll.rejected , (state, action) => {
                    state.status = 'rejected';
                    state.msg = action.payload;
               })
               .addCase(fetchApartmentAllData.pending , (state) => {  
                    state.status = 'pending';
               })
                .addCase(fetchApartmentAllData.fulfilled , (state, action) => {
                      state.status = 'success';
                      state.allData = action.payload;
                })
                .addCase(fetchApartmentAllData.rejected , (state, action) => {
                      state.status = 'rejected';
                      state.msg = action.payload;
                })
                .addCase(fetchApartmentsAllOrderByApartmentId.pending , (state) => {  
                    state.status = 'pending';
               })
                .addCase(fetchApartmentsAllOrderByApartmentId.fulfilled , (state, action) => {
                      state.status = 'success';
                      state.allData = action.payload;
                })
                .addCase(fetchApartmentsAllOrderByApartmentId.rejected , (state, action) => {
                      state.status = 'rejected';
                      state.msg = action.payload;
                })
                .addCase(fetchApartmentsAll.pending , (state) => {
                    state.status = 'pending';
                })
                .addCase(fetchApartmentsAll.fulfilled , (state, action) => {
                    state.status = 'success';
                    state.apartmentSvgData = action.payload;
                })
                .addCase(fetchApartmentsAll.rejected , (state, action) => {
                    state.status = 'rejected';
                    state.msg = action.payload;
                })

    }
})
export const { 

    setApartmentUrlParamId,
    setApartmentDetailModalData,
    setApartmentDetailModalState,
    resetStatusAndMsg,
    setApartmentIdModalState,
    setApartmentIdModalId,
    setApartmentIdModalApartmentId

} = ApartmentSlice.actions;

export const getApartmentUrlParamId = (state) => state.ApartmentSlice.apartmentUrlParamId;
export const getApartmentDetailModalState = (state) => state.ApartmentSlice.apartmentDetailModalState;
export const getApartmentDetailModalData = (state) => state.ApartmentSlice.apartmentDetailModalData;
export const getAllApartmentSvgData = (state) => state.ApartmentSlice.apartmentSvgData;
export const getAllBuildingAndApartmentsData = (state) => state.ApartmentSlice.apartmentAndBuildingData;
export const getApartmentStatus = (state) => state.ApartmentSlice.status;
export const getApartmentIdModalState = (state) => state.ApartmentSlice.apartmentIdModalState;
export const getApartmentIdModalId = (state) => state.ApartmentSlice.apartmentIdModalId;
export const getApartmentIdModalApartmentId = (state) => state.ApartmentSlice.apartmentIdModalApartmentId;
export const getApartmentMsg = (state) => state.ApartmentSlice.msg;
export const getApartmentAllData = (state) => state.ApartmentSlice.allData;

export default ApartmentSlice.reducer;