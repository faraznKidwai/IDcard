import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PressCard from './PressCard';

const data = {
  name: "Rahul Sharma",
  fatherName: "Mahesh Sharma",
  mobile: "9876543210",
  bloodGroup: "O+",
  address: "Civil Lines, Prayagraj",
  district: "Prayagraj",
  pincode: "211001",
  photo: "https://example.com/photo.jpg"
};

const PressCardDownload = () => (
  <PDFDownloadLink
    document={<PressCard data={data} />}
    fileName="press-card.pdf"
  >
    {({ loading }) =>
      loading ? 'Generating PDF...' : 'Download Press Card'
    }
  </PDFDownloadLink>
);

export default PressCardDownload;
