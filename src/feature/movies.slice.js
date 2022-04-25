import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        listSearch: '',
        movies: null,
        
    },
    reducers: {
        setMoviesData: (state, { payload }) => {
            state.movies = payload;
          },
          removeMovie: (state, {payload}) => {
             state.movies = state.movies.filter((mov) => mov.id !== payload);
          },
          submitMovie: ( state, {payload}) => {
                    state.movies = state.movies.filter((mov) => mov.category.toLowerCase().
                    includes(payload) || mov.title.
                      toLowerCase().
                      includes(payload));
              
              state.listSearch='';
              
          },
          searchMovie: (state, {payload}) => {
            state.listSearch = payload;
          },
          searchCategoryMovie: (state, {payload}) => {
            
          },
          filterCategory: (state, {payload}) => {
          
              //const mo = movies.filter((category, id) => category.category === e.target.value);
              state.movies = state.movies.filter((mov, id) => {
                return payload.find((itemB) => {
                  return mov.category === itemB;
                })
              });

          },
        
    },
  }); 
   
  export const { setMoviesData, removeMovie, submitMovie, searchMovie, filterCategory, searchCategoryMovie } = moviesSlice.actions;
  export default moviesSlice.reducer;
 
  
  