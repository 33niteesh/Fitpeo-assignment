import './App.css';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import GridViewIcon from '@mui/icons-material/GridView';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddCardIcon from '@mui/icons-material/AddCard';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import KeyIcon from '@mui/icons-material/Key';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GradeIcon from '@mui/icons-material/Grade';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import HelpIcon from '@mui/icons-material/Help';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function App() {
  const graph = [{ val: 20, month: 'jan' }, { val: 30, month: 'feb' }, { val: 40, month: 'mar' }, { val: 10, month: "apr" }, { val: 5, month: "may" }, { val: 60, month: "jun" }, { val: 100, month: 'jul' }, { val: 50, month: "aug" }, { val: 30, month: "sep" }, { val: 10, month: "oct" }, { val: 10, month: 'nov' }, { val: 90, month: 'dec' }];
  
function createData(img,name, calories, fat, carbs, protein) {
  return { img,name, calories, fat, carbs, protein };
}

const rows = [
  createData("https://jpeg.org/images/jpeg-home.jpg",'Abstract 3d', 159, 6.0, 24),
  createData("https://photographylife.com/wp-content/uploads/2018/11/Moeraki-Boulders-New-Zealand.jpg",'Dashcam', 237, 9.0, 37),
  createData("https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2021/01/953dec08960728c898bb15963725d512.jpg",'Eclair', 262, 16.0, 24),
  createData("https://fileinfo.com/img/ss/xl/jpg_44-2.jpg",'Cupcake', 305, 3.7, 67),
];
  return (
    <div className="App">
      <div className='left-menu'>
        <div className='heading'><HexagonOutlinedIcon /><h3 className='heading-name'>Dashboard</h3></div>
        <ul type="none">
          <li className='one'><KeyIcon></KeyIcon><p className='one-1'>Dashboard</p></li>
          <li onClick={()=>{alert("this is a static page for Assignment purpose")}}><GridViewIcon /><p className='one-1'>Product <ChevronRightIcon className='end' /> </p></li>
          <li onClick={()=>{alert("this is a static page for Assignment purpose")}}><InterpreterModeIcon /><p className='one-1'>Customer<ChevronRightIcon className='end' /> </p></li>
          <li onClick={()=>{alert("this is a static page for Assignment purpose")}}><AccountBalanceWalletIcon /><p className='one-1'>Income<ChevronRightIcon className='end' /></p> </li>
          <li onClick={()=>{alert("this is a static page for Assignment purpose")}}><GradeIcon /><p className='one-1'>Promote <ChevronRightIcon className='end' /></p> </li>
          <li onClick={()=>{alert("this is a static page for Assignment purpose")}}><HelpIcon /><p className='one-1'>Help <ChevronRightIcon className='end' /> </p></li>
        </ul>
        <li onClick={()=>{alert("this is a static page for Assignment purpose")}} className='one-2' style={{ width: "90%", marginTop: "95%",height:'50px' }}><img width="40" height="40" style={{borderRadius:'50%'}} src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png"/>Narendra Modi<ExpandMoreRoundedIcon className='end' /> </li>
      </div>
      <div className='Right-section'>
        <div className='right-main'>
          <div className='right-1'>
            Hello Niteesh 👋,
            <input type="search" style={{ borderRadius: '1rem', height: '30px', border: 'none', backgroundColor: 'white', padding: '10px' }} className='inp' placeholder='search' onChange={(e)=>{if(e.target.value.length>3){alert("not found")}}}/>
          </div>
          <div className='right-2'>
            <div className='right-2-inner'>
              <div className='circle'>
                <AttachMoneyRoundedIcon />
              </div>
              <h5>Earning $ 198K</h5>
            </div>
            <div className='right-2-inner'>
              <div className='circle' style={{ color: 'red', backgroundColor: 'pink' }}>
                <AddCardIcon />
              </div>
              <h5>Balence $ 18K</h5>
            </div>
            <div className='right-2-inner'>
              <div className='circle' style={{ color: 'blue', backgroundColor: 'skyblue' }}>
                <AddShoppingCartIcon />
              </div>
              <h5>Orders $ 8K</h5>
            </div>
            <div className='right-2-inner'>
              <div className='circle' style={{ color: 'orange', backgroundColor: 'yellow' }}>
                <TrendingDownIcon />
              </div>
              <h5>Total Sales $ 89K</h5>
            </div>
          </div>
          <div className='right-3'>
            <div className='right-3-1'>
              <div className='main-right-3'>
                <p style={{ margin: '0', color: 'gray' }}>Overview</p>
                <p style={{ display: 'flex', justifyContent: 'center', gap: '2px', margin: '0', borderRadius: '1rem', color: 'grey', backgroundColor: 'aliceblue', padding: '0.2rem 0.5rem', fontSize: 'small', fontWeight: 'initial' }}>Quality <ExpandMoreRoundedIcon onClick={()=>alert("not able to chane the select options right now")}/></p>
              </div>
              <p style={{ color: 'grey', fontSize: 'small' }}>Monthley Earning</p>
              <div className='graph-1'>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                  {graph?.map((i, v) => {
                    return (
                      <><div className='pin' key={v} style={{ height: i?.val, color: 'grey',fontFamily:'cursive', width: '9%', margin: '1.9%', borderRadius: '0.1rem', alignItems: 'flex-start' }}>
                        {i.month}
                      </div>
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='right-3-2'>
              <p style={{ margin: '0', color: 'gray' }}>Customers</p>
              <p style={{ margin: '0', fontSize: 'small', color: 'gray' }}>Customers taht buy products</p>
              <br></br>
              <div style={{ padding: '1rem', border: '1px solid aliceblue', borderRadius: '50%' }}>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <div class="pie" style={{
                    backgroundImage: 'conic-gradient(rgb(255, 68, 0) 64%, rgb(82, 82, 247) 64%, rgb(64, 64, 177) 81%, rgb(122, 222, 76) 81%)'
                  }}>
                    <div style={{ borderRadius: '20rem', backgroundColor: 'white' }} className='pie-2'>65% toal new customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='right-4'>
            <div className='right-4-1'>
              Product sell
              <input type="search" style={{ borderRadius: '1rem', height: '30px', border: 'none', backgroundColor: 'aliceblue', padding: '10px' }} className='inp' placeholder='search' onChange={(e)=>{if(e.target.value.length>3){alert("wrong input")}}}/>
              <p style={{ display: 'flex', justifyContent: 'center', gap: '2px', margin: '0', borderRadius: '1rem', color: 'grey', backgroundColor: 'aliceblue', padding: '0.2rem 0.5rem', fontSize: 'small', fontWeight: 'initial' }}>Quality <ExpandMoreRoundedIcon onClick={()=>alert("not able to chane the select options right now")}/></p>
            </div>
            <div>
            <TableContainer component={Paper} sx={{boxShadow:'none'}}>
      <Table sx={{ minWidth: '100%',border:'none' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color:'grey'}}>Product name</TableCell>
            <TableCell sx={{color:'grey'}} align="right">Stock</TableCell>
            <TableCell sx={{color:'grey'}} align="right">Price</TableCell>
            <TableCell sx={{color:'grey'}} align="right">Total sale</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{borderBottom:'none'}}>
                <div style={{display:'flex',justifyContent:'start',gap:'1rem'}}><img src={row.img} width="50px" heigth="10px" style={{borderRadius:'0.2rem'}}/>
                {row.name}
                </div>
              </TableCell>
              <TableCell align="right" sx={{borderBottom:'none'}}>{row.calories}</TableCell>
              <TableCell align="right" sx={{borderBottom:'none'}}>{row.fat}</TableCell>
              <TableCell align="right" sx={{borderBottom:'none'}}>{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
