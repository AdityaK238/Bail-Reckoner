"use client";
import styles from "@/app/marketplace/Market-Portfolio.module.css";

const lawyers = [
  {
    id: 1,
    name: "Priya Patel",
    specialization: "Corporate Law",
    description: "Mergers and acquisitions expert",
    image: "https://picsum.photos/id/10/150/150?grayscale&category=people",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    specialization: "Criminal Law",
    description: "White-collar crime specialist",
    image: "https://picsum.photos/id/20/150/150?grayscale&category=people",
  },
  {
    id: 3,
    name: "Meena Singh",
    specialization: "Family Law",
    description: "Divorce and custody expert",
    image: "https://picsum.photos/id/30/150/150?grayscale&category=people",
  },
  {
    id: 4,
    name: "Amit Gupta",
    specialization: "IP Law",
    description: "Patent and trademark specialist",
    image: "https://picsum.photos/id/40/150/150?grayscale&category=people",
  },
  {
    id: 5,
    name: "Sita Sharma",
    specialization: "Environmental Law",
    description: "Sustainability and compliance expert",
    image: "https://picsum.photos/id/50/150/150?grayscale&category=people",
  },
  {
    id: 6,
    name: "Ravi Verma",
    specialization: "Tax Law",
    description: "Corporate tax planning specialist",
    image: "https://picsum.photos/id/60/150/150?grayscale&category=people",
  },
  {
    id: 7,
    name: "Neha Reddy",
    specialization: "Immigration Law",
    description: "Visa and citizenship expert",
    image: "https://picsum.photos/id/70/150/150?grayscale&category=people",
  },
  {
    id: 8,
    name: "Vikram Yadav",
    specialization: "Employment Law",
    description: "Workplace rights and compliance specialist",
    image: "https://picsum.photos/id/80/150/150?grayscale&category=people",
  },
];

const MarketPage = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper} style={{ background: 'aliceblue' }}>
        <header>
          <h1 style={{ color: 'black' }}>Lawyer Directory</h1>
        </header>
        <main>
          <div id={styles.lawyerGrid} className={styles.lawyerGrid}>
            {lawyers.map((lawyer) => (
              <div key={lawyer.id} className={styles.lawyerCard} style={{ background: 'aliceblue' }}>
                <div className={styles.cardHeader}>
                  <img src={lawyer.image} style={{ width: '100px', height: '150px', borderRadius: '50%', objectFit: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center' }} alt={lawyer.name} />
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
