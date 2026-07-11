import { PDFViewer } from "@react-pdf/renderer";
import Resumepdf from "./Resumepdf.jsx";
export default function Preview(){
  return(
<div className="w-2/3 bg-white overflow-y-auto">
<PDFViewer className="h-full w-full"> 
<Resumepdf/>
</PDFViewer>
</div>
  );
}