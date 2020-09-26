import Skeleton from '@material-ui/lab/Skeleton';
import axios from 'axios';
import { baseURL } from 'constants/baseURL';
import React, { useEffect, useState } from 'react';
import qrImage from '../assets/images/qr.png';

interface Props {
  price: number;
}

export const QR: React.FC<Props> = ({ price }) => {
  const [qr, setQR] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setQR(qrImage);
    }, 1000);
  }, [qr, price]);

  if (!qr) {
    return <Skeleton variant="rect" width={200} height={200} />;
  }

  return <img src={qr} alt="" width="200px" height="200px" />;
};
