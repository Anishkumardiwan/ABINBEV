import React from 'react';
import { MenuItem, Select, Toolbar } from '@material-ui/core';
import { CountryState } from '../Context/SelectContext';

const CreatedBySelector = ({ data }) => {
    const { createdBy, setCreatedBy } = CountryState();

    return (
        <>
            <p style={{ marginBottom: '1px', marginLeft: '25px' }}> {data.Name} </p>
            <Toolbar>
                <Select variant='outlined' style={{
                    width: 100,
                    height: 40,
                    marginRight: 15,
                }}
                    value={createdBy}
                    onChange={(e) => setCreatedBy(e.target.value)}
                >
                    <MenuItem value={"Select"}>Select</MenuItem>
                    {
                        data.Value.map((item, i) => (
                            <MenuItem key={i} value={item.createdBy}> {item.createdBy} </MenuItem>
                        ))
                    }
                </Select>
            </Toolbar>
        </>
    )
}

export default CreatedBySelector;