import React from 'react';
import { MenuItem, Select, Toolbar } from '@material-ui/core';
import { CountryState } from '../Context/SelectContext';

const YearSelector = ({ data }) => {
    const { year, setYear } = CountryState();

    return (
        <>
            <p style={{ marginBottom: '1px', marginLeft: '25px' }}> {data.Name} </p>
            <Toolbar>
                <Select variant='outlined' style={{
                    width: 100,
                    height: 40,
                    marginRight: 15,
                }}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                >
                    <MenuItem value={"Select"}>Select</MenuItem>
                    {
                        data.Value.map((item, i) => (
                            <MenuItem key={i} value={item.year}> {item.year} </MenuItem>
                        ))
                    }
                </Select>
            </Toolbar>
        </>
    )
}

export default YearSelector