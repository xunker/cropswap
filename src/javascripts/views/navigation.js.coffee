class CropSwap.Views.Navigation extends Backbone.View

  template: "
    <ul>
      <li> <a class='home-link' href='#'>CropSwap</a> </li>
      <li> <a class='search-link' href='#'>Search for Crops</a> </li>
      <li> <a class='offer-link' href='#'>Offer your Crops</a> </li>
      <li> <a class='account-link' href='#'>Your Account</a> </li>
      <li> <a class='log-in-link' href='#'>Log In</a> </li>
      <li> <a class='log-out-link' href='#'>Log Out</a> </li>
    </ul>"

  events:
    "click a.home-link": -> window.routeTo("home")
    "click a.search-link": -> window.routeTo("search")
    "click a.offer-link": -> window.routeTo("offer")

  render: ->
    $(@el).html(rwh(@template))
    this
