import { AppBar, Container, createTheme, ThemeProvider, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import selectData from '../assets/Selector.json';
import MarketSelector from '../Selectors/MarketSelector';
import ThemeSelector from '../Selectors/ThemeSelector';
import BrandSelector from '../Selectors/BrandSelector';
import CreatedBySelector from '../Selectors/CreatedBySelector';
import YearSelector from '../Selectors/YearSelector';
import PeriodSelector from '../Selectors/PeriodSelector';
import { CountryState } from '../Context/SelectContext';

// giving styles to NAVBAR
const useStyle = makeStyles(theme => ({
    myButton: {
        marginTop: '25px',
        backgroundColor: '#fdd835',

        // breakpoint for responsiveness MEDIUM
        [theme.breakpoints.down('md')]: {
            marginTop: '35px',
            marginBottom: '7px',
            marginLeft: '25px'
        },

        // breakpoint for responsiveness SMALL
        [theme.breakpoints.down('sm')]: {
            marginTop: '35px',
            marginLeft: '25px'
        },
    },
}));

const Navbar = () => {
    const classes = useStyle();
    const {
        market, countryData, filterData, setFilterData, theme, brand,
        createdBy, year, period
    } = CountryState();

    // Material Ui DARK THEME property
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#212121',
            },
            type: 'dark',
        },
    });

    const filterDataFunc = () => {
        // const countryFilterData = countryData.filter((data) => {
        //     return data.BU.startsWith(market);
        // });

        // FOR FILTERING DATA
        const countryFilterData = countryData.filter((data) => {
            return ((data.BU.startsWith(market === 'Select' ? data.BU : market)) &&
                (data.TYPE.startsWith(theme === 'All Themes' ? data.TYPE : theme)) &&
                (data.BU.startsWith(brand === 'All Brands' ? data.BU : brand)) &&
                (data.CREATED_BY.startsWith(createdBy === 'Select' ? data.CREATED_BY : createdBy)) &&
                (data.YEAR.startsWith(year === 'Select' ? data.YEAR : year)) &&
                (data.LAST_MODIFIED.startsWith(period === 'Select' ? data.LAST_MODIFIED : period))
            );
        });

        setFilterData(countryFilterData);
    }

    // console.log(filterData);

    return (
        <ThemeProvider theme={darkTheme}>

            {/* providing default props  */}
            <AppBar position='static'>
                <Container>
                    <Grid container spacing={3}>
                        {
                            // mappping DATA
                            selectData.map((data, i) => (

                                // material u grid container
                                <Grid item xs={1.5} key={i}>
                                    {
                                        data.Name === 'MARKET' ?
                                            <MarketSelector data={data} /> :
                                            data.Name === 'THEME' ?
                                                <ThemeSelector data={data} /> :
                                                data.Name === 'BRAND' ?
                                                    <BrandSelector data={data} /> :
                                                    data.Name === 'CREATED BY' ?
                                                        <CreatedBySelector data={data} /> :
                                                        data.Name === 'YEAR' ?
                                                            <YearSelector data={data} /> :
                                                            <PeriodSelector data={data} />
                                    }
                                </Grid>
                            ))
                        }
                        <Grid item xs={1.9}>

                            {/* Apply button */}
                            <Button onClick={filterDataFunc} variant="contained" className={classes.myButton}>
                                Apply
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Navbar;