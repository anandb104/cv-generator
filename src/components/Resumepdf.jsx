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
    }

})
export default function Resumepdf(){
    return(
    <Document>
        <Page style={styles.page}>
            <Text style={styles.heading}>Name of The Person</Text>
            <Text style={styles.normaltext}>Email | Contact No. | Github | Linkedin </Text>
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
            </View>
        </Page>
    </Document>
    );
}