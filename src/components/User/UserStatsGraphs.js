import React from 'react';
import styles from './UserStatsGraphs.module.css';

const UserStatsGraphs = ({data}) => {

    const [graph, setGraph] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {

        data && setTotal(data.map(({acessos}) => Number(acessos)).reduce((a,b) => a+b));
        console.log(data)
    }, [])

    return (
        <section className={`${styles.graph} animeLeft`}>
            <div>
                <p className={styles.total}>Acessos: {total}</p>
            </div>
        </section>
    )
}

export default UserStatsGraphs;