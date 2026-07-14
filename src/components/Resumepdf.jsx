import {Document,Page,Text,StyleSheet,View}from "@react-pdf/renderer"
let styles=StyleSheet.create({
    heading:{
        textAlign:"center",
        fontSize:"30px"
    },
    normaltext:{
        textAlign:"center",
        marginTop:"10px",
        fontSize:"12px"
    },
    page:{
        padding:"30px"
    },
    subheading:{
        textAlign:"left",
        fontSize:"14px",
        marginTop:"30px",
        borderBottom:"1px solid black",
        paddingBottom:"5px",
    },
    paratext:{
        textAlign:"left",
        marginTop:"10px",
        fontSize:"12px",
    },
   row:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
   }
})
export default function Resumepdf({generalinfo,educationinfo,skillinfo,courseworkinfo}){
    return(
    <Document>
        <Page style={styles.page}>
            <Text style={styles.heading}>{generalinfo.name}</Text>
            <Text style={styles.normaltext}>{generalinfo.email} | {generalinfo.phone} | {generalinfo.github} | {generalinfo.linkedin} </Text>
            <View style={{minHeight:"160px"}}>
            <Text style={styles.subheading}>Skills </Text>
            <Text style={styles.paratext}>{skillinfo}</Text>
            </View>
            <View style={{minHeight:"160px"}}>
            <Text style={styles.subheading}>Coursework </Text>
            <Text style={styles.paratext}>{courseworkinfo}</Text>
            </View>
            <View style={{minHeight:"160px"}}>
            <Text style={styles.subheading}>Project </Text>
            {/* <Text style={styles.paratext}>{projectinfo}</Text> */}
            </View>
            <View style={{minHeight:"160px"}}>
            <Text style={styles.subheading}>Education</Text>
            <View style={styles.row}>
            <Text style={styles.paratext}>{educationinfo.collegename}</Text>
            <Text style={styles.paratext}>{educationinfo.collegeyear} </Text>
            </View>
            <Text style={styles.paratext}>{educationinfo.branch}</Text>
            <View style={styles.row}>
            <Text style={styles.paratext}>{educationinfo.schoolname}</Text>
            <Text style={styles.paratext}>{educationinfo.schoolyear} </Text>
            </View>
            <Text style={styles.paratext}>{educationinfo.tenth}   {educationinfo.twelth}</Text>
            
            </View>
        </Page>
    </Document>
    );
}