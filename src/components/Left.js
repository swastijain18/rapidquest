import Button from 'react-bootstrap/Button';

function Left(){
    return(
        <>
        <div className="left-container">
            <div className="d-flex justify-content-between">
                <img src={"1.png"} alt="Photo" className="col-3"/>
                <div className="col-8">
                    <h3>Hi Mike,</h3>
                    <div className="sub-head">welcome back.</div>
                </div>
            </div>

            <div className="mt-2">
                <b>Today</b>
                <h3 className="mt-3"><b>$19,892</b></h3>
                <div className='sub-head'>Account Balance</div>

                <h5 className="mt-4">$4,000</h5>
                <div className='sub-head'>Year-to-Date Contributions</div>

                <h5 className="mt-4">1,892</h5>
                <div className='sub-head'>Total Interest</div>

                <Button className="btn mt-3">I want to</Button>
            </div>

            <div className="mt-2">
                <h5 className='mt-5'>Recent Transactions</h5>
                <div className="mt-4 sub-head">2020-08-07</div>
                <div className='bold-text'>Withdrawl Transfer to Bank-XXX11</div>
                <hr />
                <div className="mt-4 sub-head">2020-07-21</div>
                <div className='bold-text'>Withdrawl Transfer to Bank-XXX11</div>
                <hr />
                <div className="mt-4 sub-head">2020-07-16</div>
                <div className='bold-text'>Withdrawl Transfer to Bank-XXX11</div>
                <hr />


            </div>
        </div>
        </>
    )
}
export default Left;