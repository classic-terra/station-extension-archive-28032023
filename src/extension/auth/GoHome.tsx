import { Link } from "react-router-dom"
import { ReactComponent as LeftArrowIcon } from "styles/images/icons/LeftArrow.svg"
import styles from "./GoHome.module.scss"

const GoHome = () => {
  return (
    <Link to="/" className={styles.link}>
      <LeftArrowIcon />
    </Link>
  )
}

export default GoHome
