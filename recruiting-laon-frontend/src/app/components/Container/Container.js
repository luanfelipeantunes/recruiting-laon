function Container({children}){

    const styles = {
        width: '90%',
        display: 'flex',
        margin: '0 auto',
    };

    return <div style={styles}>
        {children}
    </div>
}

export default Container;