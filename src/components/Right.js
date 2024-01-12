import { Button, ProgressBar } from "react-bootstrap";

function Right() {
    return (
        <>
            <div className="middle-container mt-md-5">
                <div className="right-inner">
                    <div className="bold-text">Retirement Strategy</div>

                    <div style={{ fontSize: "13px" }} className="my-3">Employee Contribution</div>
                    <ProgressBar now={12} label={`12%`} />
                    <div style={{ fontSize: "13px" }} className="my-3">Retirement Age</div>
                    <ProgressBar now={65} label={`65`} />

                    <div className="my-3 d-flex" style={{ fontSize: "13px" }}>
                        <div className="col-10">Employee Contribution</div>
                       
                        <div className="col-2">8.4%</div>
                    </div>
                    <div className="my-3 d-flex" style={{ fontSize: "13px" }}>
                        <div className="col-10">Interest Rate</div>
                        <div className="col-2">5%</div>
                    </div>
                    <Button className="btn col-12">Update</Button>
                    <div className="mt-3 text-center" style={{fontSize:"14px", color:"var(--blue1)"}}>View Help Docs</div>
                </div>

                <div className="right-down mt-5 d-none d-md-block">
                    <div>Are you considering </div><b>Housing Advance?</b>
                    <div className="sub-head">Limited Time Reduced Interest</div>
                    <div style={{fontSize:"12px", color:"var(--blue1)"}}>Learn More ></div>
                </div>

            </div>
        </>
    )
}
export default Right;