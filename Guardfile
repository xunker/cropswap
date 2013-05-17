# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# Sample guardfile block for Guard::Haml
# You can use some options to change guard-haml configuration
# :output => 'public'                   set output directory for compiled files
# :input => 'src'                       set input directory with haml files
# :run_at_start => true                 compile files when guard starts
# :notifications => true                send notifictions to Growl/libnotify/Notifu
# :haml_options => { :ugly => true }    pass options to the Haml engine

#guard 'haml' do
#  watch(/^.+(\.html\.haml)/)
#end

guard 'haml', :output => 'public', :input => 'src', :run_at_start => true do
  watch %r{^src/.+(\.html\.haml)}
end

guard 'coffeescript', :input => 'src/javascripts', :output => 'public/javascripts', :run_at_start => true

guard :sass, :input => 'src/stylesheets', :output => 'public/stylesheets', :run_at_start => true

guard :copy, :from => 'src', :to => 'public', :run_at_start => true do
  watch(%r{^.+\.js$})
  watch(%r{^.+\.css$})
  watch(%r{^.+\.jpg$})
  watch(%r{^.+\.svg$})
  watch(%r{^.+\.gif$})
  watch(%r{^.+\.png$})
  watch(%r{^.+\.haml\.hbs$})
end
