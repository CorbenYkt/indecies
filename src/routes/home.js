import { Container } from "@mui/material";
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
        padding: 4,
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function Home(coins) {
    return (
        <Container>
            {/* <ul>
                {
                    //console.log(coins.data)


                    coins.data.map((num, index) => (
                        <li key={index}>{num.name}</li>
                    ))

                }
            </ul> */}
            {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {coins.data.map((num) => (
                    <ListItem key={num.id}>
                        <ListItemAvatar>
                            <Avatar>
                                <img
                                    src={num.icon}
                                    alt="new"
                                />

                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={num.name} secondary={num.priceChange1d} />
                    </ListItem>
                ))}
            </List> */}
            <TableContainer component={Paper}>

                <Table sx={{ minWidth: '100%' }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">№</StyledTableCell>
                            <StyledTableCell align="center">Название</StyledTableCell>
                            <StyledTableCell align="center">Цена</StyledTableCell>
                            <StyledTableCell align="center">Изм.</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {coins.data.map((num, i = 0) => (
                            <StyledTableRow key={num.id}>
                                <StyledTableCell align="center" component="th" scope="row">{i + 1}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>

                                        <ListItemAvatar>
                                            <Avatar>
                                                <p><img src={num.icon} alt="new" /></p>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <p>{num.name}</p>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="center">{num.price}</StyledTableCell>
                                <StyledTableCell align="center">{num.priceChange1d}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}