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
export default function Resumepdf({generalinfo,educationinfo}){
    return(
    <Document>
        <Page style={styles.page}>
            <Text style={styles.heading}>{generalinfo.name}</Text>
            <Text style={styles.normaltext}>{generalinfo.email} | {generalinfo.phone} | {generalinfo.github} | {generalinfo.linkedin} </Text>
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