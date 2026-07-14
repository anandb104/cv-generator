import { PDFViewer } from "@react-pdf/renderer";
import Resumepdf from "./Resumepdf.jsx";
export default function Preview({generalinfo,educationinfo,skillinfo,courseworkinfo,projectinfo}){
  return(
<div className="w-2/3 bg-white overflow-y-auto">
<PDFViewer className="h-full w-full"> 
<Resumepdf generalinfo={generalinfo} educationinfo={educationinfo} skillinfo={skillinfo} courseworkinfo={courseworkinfo} projectinfo={projectinfo}/>
</PDFViewer>
</div>
  );
}