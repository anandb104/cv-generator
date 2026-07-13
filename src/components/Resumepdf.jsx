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
        borderBottom:"1px solid black"
    },
    paratext:{
        textAlign:"left",
        marginTop:"10px",
        fontSize:"12px"
    },
   row:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
   }
})
export default function Resumepdf({generalinfo}){
    return(
    <Document>
        <Page style={styles.page}>
            <Text style={styles.heading}>{generalinfo.name}</Text>
            <Text style={styles.normaltext}>{generalinfo.email} |{generalinfo.phone} | {generalinfo.github} |{generalinfo.linkedin} </Text>
            <View style={{minHeight:"170px"}}>
            <Text style={styles.subheading}>Skills </Text>
            </View>
            <View style={{minHeight:"170px"}}>
            <Text style={styles.subheading}>Coursework </Text>
            </View>
            <View style={{minHeight:"170px"}}>
            <Text style={styles.subheading}>Project </Text>
            </View>
            <View style={{minHeight:"150px"}}>
            <Text style={styles.subheading}>Education</Text>
            <View style={styles.row}>
            <Text style={styles.paratext}>College Name</Text>
            <Text style={styles.paratext}>College Years </Text>
            </View>
            <Text style={styles.paratext}>Branch Name</Text>
            <View style={styles.row}>
            <Text style={styles.paratext}>School Name</Text>
            <Text style={styles.paratext}>School Years </Text>
            </View>
            <Text style={styles.paratext}>10th percentage   12th Percentage</Text>
            
            </View>
        </Page>
    </Document>
    );
}