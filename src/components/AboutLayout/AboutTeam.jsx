import React from 'react';
import { motion } from 'framer-motion';
import "./css/AboutTeam.css"
import data1 from "../../assets/Guhan.webp"
import data2 from "../../assets/Ranjithkumar.webp"
import data3 from "../../assets/siva.webp"
import data4 from "../../assets/MUKILAN 1.webp"

const TeamSection = () => {
  const team = [
    { name: "R A Mukilan", role: "Managing Director", img: data4 },
    { name: "M S Siva", role: "Admin Head", img: data3 },
    { name: "P Ranjith Kumar", role: "Store manager", img: data2 },
    { name: "S Guhan", role: "Workshop manager", img: data1 },
    

    
  ];

  return (
    <section className="team-section py-5 bg-white" data-bg="black">
      <div className="container">
        
        {/* Section Heading */}
        <div className="mb-5">
          <h2 className="team-main-title text-uppercase text-center maintit">
            OUR MANUFACTURING EXPERTISE
          </h2>
        </div>

        {/* Team Grid */}
        <div className="row g-4">
          {team.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <motion.div 
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Member Image */}
                <div className="member-img-wrapper mb-3 ">
                  <img src={member.img} alt={member.name} className="img-fluid member-img" />
                </div>
                
                {/* Member Details */}
                <div className="member-info text-center text-lg-start">
                  <h6 className="member-name text-uppercase m-0 mainsub">{member.name}</h6>
                  <p className="member-role text-uppercase m-0 mt-1 maindes">{member.role}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;