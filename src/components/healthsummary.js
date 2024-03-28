import report from '../reports.png'
export default function Healthfun(){
    return(
    <div className="sub-1">
        <top className="sub-head"><p className="sub-heading">Health Summary <k style={{fontSize:20,color:'grey'}}>show : </k><k className="this">This month ↓</k></p><img src={report}/></top>
        <bottom style={{display:'flex',flexDirection:'row',justifyContent: 'space-between'}}>
            <div style={{height:300,width:300,display:'flex',flexDirection:'column',padding:5,justifyContent: 'center',alignItems: 'center'}}>
                    <p style={{fontSize:20,fontWeight:'bold'}}>Security Score</p>
                    <div className="one-back">
                        <diV className="one-mid">
                                900
                                <br>
                                </br>
                                Exellent
                        </diV>
                    </div>
            </div>
            <div style={{height:300,width:300,display:'flex',flexDirection:'column',padding:5,justifyContent: 'center',alignItems: 'center'}}>
                    <p style={{fontSize:20}}>web 2.0 Domain</p>
                    <div className="one-back-2">
                        <diV className="one-mid-2">
                                100%
                                <br>
                                </br>
                                safe
                        </diV>
                    </div>
            </div>
            <div style={{height:300,width:300,display:'flex',flexDirection:'column',padding:5,justifyContent: 'center',alignItems: 'center'}}>
                    <p style={{fontSize:20}}>web 3.0 Domain</p>
                    <div className="one-back-3">
                        <diV className="one-mid-3">
                        100%
                                <br>
                                </br>
                                safe
                        </diV>
                    </div>
            </div>
            <div style={{height:300,width:300,display:'flex',flexDirection:'column',padding:5,justifyContent: 'center',alignItems: 'center'}}>
                    <p style={{fontSize:20}}>Social Accounts</p>
                    <div className="one-back-4">
                        <diV className="one-mid-4">
                        100%
                                <br>
                                </br>
                                safe
                        </diV>
                    </div>
            </div>
        </bottom>
    </div>
    )
}