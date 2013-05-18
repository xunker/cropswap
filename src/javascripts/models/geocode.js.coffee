class CropSwap.Models.Geocode extends Backbone.Model

  urlRoot: 'http://maps.googleapis.com/maps/api/geocode/json'


  initialize: (loc) ->
    @loc = loc
    @load()

  load: ->
    $.get "#{@urlRoot}?address=#{@loc}&sensor=false", (data) ->
      console.log 'loading geocode data'
      if data.status == 'OK'
        console.log 'got geocode data'
        if CropSwap.logged_in_user
          CropSwap.logged_in_user.latitude = data['results'][0]['geometry']['location']['lat']
          CropSwap.logged_in_user.longitude = data['results'][0]['geometry']['location']['lng']
        else
          console.log 'user not logged in, cant add location data'
      else
        alert('failed to load lat/long')
