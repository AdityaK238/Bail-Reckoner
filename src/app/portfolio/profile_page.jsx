"use client";
import { useEffect, useState } from "react";
import styles from "@/app/portfolio/porfolio.module.css";

const lawyers = [
  {
    id: 1,
    name: "Jane Doe",
    specialization: "Corporate Law",
    bio: "Jane Doe is an experienced attorney specializing in corporate law with over 15 years of practice.",
    practiceAreas: [
      {
        name: "Corporate Law",
        description:
          "Expertise in handling complex corporate transactions and governance.",
      },
      {
        name: "Mergers and Acquisitions",
        description: "Assisting clients with strategic M&A activities.",
      },
      {
        name: "Securities Law",
        description: "Advising on compliance and regulatory matters in securities.",
      },
    ],
    notableCases: [
      "Acme Corp vs. XYZ Inc. - Successful $100M merger",
      "In re: Tech Startup IPO - Oversaw successful public offering",
      "Global Inc. Restructuring - Led corporate restructuring efforts",
    ],
  },
  {
    id: 2,
    name: "John Smith",
    specialization: "Criminal Law",
    bio: "John Smith is a seasoned criminal defense attorney with over 20 years of experience in high-profile cases.",
    practiceAreas: [
      {
        name: "Criminal Defense",
        description: "Representing clients in state and federal criminal proceedings.",
      },
      {
        name: "White Collar Crime",
        description: "Defending clients against complex financial crime charges.",
      },
      {
        name: "Appeals",
        description: "Handling appeals in state and federal courts.",
      },
    ],
    notableCases: [
      "State vs. Johnson - Acquittal in high-profile murder case",
      "U.S. vs. Thompson - Favorable plea deal in federal fraud case",
      "State vs. Williams - Charges dismissed in complex drug trafficking case",
    ],
  },
  {
    id: 3,
    name: "Emily Brown",
    specialization: "Family Law",
    bio: "Emily Clark is a compassionate family law attorney with over 10 years of experience in handling sensitive family matters.",
    practiceAreas: [
      {
        name: "Divorce",
        description: "Providing legal support for divorce proceedings.",
      },
      {
        name: "Child Custody",
        description: "Assisting clients with child custody arrangements.",
      },
      {
        name: "Adoption",
        description: "Guiding families through the adoption process.",
      },
    ],
    notableCases: [
      "Smith vs. Smith - Successful child custody agreement",
      "Doe Adoption - Facilitated a smooth adoption process",
      "Johnson vs. Johnson - Favorable divorce settlement",
    ],
  },
  {
    id: 4,
    name: "Michael Johnson",
    specialization: "Intellectual Property Law",
    bio: "Michael Brown is a dedicated intellectual property attorney with over 12 years of experience in protecting clients' IP rights.",
    practiceAreas: [
      {
        name: "Patent Law",
        description:
          "Helping clients secure patents for their inventions.",
      },
      {
        name: "Trademark Law",
        description:
          "Assisting clients with trademark registration and protection.",
      },
      {
        name: "Copyright Law",
        description:
          "Advising on copyright issues and infringement cases.",
      },
    ],
    notableCases: [
      "Tech Innovators vs. Competitor - Successful patent infringement case",
      "Brand Protection Inc. - Secured trademark for a major brand",
      "Creative Works vs. Infringer - Won a significant copyright case",
    ],
  },
  {
    id: 5,
    name: "Sarah Wilson",
    specialization: "Environmental Law",
    bio: "Sarah Wilson is an environmental law attorney with a passion for sustainability and compliance.",
    practiceAreas: [
      {
        name: "Environmental Compliance",
        description:
          "Advising clients on environmental regulations and compliance.",
      },
      {
        name: "Sustainability",
        description:
          "Promoting sustainable practices in business operations.",
      },
      {
        name: "Land Use",
        description:
          "Handling legal matters related to land use and development.",
      },
    ],
    notableCases: [
      " Clean Energy Corp. - Advised on environmental compliance issues",
      " Riverfront Development - Negotiated land use agreements",
      " Eco-Friendly Inc. - Assisted with sustainability initiatives",
    ],
  },
  {
    id: 6,
    name: "David Lee",
    specialization: "Tax Law",
    bio: "David Lee is a tax attorney with expertise in corporate tax planning and compliance.",
    practiceAreas: [
      {
        name: "Corporate Tax",
        description:
          "Advising businesses on tax planning and compliance.",
      },
      {
        name: "Tax Litigation",
        description:
          "Representing clients in tax disputes and litigation.",
      },
      {
        name: "International Tax",
        description:
          "Handling tax matters for multinational corporations.",
      },
    ],
    notableCases: [
      "Tech Corp. Tax Dispute - Resolved a complex tax issue in favor of the client",
      "Global Investments Inc. - Structured tax-efficient international transactions",
      "Tax Compliance Audit - Assisted a client in a successful tax audit",
    ],
  },
  {
    id: 7,
    name: "Laura Martinez",
    specialization: "Immigration Law",
    bio: "Laura Martinez is an Immigration attorney with a focus on visa and citizenship matters.",
    practiceAreas: [
      {
        name: "Visa Applications",
        description:
          "Assisting clients with various types of visa applications.",
      },
      {
        name: "Citizenship",
        description:
          "Guiding clients through the citizenship application process.",
      },
      {
        name: "Deportation Defense",
        description:
          "Defending clients in deportation and removal proceedings.",
      },
    ],
    notableCases: [
      "Family Reunification - Helped reunite families through visa applications",
      "Citizenship Approval - Assisted clients in obtaining citizenship",
      "Deportation Defense - Successfully defended clients in removal proceedings",
    ],
  },

  {
    id: 8,
    name: "James Anderson",
    specialization: "Employment Law",
    bio: "James Anderson is an employment law attorney with a focus on workplace rights and compliance.",
    practiceAreas: [
      {
        name: "Employment Contracts",
        description:
          "Drafting and reviewing employment contracts for clients.",
      },
      {
        name: "Discrimination Claims",
        description:
          "Representing clients in cases of workplace discrimination.",
      },
      {
        name: "Labor Disputes",
        description: "Handling disputes between employers and employees.",
      },
    ],
    notableCases: [
      "Wrongful Termination - Secured compensation for a wrongfully terminated employee",
      "Discrimination Lawsuit - Won a case against workplace discrimination",
      "Labor Dispute Resolution - Resolved a dispute between a union and an employer",
    ],
  },
  // ...other lawyers
];

