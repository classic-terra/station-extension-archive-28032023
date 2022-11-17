import { useTranslation } from "react-i18next"
import ExtensionPage from "../components/ExtensionPage"
import ExportWalletForm from "auth/modules/manage/ExportWalletForm"
import GoHome from "./GoHome"

const ExportWalletPage = () => {
  const { t } = useTranslation()

  return (
    <ExtensionPage extra={<GoHome />} title={t("Export Wallet")}>
      <ExportWalletForm />
    </ExtensionPage>
  )
}

export default ExportWalletPage
