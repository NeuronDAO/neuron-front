import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import {Button} from "@material-ui/core";

/**
 * Генерируем статичную таблицу, ибо можем себе
 * это позволить. С однй стороны все данные можно отдавать
 * пропсами и разложить Table ROW на компоненты. Но с другой
 * можно добиться такого же результата обычным CSS
 */
export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">NFT Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Rentail Duration</TableCell>
            <TableCell align="left">Collateral</TableCell>
            <TableCell align="right">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {/* THIS IS LINK GO ID */}
              <TableCell component="th" scope="row" className={classes.id}>
                <Typography component="a" href={row.id} className={classes.href}>
                  {row.id}
                </Typography>
              </TableCell>

              <TableCell align="left" className={classes.minInfo}>
                {/* THIS IS IMG */}
                <CardMedia className={classes.img} image={row.img} />
                {/* THIS IS NAME */}
                <Typography noWrap variant="body2">
                  {row.name}
                </Typography>
              </TableCell>

              {/* PTICE ETH */}
              <TableCell align="left" className={classes.cell}>
                <Typography color="primary" variant="body2">
                  {row.price} ETH
                </Typography>
              </TableCell>

              {/* ETH ADDRESS */}
              <TableCell align="left" className={classes.cell}>
                <Typography component="a" href={row.address} className={classes.href}>
                  {row.address}
                </Typography>
              </TableCell>

              {/* Rentail Duration THIS */}
              <TableCell align="left" className={classes.cell}>
                <Typography variant="subtitle2">MIN</Typography>
                <Typography variant="subtitle2">MAX</Typography>
              </TableCell>

              {/* Collateral  */}
              <TableCell align="left" className={classes.cell}>
                <Typography color="secondary" variant="body2">
                  {row.collat} ETH
                </Typography>
              </TableCell>

              <TableCell align="right">
                <Button components="a" variant="outlined" href="link_TO_HREF">
                  Viev
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: "1100px",
    width: "100%",
  },
  minInfo: {
    display: "flex",
    alignItems: "center",
    maxWidth: "250px",
  },
  img: {
    minWidth: "40px",
    height: "50px",
    display: "inline-block",
    borderRadius: "4px",
    marginRight: "15px",
  },
  href: {
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.text.secondary,
  },
  cell: {
    minWidth: "110px",
  },
}));

function createData(id, name, img, price, address, durat, collat) {
  return {id, name, img, price, address, durat, collat};
}

const rows = [
  createData(
    1,
    "Frozen yoghurt",
    "https://image.freepik.com/free-vector/close-up-of-cool-cat_36380-133.jpg",
    159,
    "0x9e11119BE78779a7cE912D9cEB698Fb3Ef5A2fB0",
    24,
    4.0
  ),
  createData(
    2,
    "Ice cream sandwich",
    "https://gazeta.a42.ru/uploads/c95/c95b9fe0-133c-11e8-8ba3-c1032bddd647.jpg",
    237,
    "0x9e11119BE78779a7cE912D9cEB698Fb3Ef5A2fB0",
    37,
    4.3
  ),
  createData(
    3,
    "MB VERY LONG TEXT OVER MEGA TEXT",
    "https://pbs.twimg.com/profile_images/1020200269227937792/kuVw5Omh.jpg",
    262,
    "0x9e11119BE78779a7cE912D9cEB698Fb3Ef5A2fB0",
    24,
    6.0
  ),
  createData(
    4,
    "Cupcake",
    "https://cdn22.img.ria.ru/images/134642/33/1346423382_0:206:4147:2558_600x0_80_0_0_1e13f6ed01991f66fccb4e473481570c.jpg",
    1000000,
    "0x9e11119BE78779a7cE912D9cEB698Fb3Ef5A2fB0",
    67,
    4.3
  ),
  createData(
    5,
    "Gingerbread",
    "https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-07/cat.jpg?itok=JGbIQ3oL",
    356,
    "0x9e11119BE78779a7cE912D9cEB698Fb3Ef5A2fB0",
    49,
    3.9
  ),
];
