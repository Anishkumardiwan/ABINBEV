import React from 'react';
import { MenuItem, Select, Toolbar } from '@material-ui/core';
import { CountryState } from '../Context/SelectContext';

const BrandSelector = ({ data }) => {
    const { brand, setBrand } = CountryState();

    return (
        <>
            <p style={{ marginBottom: '1px', marginLeft: '25px' }}> {data.Name} </p>
            <Toolbar>
                <Select variant='outlined' style={{
                    width: 100,
                    height: 40,
                    marginRight: 15,
                }}
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                >
                    <MenuItem value={"All Brands"}>All Brands</MenuItem>
                    {
                        data.Value.map((item, i) => (
                            <MenuItem key={i} value={item.shortName}> {item.shortName} </MenuItem>
                        ))
                    }
                </Select>
            </Toolbar>
        </>
    )
}

export default BrandSelector