import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_signature_signature_list = createAsyncThunk(
  "signatures/modules_signature_signature_list",
  async payload => {
    const response = await apiService.modules_signature_signature_list(payload)
    return response.data
  }
)
export const modules_signature_signature_retrieve = createAsyncThunk(
  "signatures/modules_signature_signature_retrieve",
  async payload => {
    const response = await apiService.modules_signature_signature_retrieve(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const signaturesSlice = createSlice({
  name: "signatures",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(modules_signature_signature_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_signature_signature_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(modules_signature_signature_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        modules_signature_signature_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_signature_signature_retrieve.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_signature_signature_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  modules_signature_signature_list,
  modules_signature_signature_retrieve,
  slice: signaturesSlice
}
