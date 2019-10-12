require 'rails_helper'

RSpec.describe 'Employee Endpoint', type: :request do
  before :each do
    %w(James Jono John Radu Cole Dario).each{|name| Employee.create(name: name)}
  end
  scenario 'A GET request is sent to /employee and its status is 200' do
    get '/employee'
    expect(response.status).to eq 200
  end
  scenario 'it returns an array with an instance of all employees in the db' do
    get '/employee'
    body = JSON.parse(response.body)
    expect(body.length).to eq 6
  end

  scenario 'it returns an array with the names sorted in alphabetical order' do
    get '/employee'
    body = JSON.parse(response.body)
    expect(body.map{|employee| employee['name']}).to eq ["Cole", "Dario", "James", "John", "Jono", "Radu"]
  end

  scenario 'it does not include name with characters not allowed' do
    Employee.create(name: 'Dari0')
    get '/employee'
    expect(response.body).not_to include("Dari0")
  end

end
