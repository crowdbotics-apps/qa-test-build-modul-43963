import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_appointment_local_appointment_list = createAsyncThunk(
  "appointments/modules_appointment_local_appointment_list",
  async payload => {
    const response = await apiService.modules_appointment_local_appointment_list(
      payload
    )
    return response.data
  }
)
export const modules_appointment_local_appointment_create = createAsyncThunk(
  "appointments/modules_appointment_local_appointment_create",
  async payload => {
    const response = await apiService.modules_appointment_local_appointment_create(
      payload
    )
    return response.data
  }
)
export const modules_appointment_local_appointment_retrieve = createAsyncThunk(
  "appointments/modules_appointment_local_appointment_retrieve",
  async payload => {
    const response = await apiService.modules_appointment_local_appointment_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_appointment_local_appointment_update = createAsyncThunk(
  "appointments/modules_appointment_local_appointment_update",
  async payload => {
    const response = await apiService.modules_appointment_local_appointment_update(
      payload
    )
    return response.data
  }
)
export const modules_appointment_local_appointment_partial_update = createAsyncThunk(
  "appointments/modules_appointment_local_appointment_partial_update",
  async payload => {
    const response = await apiService.modules_appointment_local_appointment_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_appointment_local_appointment_destroy = createAsyncThunk(
  "appointments/modules_appointment_local_appointment_destroy",
  async payload => {
    const response = await apiService.modules_appointment_local_appointment_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_appointment_local_appointment_list.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_list.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_retrieve.fulfilled,
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
        modules_appointment_local_appointment_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_destroy.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.filter(
              record => record.id !== action.meta.arg?.id
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_destroy.rejected,
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
  modules_appointment_local_appointment_list,
  modules_appointment_local_appointment_create,
  modules_appointment_local_appointment_retrieve,
  modules_appointment_local_appointment_update,
  modules_appointment_local_appointment_partial_update,
  modules_appointment_local_appointment_destroy,
  slice: appointmentsSlice
}
