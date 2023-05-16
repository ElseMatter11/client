import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar'



export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.center}> 
        <h1>Welcome!</h1>
        <h3>Here u can find the best tracks</h3>
      </div>
    </>
  )
}
