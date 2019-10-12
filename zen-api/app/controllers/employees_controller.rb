class EmployeesController < ApplicationController
  def show
    employees=Employee.all.sort_by{|employee| employee.name}
    render json: employees.as_json
  end
end
