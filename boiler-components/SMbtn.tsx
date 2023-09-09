type def={
    click:any,
    val:string
}
let styles={
    width:"100px",
    padding:"10px",
    marginTop:"20px",
    textalign:"right",
    backgroundColor:"blue",
    color:"white",
};
export default function MYbtns(mydata:def){
    return(
        <button className="btns" style={styles} onClick={mydata.click}>{mydata.val}</button>
    )
}

