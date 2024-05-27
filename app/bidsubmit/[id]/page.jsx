'use client';

import BidSubmitForm from '@/components/BidSubmitForm'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Bidsubmit() {
  const {id} = useParams();
  console.log(id);

  return <BidSubmitForm crop={`${id}`}/>
}
