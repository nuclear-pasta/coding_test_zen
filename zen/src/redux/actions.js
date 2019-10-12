import ZenClient from "../client/ZenClient"

const Actions = {}

export const SET_NAME = "SET_NAME"
export const GET_LIST = "GET_LIST"
export const SET_FAIL = "SET_FAIL"

Actions.setName = function setName(selected_name) {
  return {
    type: SET_NAME,
    selected_name
  }
}



  Actions.getList  = () => dispatch => {
    ZenClient.getEmployees()
    .then(res => res.json())
    .then(employeesList =>
      dispatch({
        type: GET_LIST,
        payload: {
          list: employeesList.map(employee => employee.name)
        }
      })
    )
    .catch(() =>  dispatch({
      type: SET_FAIL
    }))
  };



export default Actions