const LawyerProfile = () => {
  const [lawyer, setLawyer] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const lawyerId = parseInt(urlParams.get("id"));
    const selectedLawyer = lawyers.find((l) => l.id === lawyerId);

    if (selectedLawyer) {
      document.title = `${selectedLawyer.name} - Attorney at Law`;
      setLawyer(selectedLawyer);
    } else {
      document.title = "Lawyer Not Found";
      setLawyer(null);
    }
  }, []);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const contactDetails = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log("Contact Details:", contactDetails);

    alert("Thank you for contacting us. We will get back to you shortly.");
    event.target.reset();
  };

  if (!lawyer) {
    return (
      <div>
        <h1 className={styles.lawyerNotFound}>Lawyer not found</h1>
        <p className={styles.errorMessage}>
          Sorry, the requested lawyer profile does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.lawyerName}>{lawyer.name}, Attorney at Law</h1>
      <p className={styles.lawyerBio}>{lawyer.bio}</p>

      <h2>Practice Areas</h2>
      <div className={styles.practice}>
        {lawyer.practiceAreas.map((area, index) => (
          <div className={styles.gridItem} key={index}>
            <h3>{area.name}</h3>
            <p>{area.description}</p>
          </div>
        ))}
      </div>

      <h2>Notable Cases</h2>
      <ul className={styles.notableCases}>
        {lawyer.notableCases.map((caseItem, index) => (
          <li key={index}>{caseItem}</li>
        ))}
      </ul>

      <footer>
        <p className={styles.contactName}>Contact {lawyer.name}</p>
        <form className={styles.contactForm} onSubmit={handleContactSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </footer>
    </div>
  );
};

export default LawyerProfile;
