const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts: (state, { payload }) => {
      return payload.toLowerCase();
    },
  },
});

export default filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
