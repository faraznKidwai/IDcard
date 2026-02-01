import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font
} from '@react-pdf/renderer';

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf'
});

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Roboto'
  },

  card: {
    width: 350,
    height: 220,
    border: '2px solid #000',
    borderRadius: 8,
    padding: 10
  },

  header: {
    backgroundColor: '#1a237e',
    padding: 6,
    textAlign: 'center'
  },

  headerText: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 1
  },

  body: {
    flexDirection: 'row',
    marginTop: 10
  },

  photo: {
    width: 90,
    height: 110,
    border: '1px solid #000'
  },

  info: {
    marginLeft: 10,
    fontSize: 10
  },

  label: {
    fontWeight: 'bold'
  },

  footer: {
    position: 'absolute',
    bottom: 8,
    left: 10,
    right: 10,
    fontSize: 8,
    textAlign: 'center',
    color: '#555'
  }
});

const PressCard = ({ data }) => (
  <Document>
    <Page size={{ width: 400, height: 250 }} style={styles.page}>
      <View style={styles.card}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>PRESS ID CARD</Text>
        </View>

        {/* Body */}
        <View style={styles.body}>
          <Image src={data.photo} style={styles.photo} />

          <View style={styles.info}>
            <Text><Text style={styles.label}>Name:</Text> {data.name}</Text>
            <Text><Text style={styles.label}>Father:</Text> {data.fatherName}</Text>
            <Text><Text style={styles.label}>Mobile:</Text> {data.mobile}</Text>
            <Text><Text style={styles.label}>Blood Group:</Text> {data.bloodGroup}</Text>
            <Text><Text style={styles.label}>Address:</Text> {data.address}</Text>
            <Text><Text style={styles.label}>District:</Text> {data.district}</Text>
            <Text><Text style={styles.label}>Pincode:</Text> {data.pincode}</Text>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Issued by Press Authority • Valid for official use only
        </Text>

      </View>
    </Page>
  </Document>
);

export default PressCard;
