import React from 'react';
// importing menuitem toolbar and select from MATERIAL UI
import { MenuItem, Select, Toolbar } from '@material-ui/core';

const Selector = ({ data }) => {
    return (
        <>
            <p style={{ marginBottom: '1px', marginLeft: '25px' }}> {data.Name} </p>
            <Toolbar>
                <Select variant='outlined' style={{
                    width: 130,
                    height: 40,
                }}
                    value='SELECT'
                >
                    {
                        data.Value.map(item => (
                            <MenuItem value=' ' > { data.value.country } </MenuItem>
                        ))
                    }
                </Select>
            </Toolbar>
        </>
    )
}

export default Selector;