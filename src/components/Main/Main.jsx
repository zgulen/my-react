import "./Main.scss"
import Card from "./Card"

const Main = ( { data } ) => {
  return (
    <div className="card-container">
        {
            data.map((items) => <Card/>)
        }
    </div>
  )
}

export default Main