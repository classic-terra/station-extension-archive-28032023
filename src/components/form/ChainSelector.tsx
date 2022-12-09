import { useNetwork } from "data/wallet"
import { useEffect, useMemo, useState } from "react"
import styles from "./ChainSelector.module.scss"

interface Props {
  chainsList: string[]
  onChange: (chain: string) => void
}

const ChainSelector = ({ chainsList, onChange }: Props) => {
  const networks = useNetwork()
  const list = useMemo(
    () =>
      Object.values(networks)
        .filter((c) => chainsList.includes(c.chainID))
        .sort((a, b) => {
          if (a.name === "Terra") return -1
          if (b.name === "Terra") return 1
          return 0
        }),
    [networks, chainsList]
  )
  const [chain, setChain] = useState(list[0].chainID)

  useEffect(() => {
    setChain(list[0].chainID)
  }, [list])

  useEffect(() => {
    onChange(chain)
  }, [chain]) // eslint-disable-line

  return (
    <div className={styles.chain__selector}>
      {list.map(({ chainID, name }) => (
        <button
          className={chainID === chain ? styles.active : ""}
          key={chainID}
          onClick={(e) => {
            e.preventDefault()
            setChain(chainID)
          }}
        >
          {name}
        </button>
      ))}
    </div>
  )
}

export default ChainSelector
