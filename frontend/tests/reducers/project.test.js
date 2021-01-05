// import { should } from 'chai';

// import { submitLoginSuccess, submitLogoutSuccess } from 'src/common/redux/actions/project';
// import projectReducer from 'src/common/redux/reducers/project';

// should();

// const initialState = {
//   project: {
//     id: null,
//     title: '',
//     description: '',
//     image: '',
//     tags: [],
//     user: {
//       id: null,
//       username: '',
//       userImage: '',
//     },
//   },
//   tags: [],
//   loading: true,
//   hasError: false,
// };

// describe('project reducer', () => {
//   it('should be a function', () => {
//     projectReducer.should.be.a('function');
//   });
//   it('should return initial state', () => {
//     const expectedState = {
//       recipesList: [],
//       isLoading: true,
//     };

//     projectReducer().should.deep.equal(expectedState);
//   });
//   it('handles action SAVE_RECIPES', () => {
//     const stateBefore = {
//       recipesList: [],
//       isLoading: true,
//     };
//     const recipeData = [
//       {
//         id: 1,
//         title: 'Crêpes',
//       },
//       {
//         id: 2,
//         title: 'Hamburger',
//       },
//     ];
//     const action = saveRecipes(recipeData);

//     const expectedState = {
//       recipesList: recipeData,
//       isLoading: false,
//     };

//     recipesReducer(stateBefore, action).should.deep.equal(expectedState);
//   });
// });
