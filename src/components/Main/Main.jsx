import "./Main.scss"
import Card from "./Card"

const Main = ( { data } ) => {
  return (
    <div className="card-container">
        {
            data.map((items,index) => <Card {...items}  key={index}/>)
        }
    </div>
  )
}

export default Main