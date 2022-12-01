import { useTranslation } from "react-i18next"
import ExtensionPage from "../components/ExtensionPage"
import ChangePasswordForm from "auth/modules/manage/ChangePasswordForm"
import GoHome from "./GoHome"

const ChangePasswordPage = () => {
  const { t } = useTranslation()

  return (
    <ExtensionPage extra={<GoHome />} title={t("Change Password")}>
      <ChangePasswordForm />
    </ExtensionPage>
  )
}

export default ChangePasswordPage
