import React from 'react';
import { MenuItem, Select, Toolbar } from '@material-ui/core';
import { CountryState } from '../Context/SelectContext';

const ThemeSelector = ({ data }) => {
    const { theme, setTheme } = CountryState();

    return (
        <>
            <p style={{ marginBottom: '1px', marginLeft: '25px' }}> {data.Name} </p>
            <Toolbar>
                <Select variant='outlined' style={{
                    width: 100,
                    height: 40,
                    marginRight: 15,
                }}
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                >
                    <MenuItem value={"All Themes"}>All Themes</MenuItem>
                    {
                        data.Value.map((item, i) => (
                            <MenuItem key={i} value={item.type}> {item.type} </MenuItem>
                        ))
                    }
                </Select>
            </Toolbar>
        </>
    )
}

export default ThemeSelector