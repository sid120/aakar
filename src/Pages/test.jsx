import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef, useState, useEffect } from 'react';
import logo from "../assets/img/Logo.png";
import { useParams } from 'react-router-dom';



const Done = (props) => {
    const [customerData, setCustomerData] = useState({});
    const [rfqData, setRfqData] = useState({});
    const [rfqData1, setRfq1Data] = useState({});
    const [ecnData, setEcnData] = useState({});
    const [riskData, setRiskData] = useState({});
    const [designData, setDesignData] = useState({});
    const [qualityData, setQualityData] = useState({});
    const [machineData, setMachineData] = useState({});
    const [machineData1, setMachine1Data] = useState({});
    const [npdData, setNpdData] = useState({});

    const { id } = useParams(); 
    console.log('ID in Done component:', id);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:4000/customerDetails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ enquiry: id }), // Replace with your dynamic value
                });

                if (response.ok) {
                    const data = await response.json();
                    setCustomerData(data || {});
                } else {
                    console.error('Failed to fetch customer data. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching customer data: ', error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchRfqData() {
            try {
                const response = await fetch('http://localhost:4000/rfqDetails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ enquiry: id }),
                });
    
                if (response.ok) {
                    const data = await response.json();
                    console.log('RFQ Data:', data); // Log the entire response to the console
                    setRfqData(data?.surfaceTreatment || []);
                } else {
                    console.error('Failed to fetch RFQ data. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching RFQ data: ', error);
            }
        }
        
        fetchRfqData();
    }, []);

    useEffect(() => {
        async function fetchRfq1Data() {
            try {
                const response = await fetch('http://localhost:4000/rfqDetails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ enquiry: id }),
                });
    
                if (response.ok) {
                    const data = await response.json();
                    console.log('RFQ Data:', data); // Log the entire response to the console
                    setRfq1Data(data || []);
                } else {
                    console.error('Failed to fetch RFQ data. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching RFQ data: ', error);
            }
        }
        
        fetchRfq1Data();
    }, []);
    

    useEffect(() => {
        async function fetchEcnData() {
            try {
                const response = await fetch('http://localhost:4000/ecnDetails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ enquiry: id }), // Replace with your dynamic value
                });

                if (response.ok) {
                    const data = await response.json();
                    setEcnData(data || {});
                } else {
                    console.error('Failed to fetch customer data. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching customer data: ', error);
            }
        }
        fetchEcnData();
    }, []);

    useEffect(() => {
        async function fetchRiskData() {
            try {
                const response = await fetch('http://localhost:4000/riskDetails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ enquiry: id }), // Replace with your dynamic value
                });

                if (response.ok) {
                    const data = await response.json();
                    setRiskData(data || {});
                } else {
                    console.error('Failed to fetch customer data. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching customer data: ', error);
            }
        }
        fetchRiskData();
    }, []);

    useEffect(() => {
        async function fetchDesignData() {
            try {
                const response = await fetch('http://localhost:4000/designDetails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ enquiry: id }), // Replace with your dynamic value
                });

                if (response.ok) {
                    const data = await response.json();
                    setDesignData(data || {});
                } else {
                    console.error('Failed to fetch customer data. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching customer data: ', error);
            }
        }
        fetchDesignData();
    }, []);

    useEffect(() => {
        async function fetchMachineData() {
            try {
                const response = await fetch('http://localhost:4000/machineDetails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ enquiry: id }), // Replace with your dynamic value
                });

                if (response.ok) {
                    const data = await response.json();
                    setMachineData(data?.machine || []);
                } else {
                    console.error('Failed to fetch customer data. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching customer data: ', error);
            }
        }
        fetchMachineData();
    }, []);

    useEffect(() => {
        async function fetchMachine1Data() {
            try {
                const response = await fetch('http://localhost:4000/machineDetails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ enquiry: id }), // Replace with your dynamic value
                });

                if (response.ok) {
                    const data = await response.json();
                    setMachine1Data(data || []);
                } else {
                    console.error('Failed to fetch customer data. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching customer data: ', error);
            }
        }
        fetchMachine1Data();
    }, []);

    useEffect(() => {
        async function fetchQualityData() {
            try {
                const response = await fetch('http://localhost:4000/qualityDetails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ enquiry: id }), // Replace with your dynamic value
                });

                if (response.ok) {
                    const data = await response.json();
                    setQualityData(data || {});
                } else {
                    console.error('Failed to fetch customer data. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching customer data: ', error);
            }
        }
        fetchQualityData();
    }, []);

    useEffect(() => {
        async function fetchNpdData() {
            try {
                const response = await fetch('http://localhost:4000/npdDetails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ enquiry: id }), // Replace with your dynamic value
                });

                if (response.ok) {
                    const data = await response.json();
                    setNpdData(data || {});
                } else {
                    console.error('Failed to fetch customer data. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching customer data: ', error);
            }
        }
        fetchNpdData();
    }, []);



    const pdfRef = useRef();
    const [showLoader, setLoader] = useState(false);
    const downloadPDF = async () => {
        window.scrollTo(0, 0);
        setLoader(true);

        const pdf = new jsPDF('p', 'mm', 'a4', true);


        const captureDocument = async () => {
            const scale = window.innerWidth / document.body.scrollWidth;
            return html2canvas(document.body, {
                onclone: function (clonedDoc) {
                    clonedDoc.getElementById('bye').style.display = 'block';
                },
                scale: scale,
                afterClone: function (clonedDoc) {
                    return new Promise((resolve) => {
                        setTimeout(resolve, 500);
                    });
                }
            });
        };

        const addPage = async () => {
            const canvas = await captureDocument();
            const imgData = canvas.toDataURL('image/png');
            pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
           
        };

        await addPage();
       
        setTimeout(() => {
            pdf.save(`${id}.pdf`);
            navigate("/dash");
            setLoader(false);
        }, 1000); 
    };



    return (
        <>

            <div id='bye' ref={pdfRef} style={{  }}>

                <div style={{ fontSize: "30px", marginTop: "2px", marginLeft: "520px" }}>
                    <b>Aakar Foundry Pvt Ltd, Talegaon,Pune</b>
                    <div style={{ fontSize: "35px", marginLeft: "45px" }}>
                        <b>Enquiry Feasibility Report</b>
                    </div>
                </div>

                <div style={{ fontSize: "30px", marginLeft: "65px", marginBottom: "15px" }}>
                    <b>Customer Details</b>
                </div>
                <div style={{ width: '90%', borderBottom: '2px solid black', margin: '0 auto', margintop: '30px', marginBottom: '15px', }}></div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Customer Name:</b>{customerData.customerName}
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '105px', width: '480px' }}>
                        <b>Customer Reference:</b> {customerData.customerReference}
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '145px', width: '750px' }}>
                        <b>Contact Person:</b> {customerData.contact}
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Delivery Address:</b> {customerData.delivery}
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '115px', width: '480px' }}>
                        <b>Enquiry Date:</b> {customerData.enquiryDate}
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '145px', width: '750px' }}>
                        <b>Category:</b> {customerData.category}
                    </div>
                </div>
                <div style={{ fontSize: '25px', marginLeft: '65px', width: '750px' }}>
                    <b>Design Path:</b> {customerData.path}
                </div>



                {customerData.category === "RFQ" ? (
                    <div>
                        <div style={{ fontSize: "30px", marginLeft: "65px", marginBottom: "15px", marginTop: "25px" }}>
                            <b>RFQ Details</b>
                        </div>
                        <div style={{ width: '90%', borderBottom: '2px solid black', margin: '0 auto', margintop: '30px', marginBottom: '15px', }}></div>


                        <div style={{ display: 'flex', margin: '0 auto' }}>
                            <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                                <b>Part Name:</b> {rfqData1.name}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                                <b>Part Number - MACH:</b> {rfqData1.partMach}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                                <b>Part Number - CAST :</b> {rfqData1.partCast}
                            </div>
                        </div>

                        <div style={{ display: 'flex', margin: '0 auto' }}>
                            <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                                <b>Finish Weight :</b> {rfqData1.finishWeight}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                                <b>Raw Casting Weight:</b> {rfqData1.castingWeight}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                                <b>Project Name/Other Details :</b> {rfqData1.details}
                            </div>
                        </div>

                        <div style={{ display: 'flex', margin: '0 auto' }}>
                            <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                                <b>Rfq Enquiry No:</b> {rfqData1.enquiry}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                                <b>Quantity Per Annum (Nos) :</b> {rfqData1.quantity}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                                <b>Product Life (In Years):</b> {rfqData1.life}
                            </div>
                        </div>

                        <div style={{ display: 'flex', margin: '0 auto' }}>
                            <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                                <b>Process Required (HPDC, LPDC, GDC):</b> {rfqData1.processRequired}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                                <b>Aluminum Alloy Specification:</b> {rfqData1.alloy}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                                <b>Requirements:</b> {rfqData1.machined}
                            </div>
                        </div>

                        <div style={{ display: 'flex', margin: '0 auto' }}>
                            <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                                <b>Shot Blasting:</b>{rfqData1.blasting}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                                <b>Specific Product & QC Requirements :</b> {rfqData1.productQc}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                                <b>Bought Out Materials Details:</b> {rfqData1.materials}
                            </div>

                        </div>

                        <div style={{ display: 'flex', margin: '0 auto' }}>
                            <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                                <b>Impregnation Required?:</b> {rfqData1.impregnation}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                                <b>Heat Treatment Required?:</b> {rfqData1.treatment}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                                <b>Packaging Type :</b> {rfqData1.packaging}
                            </div>
                        </div>

                        <div style={{ display: 'flex', margin: '0 auto' }}>
                            <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                                <b>Specify If Custom Packaging:</b>{rfqData1.custom}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                                <b>Delivery Location & Basis:</b>{rfqData1.delivery}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                                <b>Inco-Terms :</b> {rfqData1.name}
                            </div>
                        </div>

                        <div style={{ display: 'flex', margin: '0 auto' }}>
                        <div style={{ fontSize: '25px', marginLeft: '65px', width: '440px' }}>
                                <b>Leak Testing & Pressure Requirement :</b> {rfqData1.pressure}
                            </div>
                            <div style={{ fontSize: '25px', marginLeft: '105px', width: '480px' }}>
                                <b>Annual Tonnage - MT :</b> {rfqData1.tonnage}
                            </div>
                            <div style={{ fontSize: '25px', marginLeft: '45px', width: '450px' }}>
                                <b>Remarks:</b>{rfqData1.remarks}
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {Array.isArray(rfqData) ? (
                                rfqData.map((item, index) => (
                                    <div style={{ display: 'flex', margin: '10px' }} key={index}>
                                        <div style={{ fontSize: '25px', marginLeft: '65px', width: '450px' }}>
                                            <b>Surface Treatment:</b> {item.treatment}
                                        </div>
                                        <div style={{ fontSize: '25px', marginLeft: '105px', width: '530px' }}>
                                            <b>Surface Treatment Specification:</b> {item.specification}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Surface Treatment data not available or in the expected format</p>
                            )}
                        </div>
                    </div >
                ) : (
                    <div>
                        <div style={{ fontSize: "30px", marginLeft: "65px", marginBottom: "15px", marginTop: "25px" }}>
                            <b>ECN Details</b>
                        </div>
                        <div style={{ width: '90%', borderBottom: '2px solid black', margin: '0 auto', margintop: '30px', marginBottom: '15px', }}></div>
                        <div style={{ display: 'flex', margin: '0 auto' }}>
                            <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                                <b>ECN Enquiry Number:</b> {ecnData.enquiry}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                                <b>Part Name:</b> {ecnData.partName}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                                <b>Part Number-Finish :</b> {ecnData.number}
                            </div>
                        </div>

                        <div style={{ display: 'flex', margin: '0 auto' }}>
                            <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                                <b>Finish Weight :</b> {ecnData.weight}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                                <b>Project Name/Other Details :</b> {ecnData.projectName}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                                <b>What Type of ECN:</b> {ecnData.ecnType}
                            </div>
                        </div>
                    </div>
                )}

                <div style={{ fontSize: "30px", marginLeft: "65px", marginBottom: "15px", marginTop: "25px" }}>
                    <b>Risk Analysis</b>
                </div>
                <div style={{ width: '90%', borderBottom: '2px solid black', margin: '0 auto', margintop: '30px', marginBottom: '15px', }}></div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Is There Any Risk Associated?:</b> {riskData.risk}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Manufacturing Requirement:</b> {riskData.requirement}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Application:</b> {riskData.application}
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Internal Estimation:</b> {riskData.internal}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Environmental:</b> {riskData.environment}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Environmental Remarks:</b> {riskData.environment_remarks}
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Investment:</b> {riskData.investment}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Investmental Remarks:</b> {riskData.investment_remarks}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Manufacturing:</b> {riskData.manufacturing}
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Manufacturing Remarks :</b> {riskData.manufacturing_remarks}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Technical Feasibility:</b> {riskData.technical}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Technical Feasibility Remarks:</b> {riskData.remarks}
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Estimation :</b> {riskData.estimation}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Estimation Remarks:</b> {riskData.estimation_remarks}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Regret:</b> {riskData.regret}
                    </div>
                </div>

                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '353px' }}>
                        <b>Regret Remarks :</b> {riskData.regret_marks}
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '115px', width: '480px' }}>
                        <b>Remarks:</b> {riskData.remarks}
                    </div>
                </div>

                <div style={{ fontSize: "30px", marginLeft: "65px", marginBottom: "15px", marginTop: "25px" }}>
                    <b>Design & Foundry</b>
                </div>
                <div style={{ width: '90%', borderBottom: '2px solid black', margin: '0 auto', margintop: '30px', marginBottom: '15px', }}></div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Finished Weight (Machined) (Kg):</b>{designData.weight}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Net Raw Casting Weight (Kg):</b> {designData.casting}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Surface Area - In mm Square:</b> {designData.area}
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Die-Casting Process:</b> {designData.dieCasting}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>No. Of Impressions Or Cavities:</b> {designData.impressions}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Alternative Raw Material Suggested By Aakar :</b> {designData.rawMaterial}
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Die Cost (Rs Lakhs):</b> {designData.dieCost}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Core Box Cost:</b> {designData.coreCost}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Expected Die Life (Shots):</b> {designData.dieLife}
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Die Manufacturing Period In Weeks:</b> {designData.diePeriod}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Number Of Shots/Hour:</b> {designData.shots}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>No. Of Sand Cores Required:</b> {designData.cores}
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '353px' }}>
                        <b>Total Sand Weight (Kg) :</b> {designData.sandWeight}
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '115px', width: '480px' }}>
                        <b>Remarks:</b> {designData.remarks}
                    </div>
                </div>


                <div style={{ fontSize: "30px", marginLeft: "65px", marginBottom: "15px", marginTop: "25px" }}>
                    <b>Machining & Quality</b>
                </div>
                <div style={{ width: '90%', borderBottom: '2px solid black', margin: '0 auto', marginTop: '30px', marginBottom: '15px' }}></div>

                {Array.isArray(machineData) ? (
                    machineData.map((item, index) => (
                        <div style={{ display: 'flex', margin: '0 auto' }} key={index}>
                            <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                                <b>Machine Type:</b> {item.machineType}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                                <b>Cycle time:</b> {item.cycleTime}
                            </div>
                            <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                                <b>Machining Fixture cost:</b> {item.fixtureCost}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No machine data available</p>
                )}


                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Inspection Gauges Cost:</b> {qualityData.gaugesCost}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Leak Testing Fixture Cost:</b> {qualityData.leakCost}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Washing Fixture Cost:</b> {qualityData.washingCost}
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Plastic Protection Cap Costs (Specify Quantity & Cost): </b> {qualityData.capCost}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Packaging Type?:</b> {qualityData.packagingType}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Machining Fixture cost:</b> {qualityData.packagingCost}
                    </div>
                </div>


                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '353px' }}>
                        <b> Quality Remarks:</b> {qualityData.remarks}
                    </div>
                    <div style={{ fontSize: '25px', marginLeft: '115px', width: '480px' }}>
                        <b> Machining Remarks:</b> {machineData1.remarks}
                    </div>
                </div>


                <div style={{ fontSize: "30px", marginLeft: "65px", marginBottom: "15px", marginTop: "25px" }}>
                    <b>New Product Development</b>
                </div>
                <div style={{ width: '90%', borderBottom: '2px solid black', margin: '0 auto', margintop: '30px', marginBottom: '15px', }}></div>
                <div style={{ display: 'flex', margin: '0 auto' }}>
                    <div style={{ fontSize: '25px', marginLeft: '65px', width: '530px' }}>
                        <b>Capital Investment For Machines</b> {npdData.investment}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '105px', width: '480px' }}>
                        <b>Feasibility Conclusion :</b> {npdData.partFeasible}
                    </div>
                    <div style={{ fontSize: '25px', marginRight: '45px', width: '450px' }}>
                        <b>Remarks:</b> {npdData.remarks}
                    </div>
                </div>
            </div>
            
            <button onClick={downloadPDF}>Download PDF</button>
        </>
        
    );
}

export default Done;