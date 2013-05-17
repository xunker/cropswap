class CropSwap.Views.Home extends Backbone.View

#   template: "
# <div class='home'>
# <div class='row-fluid'>
# <div class='span1'></div>
# <div class='span5 sharing-image image-container'><img src='images/home/sharing.jpg'></div>
# <div class='span5 sharing-text'><h1>What are your neighors growing?</h1></div>
# <div class='span1'></div>
# </div>
# <div class='row-fluid'>
#   <div class='span12'>
#     <h3>CropSwap is the <stong>best<strong> way to share what you grow, and take part in the havest of your community.</h3>
#     </div>
# </div>
#   "

  template: JST['home']

  render: ->
    $(@el).html(rwh(@template, {world: 'y'}))
    this
