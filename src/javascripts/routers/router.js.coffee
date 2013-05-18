class CropSwap.Routers.App extends Backbone.Router
  initialize: ->
    @bind( "all", @triggerRouteChange )

  routes:
    '': 'home',
    'home': 'home',
    'search': 'search'
    'offer': 'offer'
    'account': 'account'
    'login': 'login'

  home: ->
    view = new CropSwap.Views.Home()
    $('.wrapper').html(view.render().el)

  search: ->
    view = new CropSwap.Views.Search()
    $('.wrapper').html(view.render().el)

  offer: ->
    if CropSwap.is_logged_in()
      view = new CropSwap.Views.Offer()
      $('.wrapper').html(view.render().el)
    else
      routeTo('login')

  account: ->
    if CropSwap.is_logged_in()
      view = new CropSwap.Views.Account()
      $('.wrapper').html(view.render().el)
    else
      routeTo('login')

  login: ->
    view = new CropSwap.Views.Login()
    $('.wrapper').html(view.render().el)

  triggerRouteChange: (event) ->
    if /^route:/.test(event)
      console.log "route change event: #{event}"
      @trigger('change')
      $(".nav-collapse.collapse").removeClass "show"
