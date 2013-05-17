class CropSwap.Routers.App extends Backbone.Router
  initialize: ->
    @bind( "all", @triggerRouteChange )
    @bind( "route:books": @loadSearch, "route:book": @loadSearch )
    @bind ( "all": @bodyID)

  routes:
    '': 'home',
    'home': 'home',
    'forgot_password': 'forgotPassword',
    'signup': 'signup',
    'books': 'books',
    'books/:bookId': 'book',
    'books/:bookId/*filePath': 'book',
    'sync': 'sync'

  home: ->
    view = new CropSwap.Views.Home()
    $('.wrapper').html(view.render().el)

  triggerRouteChange: (event) ->
    if /^route:/.test(event)
      console.log "route change event: #{event}"
      @trigger('change')
      $(".nav-collapse.collapse").removeClass "show"
