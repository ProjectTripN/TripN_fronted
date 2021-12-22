import styles from "./countries.module.css";
import { Link, useParams } from "react-router-dom";
import Countries from "../../api/mbtiResultApi";

const MBTIResult = ({}) => {
  // const { countryName } = match.params;
  const { countryName } = useParams();

  const nation = Countries[countryName];
  console.log(nation.id);

  return (
    <>
      <div className={styles.wrapper} key={nation.id}>
        <div className={styles.container}>
          <div className={styles.result__type}>
            <h1 className={styles.result__head}>
              당신에게 가장 어울리는 여행을 추천해드릴게요!
            </h1>
            <br />
          </div>
          <div className={styles.reust__title}>
            <h2>{nation.id}의 여행특징은?</h2>
          </div>
          <ul className={styles.result__style__wrapper}>
            {nation.description.map((item) => {
              return (
                <li className={styles.result__style__detail} key={item.des}>
                  {item.des}
                </li>
              );
            })}
          </ul>
          <div className={styles.button__box}>
            <Link to="/" className={styles.button}>
              여행을 떠나기!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MBTIResult;
