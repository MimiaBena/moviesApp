import React from 'react';
import useStyles from './style';

const Header = ({movies,value, handleSubmit, handleSearch, handleChange}) => {
    const classes = useStyles();
    const arr = ['Comedy', 'Animation', 'Drame', 'Thrill' ];
    const arr2 = movies.
    map((category, id) => (category.category)).
    filter((item, id) => movies.
    map((category, id) => (category.category)).indexOf(item) === id).
    map((category, index) => category);
    const arr3 = arr2.filter(e => arr.includes(e))

    return (
        <div>
            <h1 className={classes.title} >Movie App</h1>
            <div className={classes.formContainer}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <input className={classes.inpuText} type="text" value={value} placeholder="Shoose your Film" id="input-search" onChange={handleSearch} />
                    <input className={classes.inputSubmit} type="submit" value="Search" />

                </form>


                <select onChange={handleChange} >
                    <option >Choose From List</option>
                    {
                        arr3.
                              map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))
                    }
                </select>
            </div>
        </div>
    );
};

export default Header;