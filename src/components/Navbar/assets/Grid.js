
const Grid = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" viewBox="0 0 24 24" fill={props.color ? props.color : 'none' } stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-grid ${props.bindedClass}`}><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
    )
}
export default Grid