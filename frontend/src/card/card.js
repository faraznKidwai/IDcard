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
import logo from '../Images/logo.jpg';
import watermark from './watermark.png';
import signature from './signature.png';

// Register fonts
Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf'
});

const styles = StyleSheet.create({
  page: {
    padding: 50,
    position: 'relative',
    fontFamily: 'Roboto',
  },
  watermark: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.1,
    zIndex: -1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    borderBottom: '2px solid #2c3e50',
    paddingBottom: 20,
  },
  logo: {
    width: 150,
    height: 60,
  },
  badge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    border: '3px solid gold',
  },
  mainContent: {
    marginVertical: 40,
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    color: '#2c3e50',
    marginBottom: 30,
  },
  signatureSection: {
    position: 'absolute',
    bottom: 100,
    right: 50,
    alignItems: 'flex-end',
  },
  signature: {
    width: 180,
    height: 70,
  },
  stamp: {
    position: 'absolute',
    bottom: 150,
    left: 50,
    width: 120,
    height: 120,
    opacity: 0.8,
  }
});

const Certificate = ({ recipient, course, date }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Background Watermark */}
      <Image src={watermark} style={styles.watermark} />
      
      {/* Header with Logo */}
      <View style={styles.header}>
        <Image src={logo} style={styles.logo} />
        <Image src="/achievement-badge.png" style={styles.badge} />
      </View>
      
      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Certificate of Excellence</Text>
        <Text style={{ fontSize: 18, marginBottom: 20 }}>
          This certifies that
        </Text>
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 30 }}>
          {recipient}
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>
          has successfully completed the course
        </Text>
        <Text style={{ fontSize: 22, color: '#3498db', marginBottom: 30 }}>
          "{course}"
        </Text>
        <Text style={{ fontSize: 14, color: '#7f8c8d' }}>
          Awarded on {date}
        </Text>
      </View>
      
      {/* Official Stamp */}
      <Image src="/official-stamp.png" style={styles.stamp} />
      
      {/* Signature Section */}
      <View style={styles.signatureSection}>
        <Image src={signature} style={styles.signature} />
        <Text style={{ marginTop: 10, fontSize: 12 }}>
          John Smith, Director
        </Text>
        <Text style={{ fontSize: 12, color: '#7f8c8d' }}>
          Academy of Excellence
        </Text>
      </View>
    </Page>
  </Document>
);

export default Certificate;