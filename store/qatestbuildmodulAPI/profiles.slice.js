import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_profile_user_profile_list = createAsyncThunk(
  "profiles/modules_profile_user_profile_list",
  async payload => {
    const response = await apiService.modules_profile_user_profile_list(payload)
    return response.data
  }
)
export const modules_profile_user_profile_create = createAsyncThunk(
  "profiles/modules_profile_user_profile_create",
  async payload => {
    const response = await apiService.modules_profile_user_profile_create(
      payload
    )
    return response.data
  }
)
export const modules_profile_user_profile_retrieve = createAsyncThunk(
  "profiles/modules_profile_user_profile_retrieve",
  async payload => {
    const response = await apiService.modules_profile_user_profile_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_profile_user_profile_partial_update = createAsyncThunk(
  "profiles/modules_profile_user_profile_partial_update",
  async payload => {
    const response = await apiService.modules_profile_user_profile_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_profile_user_profile_destroy = createAsyncThunk(
  "profiles/modules_profile_user_profile_destroy",
  async payload => {
    const response = await apiService.modules_profile_user_profile_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(modules_profile_user_profile_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_profile_user_profile_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(modules_profile_user_profile_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(modules_profile_user_profile_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        modules_profile_user_profile_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_profile_user_profile_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_profile_user_profile_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_profile_user_profile_retrieve.fulfilled,
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
        modules_profile_user_profile_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_profile_user_profile_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_profile_user_profile_partial_update.fulfilled,
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
        modules_profile_user_profile_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_profile_user_profile_destroy.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_profile_user_profile_destroy.fulfilled,
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
        modules_profile_user_profile_destroy.rejected,
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
  modules_profile_user_profile_list,
  modules_profile_user_profile_create,
  modules_profile_user_profile_retrieve,
  modules_profile_user_profile_partial_update,
  modules_profile_user_profile_destroy,
  slice: profilesSlice
}
