import { useTranslation } from "react-i18next"
import DescriptionIcon from "@mui/icons-material/Description"
import { TUTORIAL } from "config/constants"
import { useIsClassic } from "data/query"
import { ExternalLink } from "components/general"
import { Contacts } from "components/layout"
import styles from "./Links.module.scss"

const Links = () => {
  const { t } = useTranslation()
  const isClassic = useIsClassic()

  const community = isClassic
    ? {
        discord: "https://discord.com/terracvita",
        telegram: "https://t.me/TerracVitaCommunity",
        twitter: "https://twitter.com/terracvita",
      }
    : {
        medium: "https://medium.com/terracvita",
        discord: "https://discord.com/terracvita",
        telegram: "https://t.me/TerracVitaCommunity",
        twitter: "https://twitter.com/terracvita",
        github: "https://github.com/classic-terra",
      }

  return (
    <div className={styles.links}>
      <div className={styles.tutorial}>
        <ExternalLink href={TUTORIAL} className={styles.link}>
          <DescriptionIcon style={{ fontSize: 18 }} />
          {t("Tutorial")}
        </ExternalLink>
      </div>

      <div className={styles.community}>
        <Contacts contacts={community} menu />
      </div>
    </div>
  )
}

export default Links
