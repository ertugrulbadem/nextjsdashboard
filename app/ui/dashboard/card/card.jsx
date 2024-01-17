import { MdSupervisedUserCircle } from "react-icons/md"
import style from "./card.module.css"

function Card() {
  return (
    <div className={style.container}>
      <MdSupervisedUserCircle size={24}/>
      <div className={style.texts}>
        <span className={style.title}>Total Users</span>
        <span className={style.number}>10.273</span>
        <span className={style.details}><span className={style.positive}>12%</span>more than previous week</span>
      </div>
    </div>
  )
}

export default Card
