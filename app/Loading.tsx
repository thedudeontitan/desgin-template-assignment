import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./loading.module.css";

interface LoadingProps {
  count: number;
}

const Loading: React.FC<LoadingProps> = ({ count }) => {
  return (
    <div className={styles.main}>
      {Array(count)
        .fill(0)
        .map((_,index) => (
          <div key={index} className={styles.card_skeleton} >
            <div className={styles.image}>
              <Skeleton height={250} width={250}/>
            </div>
            <div>
              <Skeleton count={2} />
            </div>
            <div>
              <Skeleton />
            </div>
          </div>
        ))}
    </div>
  );
}
export default Loading;
