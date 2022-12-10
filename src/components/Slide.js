import React from 'react';
import DogSvg from './DogSvg';
import styles from './Slide.module.css'

const Slide = ({slides, ReactComponent}) => {
    const [active, setActive] = React.useState(0);
    const [position, setPosition] = React.useState(0);
    const contentRef = React.useRef();

    React.useEffect(() => {
        const {width} = contentRef.current.getBoundingClientRect();
        setPosition(-(width*active));
    }, [active])

    function slidePrev () {
        active>0 && setActive(active - 1);
    }

    function slideNext() {
        active<(slides.length-1) && setActive(active + 1);
    }

    return (
        <section className={styles.container}>
            <div
                ref={contentRef}
                className={styles.content} 
                style={{transform: `translateX(${position}px)`}}
            >
                {slides.map((slide) => (
                    <div className={[styles.item, styles.fundo].join(' ')} key={slide.id}>{slide.text}</div>
                ))}
            </div>
            <nav className={styles.nav}>
                <button onClick={slidePrev}>Anterior</button>
                <img src={ReactComponent} alt='logoDog' />
                <DogSvg color='tomato' eye={(active+1.5)*1.5} />
                <button onClick={slideNext}>Próximo</button>
            </nav>
        </section>
  )
}

export default Slide;