"use client"
import styles from "@/app/marketplace/Market-Portfolio.module.css";

const lawyers = [
  {
    id: 1,
    name: "Jane Doe",
    specialization: "Corporate Law",
    description: "Mergers and acquisitions expert",
  },
  {
    id: 2,
    name: "John Smith",
    specialization: "Criminal Law",
    description: "White-collar crime specialist",
  },
  {
    id: 3,
    name: "Emily Brown",
    specialization: "Family Law",
    description: "Divorce and custody expert",
  },
  {
    id: 4,
    name: "Michael Johnson",
    specialization: "IP Law",
    description: "Patent and trademark specialist",
  },
  {
    id: 5,
    name: "Sarah Wilson",
    specialization: "Environmental Law",
    description: "Sustainability and compliance expert",
  },
  {
    id: 6,
    name: "David Lee",
    specialization: "Tax Law",
    description: "Corporate tax planning specialist",
  },
  {
    id: 7,
    name: "Laura Martinez",
    specialization: "Immigration Law",
    description: "Visa and citizenship expert",
  },
  {
    id: 8,
    name: "James Anderson",
    specialization: "Employment Law",
    description: "Workplace rights and compliance specialist",
  },
];

const MarketPage = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper} style={{background:'aliceblue'}}>
        <header>
          <h1 style={{color:'black'}}>Lawyer Directory</h1>
        </header>
        <main>
          <div id={styles.lawyerGrid} className={styles.lawyerGrid}>
            {lawyers.map((lawyer) => (
              <div key={lawyer.id} className={styles.lawyerCard} style={{background:'aliceblue'}}>
                <div className={styles.cardHeader}>
                  <img src="/lawyer.jpeg" style={{width: '100px',height:'150px',borderRadius:'50%',objectFit:'cover',display: 'flex',justifyContent: 'center', alignItems: 'center'}}alt={lawyer.name} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.lawyerName}>{lawyer.name}</h3>
                  <span className={styles.badge}>{lawyer.specialization}</span>
                  <p className={styles.lawyerDescription}>{lawyer.description}</p>
                </div>
                <div className={styles.cardFooter}>
                  <button className={styles.connectButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.mr1}>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MarketPage;
