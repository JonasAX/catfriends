import Card from './Card'
// import {robots} from './robots'

export default function CardList({robots}) {
    return (
        robots.map((u,i) => {
            return <Card key={i} name={robots[i].name} email={robots[i].email} id={robots[i].id}  />
        })            
    )
}