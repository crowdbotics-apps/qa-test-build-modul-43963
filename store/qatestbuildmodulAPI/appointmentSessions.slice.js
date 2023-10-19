import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_appointment_local_appointment_session_list = createAsyncThunk(
  "appointmentSessions/modules_appointment_local_appointment_session_list",
  async payload => {
    const response = await apiService.modules_appointment_local_appointment_session_list(
      payload
    )
    return response.data
  }
)
export const modules_appointment_local_appointment_session_create = createAsyncThunk(
  "appointmentSessions/modules_appointment_local_appointment_session_create",
  async payload => {
    const response = await apiService.modules_appointment_local_appointment_session_create(
      payload
    )
    return response.data
  }
)
export const modules_appointment_local_appointment_session_retrieve = createAsyncThunk(
  "appointmentSessions/modules_appointment_local_appointment_session_retrieve",
  async payload => {
    const response = await apiService.modules_appointment_local_appointment_session_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_appointment_local_appointment_session_update = createAsyncThunk(
  "appointmentSessions/modules_appointment_local_appointment_session_update",
  async payload => {
    const response = await apiService.modules_appointment_local_appointment_session_update(
      payload
    )
    return response.data
  }
)
export const modules_appointment_local_appointment_session_partial_update = createAsyncThunk(
  "appointmentSessions/modules_appointment_local_appointment_session_partial_update",
  async payload => {
    const response = await apiService.modules_appointment_local_appointment_session_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_appointment_local_appointment_session_destroy = createAsyncThunk(
  "appointmentSessions/modules_appointment_local_appointment_session_destroy",
  async payload => {
    const response = await apiService.modules_appointment_local_appointment_session_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const appointmentSessionsSlice = createSlice({
  name: "appointmentSessions",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_appointment_local_appointment_session_list.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_session_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_session_list.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_session_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_session_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_session_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_session_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_session_retrieve.fulfilled,
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
        modules_appointment_local_appointment_session_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_session_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_session_update.fulfilled,
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
        modules_appointment_local_appointment_session_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_session_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_session_partial_update.fulfilled,
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
        modules_appointment_local_appointment_session_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_session_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_appointment_session_destroy.fulfilled,
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
        modules_appointment_local_appointment_session_destroy.rejected,
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
  modules_appointment_local_appointment_session_list,
  modules_appointment_local_appointment_session_create,
  modules_appointment_local_appointment_session_retrieve,
  modules_appointment_local_appointment_session_update,
  modules_appointment_local_appointment_session_partial_update,
  modules_appointment_local_appointment_session_destroy,
  slice: appointmentSessionsSlice
}
