

// const INITIAL_STATE = {
//     name: "",
//     address: "",
//     city: "",
//     state: "",
//     zipcode: 0,
//     img: "",
//     mortgage: 0.0,
//     rent: 0.0
//   };
//   // action type
//   const UPDATE_PROPERTY_INFO = "UPDATE_PROPERTY_INFO";
//   const UPDATE_PROPERTY_IMG = "UPDATE_PROPRTY_IMG";
//   const UPDATE_FINANCIAL_INFO = "UPDATE_FINANCIAL_INFO";
//   const CANCEL_NEW_HOUSE = "CANCEL_NEW_HOUSE";
  
//   export default function reducer(state = INITIAL_STATE, action) {
//     switch (action.type) {
//       case UPDATE_PROPERTY_INFO:
//         return Object.assign({}, state, {
//           name: action.payload.name,
//           adress: action.payload.address,
//           city: action.payload.city,
//           state: action.payload.state,
//           zipcode: action.payload.zipcode,
//           img: "",
//           mortgage: 0.0,
//           rent: 0.0
//         });
//       case UPDATE_PROPERTY_IMG:
//         return Object.assign({}, state, {
//           name: "",
//           adress: "",
//           city: "",
//           state: "",
//           zipcode: "",
//           img: action.payload,
//           mortgage: 0.0,
//           rent: 0.0
//         });
//       case UPDATE_FINANCIAL_INFO:
//         return Object.assign({}, state, {
//           name: "",
//           adress: "",
//           city: "",
//           state: "",
//           zipcode: "",
//           img: "",
//           mortgage: action.payload.mortgage,
//           rent: action.payload.rent
//         });
//       default:
//         return state;
//     }
//   }
//   // action creator
//   export function updatePropertyInfo(name, address, city, state, zipcode) {
//     return {
//       type: UPDATE_PROPERTY_INFO,
//       payload: {
//         name,
//         address,
//         city,
//         state,
//         zipcode
//       }
//     };
//   }
  
//   export function updatePropertyImg(img) {
//     return {
//       type: UPDATE_PROPERTY_IMG,
//       payload: img
//     };
//   }
//   export function updateFinancialInfo(mortgage, rent) {
//     return {
//       type: UPDATE_FINANCIAL_INFO,
//       payload: {
//         mortgage,
//         rent
//       }
//     };
//   }
//   export function cancelNewHouse() {
//       return {
//           type: CANCEL_NEW_HOUSE,
//           payload: INITIAL_STATE
//       }
//   }