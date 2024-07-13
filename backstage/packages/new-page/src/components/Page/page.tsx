import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import {
  InfoCard,
  Header,
  Page,
  Content,
  HeaderLabel,
} from '@backstage/core-components';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { tableCloud }  from '../Cloud';

// const BootstrapInput = withStyles((theme) => ({
//   root: {
//     'label + &': {
//       marginTop: theme.spacing(3),
//     },
//   },
//   input: {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.background.paper,
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     padding: '10px 26px 10px 12px',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       borderRadius: 4,
//       borderColor: '#80bdff',
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//     },
//   },
// }))(InputBase);

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));


export const PageComponent = () => {

  const [page, setPage] = useState();

//   : {
//     title: string;
//     year: number;
// }| undefined

  const handleChange = (event: React.ChangeEvent<{}>, value:  {
    title: string;
    year: number;
} | null) => {
    if (value?.title === 'Region'){
      setPage(tableReturn)
    }
    else if (value?.title === 'Cloud'){
        setPage(tableCloud)

    }else{
      setPage('')
    }
  };

  return  <Page themeId="tool">
    <Header title="Welcome to create !" subtitle="Optional subtitle">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <Grid container spacing={3} direction="row">
        <Grid item md={2} xs={2}>
          <InfoCard >            
          <FormControl fullWidth={true}>
        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          fullWidth={true}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} label="Kind" variant="outlined" />}
        />
      </FormControl>
          </InfoCard>
        </Grid>
        <Grid item md={10} xs={10}>
          <InfoCard >
          {page}
          </InfoCard>
        </Grid>
      </Grid>
    </Content>
  </Page>
};

const top100Films = [
  { title: 'Cloud', year: 1994 },
  { title: 'Region', year: 1972 },
  { title: 'Network', year: 1974 },
  { title: 'Access Control', year: 2008 },
];

// table


export  const tableReturn = () => {

  return           <TableContainer component={Paper}>
  <Table aria-label="collapsible table">
    <TableHead>
      <TableRow>
        <TableCell />
        <TableCell>Dessert (100g serving)</TableCell>
        <TableCell align="right">Calories</TableCell>
        <TableCell align="right">Fat&nbsp;(g)</TableCell>
        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
        <TableCell align="right">Protein&nbsp;(g)</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <Row key={row.name} row={row} />
      ))}
    </TableBody>
  </Table>
</TableContainer>
}

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number,
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}
