Employee.destroy_all
%w(James Jono John Radu Cole Dario).each{|name| Employee.create(name: name)}
