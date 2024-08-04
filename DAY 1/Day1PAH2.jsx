function primitive(){
    let age=18;
    let name="Kiran";
    let setStatus=false;
    let userDefault=undefined;
    let responseValue=null;
    console.log(age,name);
    alert("Check the console output");

}

function Appil(){
    return(
        <div className="Appil">
            <button onClick={primitive}>PAH</button><br></br>
        </div>
    )
}
export default Appil;