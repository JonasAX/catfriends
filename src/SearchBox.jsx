import 'tachyons'
export default function SearchBox({onSearch}) {
    return (
        <div className='tc' >
            <input 
                type="search" 
                onInput={onSearch} 
                className='pa3 br3 ma3 b--light-purple bg-light-pink'
                placeholder='Search for cats...'
            />
        </div>
    )
}