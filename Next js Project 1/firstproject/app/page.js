// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <div >
//           <h1>Only Rohan present in the World.</h1>
//         </div>
//       </main>
//     </div>
//   );
// }


import Link from "next/link";

export default function Home()
{
  return(
    <div>
      <h1>Only Rohan present in the World.</h1>
      <Link href='/about'>About us</Link>
      <img src="https://th.bing.com/th/id/OIP.6lQrfV6IfFJCUqoqcBBXzQHaEK?w=283&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"/>
    </div>
  );

}