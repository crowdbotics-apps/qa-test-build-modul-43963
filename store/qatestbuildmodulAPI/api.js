import axios from "axios"
const qatestbuildmodulAPI = axios.create({
  baseURL: "https://qa-test-build-modul-43963.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return qatestbuildmodulAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_get_users_list(payload) {
  return qatestbuildmodulAPI.get(`/api/v1/get_users/`)
}
function api_v1_login_create(payload) {
  return qatestbuildmodulAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return qatestbuildmodulAPI.post(`/api/v1/signup/`, payload)
}
function modules_appointment_local_appointment_list(payload) {
  return qatestbuildmodulAPI.get(`/modules/appointment-local/appointment/`)
}
function modules_appointment_local_appointment_create(payload) {
  return qatestbuildmodulAPI.post(
    `/modules/appointment-local/appointment/`,
    payload
  )
}
function modules_appointment_local_appointment_retrieve(payload) {
  return qatestbuildmodulAPI.get(
    `/modules/appointment-local/appointment/${payload.id}/`
  )
}
function modules_appointment_local_appointment_update(payload) {
  return qatestbuildmodulAPI.put(
    `/modules/appointment-local/appointment/${payload.id}/`,
    payload
  )
}
function modules_appointment_local_appointment_partial_update(payload) {
  return qatestbuildmodulAPI.patch(
    `/modules/appointment-local/appointment/${payload.id}/`,
    payload
  )
}
function modules_appointment_local_appointment_destroy(payload) {
  return qatestbuildmodulAPI.delete(
    `/modules/appointment-local/appointment/${payload.id}/`
  )
}
function modules_appointment_local_appointment_session_list(payload) {
  return qatestbuildmodulAPI.get(
    `/modules/appointment-local/appointment_session/`
  )
}
function modules_appointment_local_appointment_session_create(payload) {
  return qatestbuildmodulAPI.post(
    `/modules/appointment-local/appointment_session/`,
    payload
  )
}
function modules_appointment_local_appointment_session_retrieve(payload) {
  return qatestbuildmodulAPI.get(
    `/modules/appointment-local/appointment_session/${payload.id}/`
  )
}
function modules_appointment_local_appointment_session_update(payload) {
  return qatestbuildmodulAPI.put(
    `/modules/appointment-local/appointment_session/${payload.id}/`,
    payload
  )
}
function modules_appointment_local_appointment_session_partial_update(payload) {
  return qatestbuildmodulAPI.patch(
    `/modules/appointment-local/appointment_session/${payload.id}/`,
    payload
  )
}
function modules_appointment_local_appointment_session_destroy(payload) {
  return qatestbuildmodulAPI.delete(
    `/modules/appointment-local/appointment_session/${payload.id}/`
  )
}
function modules_appointment_local_meetings_information_list(payload) {
  return qatestbuildmodulAPI.get(
    `/modules/appointment-local/meetings-information/`
  )
}
function modules_appointment_local_meetings_information_create(payload) {
  return qatestbuildmodulAPI.post(
    `/modules/appointment-local/meetings-information/`,
    payload
  )
}
function modules_appointment_local_meetings_information_retrieve(payload) {
  return qatestbuildmodulAPI.get(
    `/modules/appointment-local/meetings-information/${payload.id}/`
  )
}
function modules_appointment_local_meetings_information_update(payload) {
  return qatestbuildmodulAPI.put(
    `/modules/appointment-local/meetings-information/${payload.id}/`,
    payload
  )
}
function modules_appointment_local_meetings_information_partial_update(
  payload
) {
  return qatestbuildmodulAPI.patch(
    `/modules/appointment-local/meetings-information/${payload.id}/`,
    payload
  )
}
function modules_appointment_local_meetings_information_destroy(payload) {
  return qatestbuildmodulAPI.delete(
    `/modules/appointment-local/meetings-information/${payload.id}/`
  )
}
function modules_articles_article_list(payload) {
  return qatestbuildmodulAPI.get(`/modules/articles/article/`)
}
function modules_articles_article_create(payload) {
  return qatestbuildmodulAPI.post(`/modules/articles/article/`, payload)
}
function modules_articles_article_retrieve(payload) {
  return qatestbuildmodulAPI.get(`/modules/articles/article/${payload.id}/`)
}
function modules_articles_article_update(payload) {
  return qatestbuildmodulAPI.put(
    `/modules/articles/article/${payload.id}/`,
    payload
  )
}
function modules_articles_article_partial_update(payload) {
  return qatestbuildmodulAPI.patch(
    `/modules/articles/article/${payload.id}/`,
    payload
  )
}
function modules_articles_article_destroy(payload) {
  return qatestbuildmodulAPI.delete(`/modules/articles/article/${payload.id}/`)
}
function modules_camera_photos_user_list(payload) {
  return qatestbuildmodulAPI.get(`/modules/camera/photos/user/`)
}
function modules_camera_photos_user_retrieve(payload) {
  return qatestbuildmodulAPI.get(`/modules/camera/photos/user/${payload.id}/`)
}
function modules_camera_upload_image_create(payload) {
  return qatestbuildmodulAPI.post(`/modules/camera/upload_image/`)
}
function modules_contact_us_contact_us_create(payload) {
  return qatestbuildmodulAPI.post(`/modules/contact-us/contact_us/`)
}
function modules_faq_list(payload) {
  return qatestbuildmodulAPI.get(`/modules/faq/`, {
    params: {
      page: payload.page,
      records: payload.records,
      search: payload.search
    }
  })
}
function modules_faq_create(payload) {
  return qatestbuildmodulAPI.post(`/modules/faq/`, payload)
}
function modules_faq_retrieve(payload) {
  return qatestbuildmodulAPI.get(`/modules/faq/${payload.id}/`)
}
function modules_faq_update(payload) {
  return qatestbuildmodulAPI.put(`/modules/faq/${payload.id}/`, payload)
}
function modules_faq_partial_update(payload) {
  return qatestbuildmodulAPI.patch(`/modules/faq/${payload.id}/`, payload)
}
function modules_faq_destroy(payload) {
  return qatestbuildmodulAPI.delete(`/modules/faq/${payload.id}/`)
}
function modules_flag_user_content_choice_list_retrieve(payload) {
  return qatestbuildmodulAPI.get(`/modules/flag-user-content/choice-list/`)
}
function modules_flag_user_content_create_report_create(payload) {
  return qatestbuildmodulAPI.post(`/modules/flag-user-content/create-report/`)
}
function modules_flag_user_content_reported_list_retrieve(payload) {
  return qatestbuildmodulAPI.get(`/modules/flag-user-content/reported-list/`)
}
function modules_payments_create_payment_intent_sheet_create(payload) {
  return qatestbuildmodulAPI.post(
    `/modules/payments/create_payment_intent_sheet/`
  )
}
function modules_payments_get_payments_history_retrieve(payload) {
  return qatestbuildmodulAPI.get(`/modules/payments/get_payments_history/`)
}
function modules_payments_get_payments_methods_retrieve(payload) {
  return qatestbuildmodulAPI.get(`/modules/payments/get_payments_methods/`)
}
function modules_privacy_policy_list(payload) {
  return qatestbuildmodulAPI.get(`/modules/privacy-policy/`)
}
function modules_privacy_policy_create(payload) {
  return qatestbuildmodulAPI.post(`/modules/privacy-policy/`, payload)
}
function modules_privacy_policy_retrieve(payload) {
  return qatestbuildmodulAPI.get(`/modules/privacy-policy/${payload.id}/`)
}
function modules_privacy_policy_update(payload) {
  return qatestbuildmodulAPI.put(
    `/modules/privacy-policy/${payload.id}/`,
    payload
  )
}
function modules_privacy_policy_partial_update(payload) {
  return qatestbuildmodulAPI.patch(
    `/modules/privacy-policy/${payload.id}/`,
    payload
  )
}
function modules_privacy_policy_destroy(payload) {
  return qatestbuildmodulAPI.delete(`/modules/privacy-policy/${payload.id}/`)
}
function modules_profile_user_profile_list(payload) {
  return qatestbuildmodulAPI.get(`/modules/profile/user-profile/`)
}
function modules_profile_user_profile_create(payload) {
  return qatestbuildmodulAPI.post(`/modules/profile/user-profile/`, payload)
}
function modules_profile_user_profile_retrieve(payload) {
  return qatestbuildmodulAPI.get(`/modules/profile/user-profile/${payload.id}/`)
}
function modules_profile_user_profile_partial_update(payload) {
  return qatestbuildmodulAPI.patch(
    `/modules/profile/user-profile/${payload.id}/`,
    payload
  )
}
function modules_profile_user_profile_destroy(payload) {
  return qatestbuildmodulAPI.delete(
    `/modules/profile/user-profile/${payload.id}/`
  )
}
function modules_qr_code_qrcode_create(payload) {
  return qatestbuildmodulAPI.post(`/modules/qr-code/qrcode/`)
}
function modules_signature_signature_list(payload) {
  return qatestbuildmodulAPI.get(`/modules/signature/signature/`)
}
function modules_signature_signature_retrieve(payload) {
  return qatestbuildmodulAPI.get(`/modules/signature/signature/${payload.id}/`)
}
function modules_signature_upload_signature_create(payload) {
  return qatestbuildmodulAPI.post(`/modules/signature/upload_signature/`)
}
function modules_terms_and_conditions_list(payload) {
  return qatestbuildmodulAPI.get(`/modules/terms-and-conditions/`)
}
function modules_terms_and_conditions_create(payload) {
  return qatestbuildmodulAPI.post(`/modules/terms-and-conditions/`, payload)
}
function modules_terms_and_conditions_retrieve(payload) {
  return qatestbuildmodulAPI.get(`/modules/terms-and-conditions/${payload.id}/`)
}
function modules_terms_and_conditions_update(payload) {
  return qatestbuildmodulAPI.put(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload
  )
}
function modules_terms_and_conditions_partial_update(payload) {
  return qatestbuildmodulAPI.patch(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload
  )
}
function modules_terms_and_conditions_destroy(payload) {
  return qatestbuildmodulAPI.delete(
    `/modules/terms-and-conditions/${payload.id}/`
  )
}
function modules_two_factor_authentication_enable_2fa_retrieve(payload) {
  return qatestbuildmodulAPI.get(
    `/modules/two-factor-authentication/enable/2fa`
  )
}
function modules_two_factor_authentication_enable_2fa_create(payload) {
  return qatestbuildmodulAPI.post(
    `/modules/two-factor-authentication/enable/2fa`
  )
}
function modules_two_factor_authentication_enable_2fa_destroy(payload) {
  return qatestbuildmodulAPI.delete(
    `/modules/two-factor-authentication/enable/2fa`
  )
}
function modules_two_factor_authentication_google_authenticator_qr_retrieve(
  payload
) {
  return qatestbuildmodulAPI.get(
    `/modules/two-factor-authentication/google/authenticator/qr`
  )
}
function modules_two_factor_authentication_send_otp_create(payload) {
  return qatestbuildmodulAPI.post(`/modules/two-factor-authentication/send/otp`)
}
function modules_two_factor_authentication_verify_otp_create(payload) {
  return qatestbuildmodulAPI.post(
    `/modules/two-factor-authentication/verify/otp`
  )
}
function modules_two_factor_authentication_verify_otp_create_2(payload) {
  return qatestbuildmodulAPI.post(
    `/modules/two-factor-authentication/verify/otp/${payload.enable}`
  )
}
function rest_auth_login_create(payload) {
  return qatestbuildmodulAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return qatestbuildmodulAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return qatestbuildmodulAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return qatestbuildmodulAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return qatestbuildmodulAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return qatestbuildmodulAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return qatestbuildmodulAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return qatestbuildmodulAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return qatestbuildmodulAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return qatestbuildmodulAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return qatestbuildmodulAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_get_users_list,
  api_v1_login_create,
  api_v1_signup_create,
  modules_appointment_local_appointment_list,
  modules_appointment_local_appointment_create,
  modules_appointment_local_appointment_retrieve,
  modules_appointment_local_appointment_update,
  modules_appointment_local_appointment_partial_update,
  modules_appointment_local_appointment_destroy,
  modules_appointment_local_appointment_session_list,
  modules_appointment_local_appointment_session_create,
  modules_appointment_local_appointment_session_retrieve,
  modules_appointment_local_appointment_session_update,
  modules_appointment_local_appointment_session_partial_update,
  modules_appointment_local_appointment_session_destroy,
  modules_appointment_local_meetings_information_list,
  modules_appointment_local_meetings_information_create,
  modules_appointment_local_meetings_information_retrieve,
  modules_appointment_local_meetings_information_update,
  modules_appointment_local_meetings_information_partial_update,
  modules_appointment_local_meetings_information_destroy,
  modules_articles_article_list,
  modules_articles_article_create,
  modules_articles_article_retrieve,
  modules_articles_article_update,
  modules_articles_article_partial_update,
  modules_articles_article_destroy,
  modules_camera_photos_user_list,
  modules_camera_photos_user_retrieve,
  modules_camera_upload_image_create,
  modules_contact_us_contact_us_create,
  modules_faq_list,
  modules_faq_create,
  modules_faq_retrieve,
  modules_faq_update,
  modules_faq_partial_update,
  modules_faq_destroy,
  modules_flag_user_content_choice_list_retrieve,
  modules_flag_user_content_create_report_create,
  modules_flag_user_content_reported_list_retrieve,
  modules_payments_create_payment_intent_sheet_create,
  modules_payments_get_payments_history_retrieve,
  modules_payments_get_payments_methods_retrieve,
  modules_privacy_policy_list,
  modules_privacy_policy_create,
  modules_privacy_policy_retrieve,
  modules_privacy_policy_update,
  modules_privacy_policy_partial_update,
  modules_privacy_policy_destroy,
  modules_profile_user_profile_list,
  modules_profile_user_profile_create,
  modules_profile_user_profile_retrieve,
  modules_profile_user_profile_partial_update,
  modules_profile_user_profile_destroy,
  modules_qr_code_qrcode_create,
  modules_signature_signature_list,
  modules_signature_signature_retrieve,
  modules_signature_upload_signature_create,
  modules_terms_and_conditions_list,
  modules_terms_and_conditions_create,
  modules_terms_and_conditions_retrieve,
  modules_terms_and_conditions_update,
  modules_terms_and_conditions_partial_update,
  modules_terms_and_conditions_destroy,
  modules_two_factor_authentication_enable_2fa_retrieve,
  modules_two_factor_authentication_enable_2fa_create,
  modules_two_factor_authentication_enable_2fa_destroy,
  modules_two_factor_authentication_google_authenticator_qr_retrieve,
  modules_two_factor_authentication_send_otp_create,
  modules_two_factor_authentication_verify_otp_create,
  modules_two_factor_authentication_verify_otp_create_2,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
