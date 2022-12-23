const boxStyle = {
    backgroundColor: (theme) => {if(theme.palette.mode === 'dark') return '#172234'; else return 'skyblue';},
    borderRight: '2px solid gray',
    color: (theme) => {if(theme.palette.mode === 'dark') return 'skyblue'; else return '#172234';},
    width: '15vw',
    minWidth:'175px',
    height: '100vh'
};

const leftMenu = { boxStyle };

export default leftMenu;