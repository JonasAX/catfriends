import 'tachyons'

export default function Card({id,name,email}) {
    return (
        <div className='tc dib shadow-5 grow br4 pa4 ma4 cardBack' >
            <img src={`https://robohash.org/${id}?set=set4`} alt="cats"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}