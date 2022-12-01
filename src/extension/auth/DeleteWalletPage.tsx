import { useTranslation } from "react-i18next"
import ExtensionPage from "../components/ExtensionPage"
import DeleteWalletForm from "auth/modules/manage/DeleteWalletForm"
import GoHome from "./GoHome"

const DeleteWalletPage = () => {
  const { t } = useTranslation()

  return (
    <ExtensionPage extra={<GoHome />} title={t("Delete Wallet")}>
      <DeleteWalletForm />
    </ExtensionPage>
  )
}

export default DeleteWalletPage
