import React from "react";
import styles from './Skillbar.module.css';

const SkillBar = ({ skillName }) => {
//   const [width, setWidth] = useState(0);

//   useEffect(() => {
//     skillLevel.map((item)=>{
//     setWidth(item * 10);
//     })
//   }, [skillLevel]);

  return (
    <div className="skill-bar">
        {skillName.map(item=>{
          return(<><span className="skill-name">{item.name}</span>
          <div className={styles.skillProgress}>
       
         <div className={styles.skillBar} style={{ minWidth: item.level*50 + "%" }}></div>
        <span className={styles.skillName}>{item.level*10+'%'}</span>
      
        </div>
        </>
      ) ;
        })
      }
      
    </div>
  );
};

export default SkillBar;