import React from 'react';
import { CountryState } from '../Context/SelectContext';
import { FcSynchronize, FcOk } from 'react-icons/fc';
import { TableContainer, Table as Tables, TableHead, TableRow, TableCell, Checkbox, TableBody } from '@material-ui/core';

const Table = () => {
    const { filterData } = CountryState();

    // console.log(filterData);

    return (
        <div>
            <TableContainer>
                <Tables>
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#eeeeee', }}>
                            <TableCell>
                                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                            </TableCell>
                            {["BU", "TYPE", "YEAR", "MRKT SPEND", "MRKT NR", "MRKT MACO", "VOLUME", "MRKT ROI", "CREATED BY", "LAST MODIFIED", "STATUS"].map((head) => (
                                <TableCell
                                    style={{
                                        color: "black",
                                        fontWeight: "700",
                                        fontFamily: "Montserrat",
                                    }}
                                    key={head}
                                    align='center'
                                >
                                    {head}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            filterData.map(country => (
                                <TableRow >
                                    <TableCell>
                                        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                    </TableCell>
                                    {/*  flag name right side when remove P TAG (country.BU) */}
                                    <TableCell align='center'  style={{ padding: "0px" }}> <img src={`https://flagcdn.com/32x24/${country.BU.toLowerCase()}.png`} alt="Flag" />
                                        <p>{country.BU}</p>
                                    </TableCell>
                                    <TableCell align='center'>{country.TYPE}</TableCell>
                                    <TableCell align='center'>{country.YEAR}</TableCell>
                                    <TableCell align='center'>{country.MRKT_SPEND}</TableCell>
                                    <TableCell align='center'>{country.MRKT_NR}</TableCell>
                                    <TableCell align='center'>{country.MRKT_MACO}</TableCell>
                                    <TableCell align='center'>{country.VOLUME}</TableCell>
                                    <TableCell align='center'>{country.MRKT_ROI}</TableCell>
                                    <TableCell align='center'>{country.CREATED_BY}</TableCell>
                                    <TableCell align='center'>{country.LAST_MODIFIED}</TableCell>
                                    <TableCell align='center'>
                                        {
                                            country.STATUS === 'loading' ?
                                                <div style={{ fontSize: "20px" }}> <FcSynchronize /> </div> :
                                                <div style={{ fontSize: "20px" }}> <FcOk /> </div>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Tables>
            </TableContainer>
        </div>
    )
}

export default Table;