function Container({children}){

    const styles = {
        width: '85%',
        display: 'flex',
        margin: '0 auto',
        flexDirection: 'column',
    };

    return <div style={styles}>
        {children}
    </div>
}

export default Container;