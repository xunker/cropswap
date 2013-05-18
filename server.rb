#!/usr/bin/env ruby
require 'webrick'

root = File.expand_path './public'
# server = WEBrick::HTTPServer.new :Port => 3000, :DocumentRoot => root
server = WEBrick::HTTPServer.new :Port => 3000

server.mount_proc '/' do |req, res|
  path = req.request_uri.to_s.gsub('http://localhost:3000/', '')
  if path == ""
    res.body = File.new("./public/index.html").read
  elsif File.exist?("./public/#{path}")
    res.body = File.new("./public/#{path}").read
  else
    res.status = 302
    res['Location'] = '/'
  end
end

trap 'INT' do server.shutdown end

server.start
