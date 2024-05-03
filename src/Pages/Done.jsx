import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { useRef } from 'react';

const Done = (props) => {
    
    const pdfRef = useRef();
    const downloadPDF = () => {
        const inp = pdfRef.current;
        html2canvas(inp,{
            onclone:function (clonedDoc) {
                clonedDoc.getElementById('bye').style.display = 'block';
            }
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jspdf('p','mm','a4',true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, "PNG",imgX,imgY,imgWidth*ratio,imgHeight*ratio);
            pdf.save('Ticket.pdf');
        })
    }
    return(
        <div>
            
            <div id='bye' ref={pdfRef} style={{display:'none'}}>
                 

            </div>
           
            <button onClick={downloadPDF}>Download PDF</button>
        </div>
    );
}

export default Done;