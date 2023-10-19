import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_appointment_local_meetings_information_list = createAsyncThunk(
  "meetingInformations/modules_appointment_local_meetings_information_list",
  async payload => {
    const response = await apiService.modules_appointment_local_meetings_information_list(
      payload
    )
    return response.data
  }
)
export const modules_appointment_local_meetings_information_create = createAsyncThunk(
  "meetingInformations/modules_appointment_local_meetings_information_create",
  async payload => {
    const response = await apiService.modules_appointment_local_meetings_information_create(
      payload
    )
    return response.data
  }
)
export const modules_appointment_local_meetings_information_retrieve = createAsyncThunk(
  "meetingInformations/modules_appointment_local_meetings_information_retrieve",
  async payload => {
    const response = await apiService.modules_appointment_local_meetings_information_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_appointment_local_meetings_information_update = createAsyncThunk(
  "meetingInformations/modules_appointment_local_meetings_information_update",
  async payload => {
    const response = await apiService.modules_appointment_local_meetings_information_update(
      payload
    )
    return response.data
  }
)
export const modules_appointment_local_meetings_information_partial_update = createAsyncThunk(
  "meetingInformations/modules_appointment_local_meetings_information_partial_update",
  async payload => {
    const response = await apiService.modules_appointment_local_meetings_information_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_appointment_local_meetings_information_destroy = createAsyncThunk(
  "meetingInformations/modules_appointment_local_meetings_information_destroy",
  async payload => {
    const response = await apiService.modules_appointment_local_meetings_information_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const meetingInformationsSlice = createSlice({
  name: "meetingInformations",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_appointment_local_meetings_information_list.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_meetings_information_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_meetings_information_list.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_meetings_information_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_meetings_information_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_meetings_information_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_meetings_information_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_meetings_information_retrieve.fulfilled,
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
        modules_appointment_local_meetings_information_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_meetings_information_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_meetings_information_update.fulfilled,
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
        modules_appointment_local_meetings_information_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_meetings_information_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_meetings_information_partial_update.fulfilled,
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
        modules_appointment_local_meetings_information_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_local_meetings_information_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_local_meetings_information_destroy.fulfilled,
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
        modules_appointment_local_meetings_information_destroy.rejected,
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
  modules_appointment_local_meetings_information_list,
  modules_appointment_local_meetings_information_create,
  modules_appointment_local_meetings_information_retrieve,
  modules_appointment_local_meetings_information_update,
  modules_appointment_local_meetings_information_partial_update,
  modules_appointment_local_meetings_information_destroy,
  slice: meetingInformationsSlice
}
