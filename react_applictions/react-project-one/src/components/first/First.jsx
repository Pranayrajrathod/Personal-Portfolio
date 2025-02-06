import '/react applictions/react-project-one/src/components/first/First.css'

function First(){
    let obj={
        sname:'ravikula',
        fname:'rajesh',
        sal:20000,
        country:"india",
    }
    return (
        <div className='heading'>
            <h1>hi team,  ready to start ?</h1>
            <h2>cheppu ra</h2>
            <h2>object salary : {obj.sal}</h2>
            <h3>object first name : {obj.sname}</h3>
            <h3>object second naem : {obj.fname}</h3>
        </div>
    )
}
export default First;