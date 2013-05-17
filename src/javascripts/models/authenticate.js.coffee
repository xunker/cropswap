class CropSwap.Models.Authenticate extends Backbone.Model

  urlRoot: '/api/authenticate'

  defaults:
    logged_in: null

  initialize: ->
    @load()
    @set_default_redirect_path()

  authenticated: ->
    @get('logged_in')

  set_default_redirect_path: ->
    @set('redirect_to_path', '/books')

  redirect_target: ->
    path = @get('redirect_to_path')
    @set_default_redirect_path()
    path

  load: ->
    $.get '/api/authenticate/check', (data) =>
      console.log 'loading'
      @trigger 'check'
      if data.ok == true
        console.log 'ok'
        @set('logged_in', true)
      else
        console.log 'not ok'
        @set('logged_in', false)

  logout: ->
    console.log('logout called')
    CropSwap.books_collection = undefined
    @set('logged_in', false)
    @id = "" # hack because the urlRoot doesn't return an Id attribute and destroy won't work without it
    @destroy()
    CropSwap.router.hideSort()
